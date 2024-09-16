import type { Metadata } from "next";
import {Bebas_Neue } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/app/shared/NavBar/ResponsiveNav";
import Footer from "@/app/shared/Footer/Footer";

const bebas = Bebas_Neue({
  weight:['400'],
  subsets:['latin']});

export const metadata: Metadata = {
  title: "SanBar CC",
  description: "San Bar Construction Corp. is a premier specialized Construction Company.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
      <head>
          <link rel="icon" type="image/png" href="/sanbarconst.png" sizes="24x48"/>
          <meta name="description"
                content="San Bar Construction Corp specializes in road services, including pavement markings, guardrail installation, sign design, water blasting, and more."/>
          <title>San Bar Construction Corp | Specialized Construction Company. </title>
      </head>
      <body className={bebas.className}>
      <ResponsiveNav/>
      {children}
      <Footer/>
      </body>
      </html>
  );
}
