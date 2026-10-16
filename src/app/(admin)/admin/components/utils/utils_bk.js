// import { cookies } from 'next/headers'; // Import cookies API for server-side token retrieval

export const checkToken = async (router) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    // const token = getToken(); // Retrieve token from cookies
    const token = "";

    if (!token) {
        router.push('/admin');
        return false;
    }

    try {
        const response = await fetch(`${baseUrl}/auth/verify`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token, // Pass the token in the headers
            },
        });

        const data = await response.json();

        if (response.ok && data.valid) {
            return true; // Token is valid
        } else {
            router.push('/admin');
            return false;
        }
    } catch (err) {
        console.error('Error validating token:', err);
        return false; // Error in token validation
    }
};

export const getToken = () => {
    // Retrieve token from cookies
    const cookieStore = cookies();
    return cookieStore.get('token')?.value || null;
};

export const removeHTMLTags = (input) => {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
};

export const slugify = (title) => {
    return title
      .toLowerCase()                // Convert the string to lowercase
      .trim()                        // Remove any leading or trailing spaces
      .replace(/[^a-z0-9\s-]/g, '')  // Remove any special characters except spaces and hyphens
      .replace(/\s+/g, '-')          // Replace spaces with hyphens
      .replace(/-+/g, '-');          // Ensure no consecutive hyphens
  };
