const normalizeBaseUrl = (value: string) => value.replace(/\/$/, '');

const isLocalhostUrl = (value: string) => {
    try {
        const parsed = new URL(value);
        const host = parsed.hostname.toLowerCase();
        return host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0';
    } catch {
        return false;
    }
};

export const getFrontendBaseUrl = () => {
    const explicit = process.env.NEXT_PUBLIC_FRONTEND_URL;
    if (explicit) {
        const cleaned = normalizeBaseUrl(explicit);
        if (!isLocalhostUrl(cleaned) || process.env.NODE_ENV !== 'production') {
            return cleaned;
        }
    }

    const api = process.env.NEXT_PUBLIC_API_URL;
    if (api) {
        const cleaned = normalizeBaseUrl(api.replace(/\/api\/?$/, ''));
        if (!isLocalhostUrl(cleaned) || process.env.NODE_ENV !== 'production') {
            return cleaned;
        }
    }

    return '';
};

export const normalizeImageUrl = (imagePath?: string, baseUrl?: string) => {
    const placeholder = '/blog1.png';
    if (!imagePath) {
        return placeholder;
    }

    if (/^https?:\/\//i.test(imagePath)) {
        return imagePath;
    }

    if (baseUrl) {
        const cleanedBase = baseUrl.replace(/\/$/, '');
        if (imagePath.startsWith('/')) {
            return `${cleanedBase}${imagePath}`;
        }

        return `${cleanedBase}/${imagePath}`;
    }

    return imagePath;
};
