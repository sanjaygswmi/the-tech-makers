import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100','300','400','500','600','700'],
  display: 'swap',
})

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.thetechmakers.com/#organization",
      name: "The Tech Makers",
      url: "https://www.thetechmakers.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.thetechmakers.com/logo.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.thetechmakers.com/#website",
      url: "https://www.thetechmakers.com/",
      name: "The Tech Makers",
      publisher: { "@id": "https://www.thetechmakers.com/#organization" },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thetechmakers.com'),
  title: 'Top Website Development Company in USA - The Tech Makers',
  description:
    'The Tech Makers delivers web development, software, mobile app, AI, and digital solutions for businesses.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  )
}
