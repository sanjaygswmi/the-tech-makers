import { redirect } from "next/navigation";
import { getServerToken } from "./components/utils/server-utils";

export default async function admin() {
    const token = await getServerToken();
    if (!token) {
        // If no token, redirect to login 
        redirect("/login"); 
    } else {
        // If token exists, redirect to dashboard
        redirect("/admin/dashboard");
    }
}