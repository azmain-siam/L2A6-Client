import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/Providers";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  // display: "",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwapSpot",
  description: "A re-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${outfit.className} antialiased`}
          suppressHydrationWarning
        >
          <Toaster richColors position="top-center" />
          {children}
        </body>
      </html>
    </Providers>
  );
}
