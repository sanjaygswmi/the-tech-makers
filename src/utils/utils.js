export const detectAnalyticsSource = () => {
    if (typeof window === "undefined") return "DIRECT_TRAFFIC"; // Default for SSR

    const referrer = document.referrer;
    console.log("Referrer", referrer);

    if (!referrer) {
        return "DIRECT_TRAFFIC";
    } else if (referrer.includes("google.") || referrer.includes("bing.") || referrer.includes("yahoo.")) {
        return "ORGANIC_SEARCH";
    } else if (referrer.includes("facebook.") || referrer.includes("twitter.") || referrer.includes("linkedin.") || referrer.includes("instagram.")) {
        return "SOCIAL_MEDIA";
    } else if (referrer.includes("utm_source=email")) {
        return "EMAIL_MARKETING";
    } else if (referrer.includes("utm_source=paid")) {
        return "PAID_SEARCH";
    } else {
        return "REFERRALS";
    }
};
