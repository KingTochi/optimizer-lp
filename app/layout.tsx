import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const ClashDisplay = localFont({
  src: "../public/ClashDisplay-Variable.ttf",
});

export const metadata: Metadata = {
  title: "Optimizr",
  description: "Optimize your Social Media Profiles with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ClashDisplay.className}>{children}</body>
    </html>
  );
}
