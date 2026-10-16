const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
const HUBSPOT_API_URL = "https://api.hubapi.com/crm/v3/objects";
const HUBSPOT_REQUEST_TIMEOUT_MS = 10_000;

function hubspotFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        cache: "no-store",
        signal: AbortSignal.timeout(HUBSPOT_REQUEST_TIMEOUT_MS),
    });
}

const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    })[character]);

function getAuthHeaders() {
    if (!HUBSPOT_API_KEY) throw new Error("HubSpot is not configured");
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
    };
}

/** Search succeeds with null only when HubSpot confirms there is no match. */
export async function checkExistingContact(email) {
    try {
        // Email is the primary identity for a website enquiry. Including phone in
        // the same filter group uses AND semantics and can create duplicate CRM
        // contacts whenever an existing contact changes their phone number.
        const response = await hubspotFetch(`${HUBSPOT_API_URL}/contacts/search`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                filterGroups: [{
                    filters: [
                        { propertyName: "email", operator: "EQ", value: email },
                    ],
                }],
            }),
            cache: "no-store",
        });
        if (!response.ok) throw new Error("HubSpot contact search failed");
        const data = await response.json();
        return data.results?.[0] || null;
    } catch {
        console.error("HubSpot contact search failed");
        throw new Error("HubSpot contact search failed");
    }
}

export async function createContact(contactData) {
    try {
        const response = await hubspotFetch(`${HUBSPOT_API_URL}/contacts`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({ properties: contactData }),
            cache: "no-store",
        });
        if (!response.ok) {
            console.error("HubSpot contact creation failed", { status: response.status });
            return null;
        }
        return await response.json();
    } catch {
        console.error("HubSpot contact creation failed");
        return null;
    }
}

export async function updateContact(contactId, updateData) {
    try {
        const response = await hubspotFetch(
            `${HUBSPOT_API_URL}/contacts/${encodeURIComponent(String(contactId))}`,
            {
                method: "PATCH",
                headers: getAuthHeaders(),
                body: JSON.stringify({ properties: updateData }),
                cache: "no-store",
            }
        );
        if (!response.ok) {
            console.error("HubSpot contact update failed", { status: response.status });
        }
        return response.ok;
    } catch {
        console.error("HubSpot contact update failed");
        return false;
    }
}

/** Every form submission must be recorded as a note; user-provided values are HTML-escaped. */
export async function addNoteToContact(contactId, contactData, { repeatSubmission = false } = {}) {
    try {
        const fieldMapping = {
            hs_analytics_source: "Traffic Source",
            firstname: "First Name",
            lastname: "Last Name",
        };
        const noteContent = `
            <p><strong>${repeatSubmission ? "Repeat Website Form Submission" : "New Website Form Submission"}:</strong></p>
            <ul>
                ${Object.entries(contactData)
                    .map(([key, value]) => {
                        const formattedKey = fieldMapping[key] || key
                            .split("_")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ");
                        return `<li><strong>${escapeHtml(formattedKey)}:</strong> ${escapeHtml(value || "N/A")}</li>`;
                    })
                    .join("\n")}
            </ul>
        `;

        const noteResponse = await hubspotFetch(`${HUBSPOT_API_URL}/notes`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                properties: {
                    hs_note_body: noteContent,
                    hs_timestamp: String(Date.now()),
                },
                associations: [{
                    to: { id: String(contactId) },
                    types: [{
                        associationCategory: "HUBSPOT_DEFINED",
                        associationTypeId: 202,
                    }],
                }],
            }),
            cache: "no-store",
        });

        if (!noteResponse.ok) {
            console.error("HubSpot note creation failed", { status: noteResponse.status });
            return false;
        }
        return true;
    } catch {
        console.error("HubSpot note creation failed");
        return false;
    }
}

export async function addToContact(contactData) {
    try {
        const hubspotData = {
            firstname: contactData.first_name,
            lastname: contactData.last_name,
            email: contactData.email,
            phone: contactData.phone,
            company: contactData.company,
            select_reason_for_contacting_us: contactData.regarding,
            message: contactData.message,
            website: typeof contactData.company_url === "string" && contactData.company_url.trim()
                ? contactData.company_url.trim()
                : "",
            hs_analytics_source: contactData.traffic_source,
            contact_source: "Website",
        };

        const existingContact = await checkExistingContact(contactData.email);
        if (existingContact) {
            const updated = await updateContact(existingContact.id, hubspotData);
            if (!updated) return { success: false, message: "Failed to update existing contact" };
            const noteCreated = await addNoteToContact(existingContact.id, hubspotData, { repeatSubmission: true });
            if (!noteCreated) return { success: false, message: "Failed to record repeat submission note" };
            return {
                success: true,
                message: "Existing contact updated and repeat submission recorded",
                contactId: existingContact.id,
                contactAction: "updated",
            };
        }

        const newContact = await createContact(hubspotData);
        if (!newContact?.id) return { success: false, message: "Failed to create contact" };
        const noteCreated = await addNoteToContact(newContact.id, hubspotData);
        if (!noteCreated) return { success: false, message: "Failed to record new submission note" };
        return {
            success: true,
            message: "New contact created and submission recorded",
            contactId: newContact.id,
            contactAction: "created",
        };
    } catch {
        console.error("HubSpot contact processing failed");
        return { success: false, message: "Failed to process contact" };
    }
}
