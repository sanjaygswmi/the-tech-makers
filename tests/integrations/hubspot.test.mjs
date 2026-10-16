import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

process.env.HUBSPOT_API_KEY = "test";
const source = await readFile(new URL("../../src/utils/hubspot.js", import.meta.url), "utf8");
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const { checkExistingContact, addToContact } = await import(moduleUrl);

const enquiry = {
    first_name: "Taylor",
    last_name: "Example",
    email: "taylor@example.com",
    phone: "+91 9876543210",
    company: "Example Ltd",
    regarding: "Services",
    message: "Please contact me",
    traffic_source: "Website",
};

test("contact lookup uses email as the stable identity when phone changes", async () => {
    const originalFetch = globalThis.fetch;
    let requestBody;
    globalThis.fetch = async (url, options) => {
        assert.match(String(url), /\/contacts\/search$/);
        requestBody = JSON.parse(options.body);
        return Response.json({ results: [{ id: "contact-123" }] });
    };

    try {
        const result = await checkExistingContact(enquiry.email);
        assert.equal(result.id, "contact-123");
        assert.deepEqual(requestBody.filterGroups[0].filters, [
            { propertyName: "email", operator: "EQ", value: enquiry.email },
        ]);
    } finally {
        globalThis.fetch = originalFetch;
    }
});

test("a failed repeat-submission note is reported as a failed CRM submission", async () => {
    const originalFetch = globalThis.fetch;
    const originalError = console.error;
    const logged = [];
    const requests = [];
    console.error = (...args) => logged.push(args);
    globalThis.fetch = async (url, options) => {
        requests.push({ url: String(url), options });
        if (String(url).endsWith("/contacts/search")) {
            return Response.json({ results: [{ id: "contact-123" }] });
        }
        if (String(url).endsWith("/contacts/contact-123")) {
            return new Response(null, { status: 200 });
        }
        if (String(url).endsWith("/notes")) {
            return Response.json({ message: "sensitive provider detail" }, { status: 500 });
        }
        throw new Error("Unexpected HubSpot request");
    };

    try {
        const result = await addToContact(enquiry);
        assert.equal(result.success, false);
        assert.equal(result.message, "Failed to record repeat submission note");
        assert.equal(requests.length, 3);
        assert.ok(logged.some(([message, details]) =>
            message === "HubSpot note creation failed" && details?.status === 500
        ));
        assert.equal(JSON.stringify(logged).includes(enquiry.email), false);
        assert.equal(JSON.stringify(logged).includes("sensitive provider detail"), false);
    } finally {
        globalThis.fetch = originalFetch;
        console.error = originalError;
    }
});

test("an existing contact gets a note containing the latest submitted details", async () => {
    const originalFetch = globalThis.fetch;
    const requests = [];
    globalThis.fetch = async (url, options) => {
        const target = String(url);
        requests.push({ target, options });
        if (target.endsWith("/contacts/search")) {
            return Response.json({ results: [{ id: "contact-456" }] });
        }
        if (target.endsWith("/contacts/contact-456")) {
            return new Response(null, { status: 200 });
        }
        if (target.endsWith("/notes")) {
            return Response.json({ id: "note-789" });
        }
        throw new Error("Unexpected HubSpot request");
    };

    try {
        const result = await addToContact({ ...enquiry, message: "Second enquiry with new details" });
        assert.equal(result.success, true);
        assert.equal(result.contactId, "contact-456");
        assert.equal(result.contactAction, "updated");
        const noteRequest = requests.find(({ target }) => target.endsWith("/notes"));
        const noteBody = JSON.parse(noteRequest.options.body);
        assert.match(noteBody.properties.hs_note_body, /Repeat Website Form Submission/);
        assert.match(noteBody.properties.hs_note_body, /Second enquiry with new details/);
        assert.match(noteBody.properties.hs_note_body, /taylor@example\.com/);
        assert.equal(noteBody.associations[0].to.id, "contact-456");
    } finally {
        globalThis.fetch = originalFetch;
    }
});

test("a new enquiry creates a contact and records a submission note", async () => {
    const originalFetch = globalThis.fetch;
    const requests = [];
    globalThis.fetch = async (url, options) => {
        const target = String(url);
        requests.push({ target, options });
        if (target.endsWith("/contacts/search")) {
            return Response.json({ results: [] });
        }
        if (target.endsWith("/contacts")) {
            return Response.json({ id: "contact-new-1" });
        }
        if (target.endsWith("/notes")) {
            return Response.json({ id: "note-new-1" });
        }
        throw new Error("Unexpected HubSpot request");
    };

    try {
        const result = await addToContact(enquiry);
        assert.equal(result.success, true);
        assert.equal(result.contactId, "contact-new-1");
        assert.equal(result.contactAction, "created");
        assert.equal(requests.length, 3);
        const contactRequest = requests.find(({ target, options }) =>
            target.endsWith("/contacts") && options.method === "POST"
        );
        assert.equal(JSON.parse(contactRequest.options.body).properties.email, enquiry.email);
        const noteRequest = requests.find(({ target }) => target.endsWith("/notes"));
        const noteBody = JSON.parse(noteRequest.options.body);
        assert.match(noteBody.properties.hs_note_body, /New Website Form Submission/);
        assert.match(noteBody.properties.hs_note_body, /Please contact me/);
        assert.equal(noteBody.associations[0].to.id, "contact-new-1");
    } finally {
        globalThis.fetch = originalFetch;
    }
});
