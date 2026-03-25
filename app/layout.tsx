import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Filter: Curated Content",
  description: "Explore new ones and subscribe to your favorite influencers, follow their selection and learn more about their taste",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased flex flex-col pt-[10px] md:pt-5 lg:pt-0`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
