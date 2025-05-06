import Link from "next/link";
import Image from "next/image";
import { Package, Home, Search, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center max-w-7xl px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">SwapSpot</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-7xl px-4 flex flex-col items-center justify-center gap-8 py-16 text-center md:py-24 lg:py-32">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Page not found
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oops! The page you're looking for seems to have wandered off. It
              might be sold out or never existed.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/products">
                <Search className="mr-2 h-4 w-4" />
                Browse Products
              </Link>
            </Button>
          </div>

          <div className="mt-8 rounded-lg border bg-muted p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">
              Looking for something specific?
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 rounded-md border bg-card p-4 text-left shadow-sm">
                <h3 className="mb-2 font-medium">Popular Categories</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <Link
                      href="/categories/furniture"
                      className="hover:text-orange-500 hover:underline"
                    >
                      Furniture
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories/electronics"
                      className="hover:text-orange-500 hover:underline"
                    >
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories/clothing"
                      className="hover:text-orange-500 hover:underline"
                    >
                      Clothing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 rounded-md border bg-card p-4 text-left shadow-sm">
                <h3 className="mb-2 font-medium">Quick Links</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <Link
                      href="/dashboard"
                      className="hover:text-orange-500 hover:underline"
                    >
                      Sell an Item
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#deals"
                      className="hover:text-orange-500 hover:underline"
                    >
                      Today's Deals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="hover:text-orange-500 hover:underline"
                    >
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SwapSpot. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
