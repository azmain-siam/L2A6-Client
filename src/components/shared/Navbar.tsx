"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SwapSpot</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/products") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Products
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4 relative w-full max-w-sm mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search items..."
            className="w-full pl-8"
          />
        </div>

        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="default" size="sm">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
