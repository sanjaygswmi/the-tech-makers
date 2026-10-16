"use client";

import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { detectAnalyticsSource } from "../utils/utils";

const ContactForm = () => {
    const recaptchaRef = useRef();
    const [countryCode, setCountryCode] = useState("in"); // Default to 'us' as fallback
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        company: "",
        phone: "",
        regarding: "",
        message: "",
    });

    const [analyticsSource, setAnalyticsSource] = useState("DIRECT_TRAFFIC");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLocalDevelopment, setIsLocalDevelopment] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState({ type: "", text: "" });

    useEffect(() => {
        setAnalyticsSource(detectAnalyticsSource());
        const hostname = window.location.hostname;
        setIsLocalDevelopment(
            process.env.NODE_ENV === "development" &&
            ["localhost", "127.0.0.1", "::1", "[::1]"].includes(hostname)
        );
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setSubmissionMessage({ type: "", text: "" });

        const requiredFields = ["fname", "lname", "email", "phone", "regarding", "message"];
        for (const field of requiredFields) {
            if (!formData[field]?.trim()) {
                setSubmissionMessage({
                    type: "error",
                    text: `Please fill in the ${field.replace("_", " ")} field.`,
                });
                return;
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmissionMessage({ type: "error", text: "Please enter a valid email address." });
            return;
        }

        const phoneDigits = formData.phone.replace(/\D/g, "");
        if (phoneDigits.length < 10 || phoneDigits.length > 15) {
            setSubmissionMessage({ type: "error", text: "Please enter a valid phone number (10-15 digits)." });
            return;
        }

        const recaptchaToken = isLocalDevelopment ? "" : recaptchaRef.current?.getValue();
        if (!isLocalDevelopment && !recaptchaToken) {
            setSubmissionMessage({ type: "error", text: "Please complete the reCAPTCHA." });
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, analyticsSource, recaptchaToken }),
            });

            let result = {};
            try {
                result = await response.json();
            } catch {
                // A non-JSON response is handled like any other failed request.
            }

            if (!response.ok || !result.success) {
                throw new Error(result.error || result.message || "We couldn't submit your enquiry. Please try again.");
            }

            setSubmissionMessage({
                type: "success",
                text: result.message || "Thank you. Your enquiry has been received.",
            });
            setFormData({
                fname: "",
                lname: "",
                email: "",
                company: "",
                phone: "",
                regarding: "",
                message: "",
            });
        } catch (error) {
            setSubmissionMessage({
                type: "error",
                text: error instanceof Error
                    ? error.message
                    : "We couldn't submit your enquiry. Please check your connection and try again.",
            });
        } finally {
            recaptchaRef.current?.reset();
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        // Get user's country based on IP (HTTPS-friendly endpoint)
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                const code =
                    response?.data?.country_code ||
                    response?.data?.countryCode;
                if (code) {
                    setCountryCode(String(code).toLowerCase());
                }
            })
            .catch((error) => console.error("Error fetching country code:", error));
    }, []);

    return (
        <form onSubmit={handleSubmit} aria-busy={isSubmitting}>
            <div className="form-grid">

                <div className="form-group">
                    <label htmlFor="fname">First Name <span className="required red">*</span>:</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        required
                        onChange={handleChange}
                        value={formData.fname}
                        className="w-full h-[42px] p-2 bg-[#f6f6f6] border-0 border-b border-gray-400 focus:outline-none rounded-none text-base text-gray-900"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lname">Last Name <span className="required red">*</span>:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        required
                        onChange={handleChange}
                        value={formData.lname}
                        className="w-full h-[42px] p-2 bg-[#f6f6f6] border-0 border-b border-gray-400 focus:outline-none rounded-none text-base text-gray-900"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address <span className="required red">*</span>:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={handleChange}
                        value={formData.email}
                        className="w-full h-[42px] p-2 bg-[#f6f6f6] border-0 border-b border-gray-400 focus:outline-none rounded-none text-base text-gray-900"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number <span className="required red">*</span>:</label>
                    <PhoneInput
                        country={countryCode} // Dynamically set country code
                        value={formData.phone}
                        onChange={(value) => setFormData({ ...formData, phone: value })}
                        containerClass="!w-full"
                        inputClass="!w-full !h-[42px] !p-2 !pl-[48px] !bg-[#f6f6f6] !border-0 !border-b !border-gray-400 !rounded-none !text-base !text-gray-900 focus:!outline-none focus:!ring-0"
                        buttonClass="!bg-transparent !border-0 !border-b !border-gray-400 !rounded-none hover:!bg-transparent"
                        dropdownClass="!text-gray-900 !bg-white shadow-lg"
                        inputProps={{
                            name: "phone",
                            id: "phone",
                            required: true,
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="company">Company Name:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        onChange={handleChange}
                        value={formData.company}
                        className="w-full h-[42px] p-2 bg-[#f6f6f6] border-0 border-b border-gray-400 focus:outline-none rounded-none text-base text-gray-900"
                    />
                </div>

                {/* <div className="form-group">
                    <label>Company URL:</label>
                    <input type="url" id="companyUrl" name="companyUrl" onChange={handleChange} value={formData.companyUrl} />
                </div> */}

                <div className="form-group">
                    <label htmlFor="regarding">Reason to Contact <span className="required red">*</span>:</label>
                    <select
                        name="regarding"
                        id="regarding"
                        required
                        onChange={handleChange}
                        value={formData.regarding}
                        className={`w-full h-[42px] p-2 bg-[#f6f6f6] border-0 border-b border-gray-400 focus:outline-none rounded-none text-base cursor-pointer ${
                            formData.regarding ? "text-gray-900" : "text-gray-500"
                        }`}
                    >
                        <option value="" disabled className="text-gray-500 bg-white">
                            Please select reason to contact us
                        </option>
                        <option value="Website Development" className="text-gray-900 bg-white">
                            Website Development
                        </option>
                        <option value="Mobile App Development" className="text-gray-900 bg-white">
                            Mobile App Development
                        </option>
                        <option value="UI/UX & Web Design" className="text-gray-900 bg-white">
                            UI/UX & Web Design
                        </option>
                        <option value="Product Engineering & MVP" className="text-gray-900 bg-white">
                            Product Engineering & MVP
                        </option>
                        <option value="E-Commerce Solutions" className="text-gray-900 bg-white">
                            E-Commerce Solutions (Shopify / Custom)
                        </option>
                        <option value="Digital Marketing & SEO" className="text-gray-900 bg-white">
                            Digital Marketing & SEO
                        </option>
                        <option value="Email Marketing" className="text-gray-900 bg-white">
                            Email Marketing
                        </option>
                        <option value="AI Solutions & Chatbots" className="text-gray-900 bg-white">
                            AI Solutions & Chatbot Development
                        </option>
                        <option value="Quality Assurance & Testing" className="text-gray-900 bg-white">
                            Quality Assurance & Testing
                        </option>
                        <option value="Technology Consulting" className="text-gray-900 bg-white">
                            Technology Consulting
                        </option>
                        <option value="General Enquiry" className="text-gray-900 bg-white">
                            General Enquiry
                        </option>
                        <option value="Other" className="text-gray-900 bg-white">
                            Other
                        </option>
                    </select>
                </div>

                {/* <div className="form-group">
                    <label>Attachment:</label>
                    <input type="file" id="attachment" name="attachment" onChange={handleFileChange} />
                </div> */}

            </div>

            <div className="form-group mb-6">
                <label htmlFor="message">Your Message <span className="required red">*</span>:</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    onChange={handleChange}
                    value={formData.message}
                    className="w-full p-2 bg-[#f6f6f6] border-0 border-b border-gray-400 focus:outline-none rounded-none text-base text-gray-900 resize-y"
                />
            </div>

            <div className='md:flex justify-between'>
                {/* Google reCAPTCHA is required outside local development. */}
                {!isLocalDevelopment && (
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        ref={recaptchaRef}
                    />
                )}
                <div className="md:flex-1 md:ml-4 mt-3 md:mt-0" aria-live="polite" role="status">
                    {submissionMessage.text && (
                        <p className={submissionMessage.type === "success" ? "text-green-700" : "text-red-600"}>
                            {submissionMessage.text}
                        </p>
                    )}
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-orange-500 float-right h-10 text-white px-4 py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed">
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>

    );
};

export default ContactForm;
