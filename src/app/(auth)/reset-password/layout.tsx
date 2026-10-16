import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Reset Password | The Tech Makers",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function ResetPasswordLayout({ children }: { children: ReactNode }) {
  return children;
}
