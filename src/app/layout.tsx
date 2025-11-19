import type { Metadata } from "next";
import { Geist, Space_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Components",
  icons: { icon: "/favicon.ico" },
};

export default function ShowcaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${spaceMono.variable}`}>
      
      <body>
        
          {children}
   
      </body>
    </html>
  );
}


