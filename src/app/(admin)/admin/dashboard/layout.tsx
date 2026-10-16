import type { Metadata } from "next";
// import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: 'Dashboard :: The Tech Makers',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <Navbar title="Dashboard"/> */}
      {children}
    </>
  )
}
