import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { MobileProvider } from "@/providers/mobile-provider";
import { satoshi } from "@/font/satoshi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable}`}>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="5608995c-4730-4804-be1c-d585497a676d"></script>
      </head>

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
