import type { Metadata } from "next";
import { Geist, Space_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header"; 
import { MobileProvider } from "@/providers/mobile-provider";

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
  title: "Portfolio - Jay",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${spaceMono.variable}`}>
      <body>
        <MobileProvider>

             <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
        </MobileProvider>
     
      </body>
    </html>
  );
}
