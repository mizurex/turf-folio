import type { Metadata } from "next";
import { Geist, Space_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeToggleNext } from "@/components/ui/theme-toggle-next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MobileProvider } from "@/providers/mobile-provider";
import { ComponentsHeader } from "@/components/components-header";
import Mascot from "@/components/ui/mascot";

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
        <MobileProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex items-center justify-between sticky top-0 z-50 bg-background border-b px-4 py-2">
              <Link href='/'>
              <Mascot size={30}/>
              </Link>
              
              
              <div className="flex items-center gap-3">
                <Link href="https://github.com/mizurex" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                  <FaGithub className="w-4 h-4" />
                </Link>
                <ThemeToggleNext />
                <ComponentsHeader />
              </div>
            </div>
                 
            {children}
          </ThemeProvider>
        </MobileProvider>
      </body>
    </html>
  );
}


