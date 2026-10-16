import { cookies } from "next/headers";

export const getServerToken = async () => {
  const cookieStore = cookies();
  return (await cookieStore).get("token")?.value || null;
};

export const checkServerToken = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = await getServerToken();

  if (!token) return false;

  try {
    const res = await fetch(`${baseUrl}/auth/verify`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    });
    const data = await res.json();
    return res.ok && data.valid;
  } catch (err) {
    console.error("Error validating token:", err);
    return false;
  }
};
