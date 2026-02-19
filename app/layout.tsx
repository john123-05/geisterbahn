import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import UniversalNavbar from "./UniversalNavbar";
import UniversalFooter from "./UniversalFooter";

const headingFont = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Schneider - Pirates Adventure",
  description: "Immersive Landingpage für das Laufgeschäft Pirates Adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <UniversalNavbar />
        {children}
        <UniversalFooter />
      </body>
    </html>
  );
}
