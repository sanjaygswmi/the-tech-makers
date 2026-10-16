import jwt from "jsonwebtoken";
import dbConnect from "@/src/lib/dbConnect";
import User from "@/src/models/User.js";

const JWT_SECRET = process.env.JWT_SECRET;

export default async function authMiddleware(req, requiredRoles = []) {
    if (!JWT_SECRET) {
        return { valid: false, msg: "Authentication is not configured", status: 500 };
    }

    let decoded;
    try {
        const token = req.cookies.get("token")?.value || req.headers.get("x-auth-token");
        if (!token) {
            return { valid: false, msg: "No token provided", status: 401 };
        }

        decoded = jwt.verify(token, JWT_SECRET);
        if (!decoded?.user?.id) {
            return { valid: false, msg: "Invalid token", status: 401 };
        }
    } catch {
        return { valid: false, msg: "Invalid token", status: 401 };
    }

    try {
        await dbConnect();
        const account = await User.findById(decoded.user.id)
            .select("_id role isDeleted")
            .lean();

        if (!account || account.isDeleted) {
            return { valid: false, msg: "Account is unavailable", status: 401 };
        }

        const user = { id: String(account._id), role: account.role };
        if (requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
            return { valid: false, msg: "Access denied", status: 403 };
        }

        return { valid: true, user, status: 200 };
    } catch {
        return { valid: false, msg: "Unable to verify account", status: 500 };
    }
}
