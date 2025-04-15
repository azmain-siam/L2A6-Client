import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

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
      <body
        className={`${outfit.className} antialiased`}
        suppressHydrationWarning
      >
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
