import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Creepy Host - Premium Minecraft Server Hosting",
  description: "High-performance Minecraft server hosting with instant setup, DDoS protection, and 24/7 support. Trusted by thousands of players worldwide."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
