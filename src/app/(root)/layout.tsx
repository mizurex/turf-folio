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
  description: "Portfolio of Jay, a software developer. Building and learning. Writing TypeScript and Tailwind, Open to collaborations and opportunities.",
  keywords: ["Portfolio", "Jay", "Software Engineer", "Developer", "Web Developer", "React", "Next.js", "Tailwind", "TypeScript", "JavaScript", "HTML", "CSS"],
  authors: [{ name: "Jay", url: "https://turfworks.site" }],
  creator: "Jay",
  publisher: "Jay",
  openGraph: {
    title: "Portfolio - Jay",
    description: "Portfolio of Jay, a software developer. Building and learning. Writing TypeScript and Tailwind, Open to collaborations and opportunities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Jay",
    description: "Portfolio of Jay, a software developer. Building and learning. Writing TypeScript and Tailwind, Open to collaborations and opportunities.",
    images: ["/pfp.jpg"],
  },
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
