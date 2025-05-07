import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://blind-code.com'),
    title: {
        default: 'Blind Code | Momčilo Nikolić - Frontend Developer Portfolio',
        template: '%s | Blind Code Portfolio',
    },
    description: 'Portfolio website of Momčilo Nikolić (Blind Code), a frontend developer based in Zagreb, Croatia, showcasing projects built with React, Next.js, Tailwind CSS, and more.',
    openGraph: {
        title: 'Blind Code | Momčilo Nikolić - Frontend Developer Portfolio',
        description: 'Portfolio website of Momčilo Nikolić (Blind Code), a frontend developer based in Zagreb, Croatia, showcasing projects built with React, Next.js, Tailwind CSS, and more.',
        url: 'https://blind-code.com',
        siteName: 'Blind Code Portfolio',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://blind-code.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Blind Code Portfolio'
            }
        ]
    },
    robots: {
        index: true,
        follow: true
    },
    keywords: 'frontend developer, web development, React, Next.js, Tailwind CSS, Zagreb, Croatia, Momčilo Nikolić, Blind Code',
    icons: {
        icon: '/favicon.ico'
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navbar />
        <main className="py-8">
            <PageTransitionWrapper>
                {children}
            </PageTransitionWrapper>
        </main>
        <Footer />
        </body>
        </html>
    );
}
