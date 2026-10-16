import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Toster from "./components/Toster";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: false,
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Admin :: The Tech Makers",
  description: "",
};

const SIDEBAR_WIDTH = 240;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Toster />
        <div className="flex">
          {/* Sidebar fixed */}
          <div
            className="fixed h-screen border-r border-gray-200 z-50"
            style={{ width: SIDEBAR_WIDTH }}
          >
            <Sidebar />
          </div>

          {/* Main container */}
          <main
            className="flex-1 min-h-screen p-6 ml-[240px] bg-gray-50"
          >
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
