import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "./Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "./Satoshi-Medium.woff2",
      weight: "500",
    },
    {
      path: "./Satoshi-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
