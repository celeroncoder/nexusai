import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Nexus - Framer AI Templates",
  description: "Nexus - Framer AI Templates",
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
