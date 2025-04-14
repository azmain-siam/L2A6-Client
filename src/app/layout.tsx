import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  // display: "",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextHand",
  description: "A re-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
