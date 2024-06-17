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
  description: "SanBar Construction Corp.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
      <body className={bebas.className}>
      <ResponsiveNav />
      {children}
      <Footer/>
      </body>
      </html>
  );
}
