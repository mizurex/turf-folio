import type { Metadata } from "next";
import { Geist, Space_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeToggleNext } from "@/components/ui/theme-toggle-next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLeftArrowAlt } from "react-icons/bi";

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex items-center justify-between sticky top-0 z-50 bg-background">
                <div className="flex items-center justify-center gap-2 ml-5">
                    <Link href="/">
                    <span className="text-sm text-blue-500 cursor-pointer hover:scale-110 transition-transform duration-200">Back</span>
                    </Link>
                    
                </div>
            <div className="flex items-center justify-end p-4  gap-3">
            <div className="flex items-center gap-2">
                <Link href="https://github.com/mizurex">
                 <FaGithub className="w-4 h-4" />
                </Link>
                <ThemeToggleNext />
            </div>
            
          </div>
            </div>
        
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


