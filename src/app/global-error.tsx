"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Package, Home, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">SwapSpot</span>
              </Link>
            </div>
          </header>

          <main className="flex-1">
            <div className="container flex flex-col items-center justify-center gap-8 py-16 text-center md:py-24 lg:py-32">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Something went wrong
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We apologize for the inconvenience. An unexpected error has
                  occurred.
                </p>
                {error.digest && (
                  <p className="text-sm text-muted-foreground">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => reset()}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button asChild variant="outline">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
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
      </body>
    </html>
  );
}
