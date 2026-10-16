// src/app/(admin)/admin/login/layout.tsx
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Login :: The Tech Makers",
  description: "",
};

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
