import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/app/shared/NavBar/ResponsiveNav";
import Footer from "@/app/shared/Footer/Footer";
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react";

const bebas = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "SanBar CC",
    description: "San Bar Construction Corp. is a premier specialized Construction Company.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" type="image/png" href="/SanBarLogo2.png" sizes="24x36" />

            {/* Title for Google Search */}
            <title>San Bar Construction Corp. | Specialized Construction Company | Sign Manufacturer</title>

            {/* Meta Description for Google Search */}
            <meta name="description"
                  content="San Bar Construction Corp. sets the standard for excellence in specialized services, including pavement markings, sign design and manufacturing, guardrail installation, cable barrier installation, overhead sign structure installation, rumble strip installation, and more." />

            {/* Open Graph Tags for Social Media */}
            <meta property="og:title" content="San Bar Construction Corp. | Road Services & Sign Manufacturing" />
            <meta property="og:description" content="San Bar Construction Corp specializes in specialty construction services across New Mexico." />
            <meta property="og:image" content="/SanBarTextLogo-1.webp" />
            <meta property="og:url" content="https://www.sanbarcc.com" />
            <meta property="og:type" content="website" />

            {/* Google reCAPTCHA v3 Script */}
            <Script
                src={`https://www.google.com/recaptcha/api.js?render=explicit`}
                strategy="beforeInteractive"
            />
        </head>
        <body className={bebas.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <Analytics />
        </body>
        </html>
    );
}
