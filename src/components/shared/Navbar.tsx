"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, LogOut, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { logout } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const pathname = usePathname();
  const { user, setIsLoading } = useUser();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleLogout = () => {
    logout();
    setIsLoading(true);
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
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Heart className="!size-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>
          {!user ? (
            <Link href="/auth">
              <Button variant="default" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <Avatar>
                  <AvatarImage src="https://i.ibb.co.com/vkcW97y/dummy-man-570x570-1-2.png" />
                  <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] mr-10">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1.5">
                    <p className="font-medium leading-none">{user.name}</p>
                    <p className="text-sm leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <Button
                  onClick={handleLogout}
                  className="w-full h-8 cursor-pointer"
                >
                  <LogOut /> Logout
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* <Link href="/dashboard">
            <Button variant="default" size="sm">
              Dashboard
            </Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
}
