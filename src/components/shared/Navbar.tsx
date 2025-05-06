"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package,
  ShoppingCart,
  Search,
  Menu,
  X,
  ChevronDown,
  LogIn,
  LogOut,
  Sofa,
  Tv,
  Shirt,
  Home,
  Book,
  BikeIcon,
  Watch,
  Music,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { logout } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const { user, setIsLoading } = useUser();

  const handleLogout = () => {
    logout();
    setIsLoading(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-second/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package className="h-5 w-5 text-orange-500" />
                  <span className="text-xl font-bold">SwapSpot</span>
                </Link>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                  />
                </div>
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className={`flex items-center gap-2 text-lg font-medium ${
                      isActive("/")
                        ? "text-orange-500"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    Home
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex w-full justify-start gap-2 p-0 text-lg font-medium"
                      >
                        <span className="text-foreground/60 hover:text-foreground">
                          Categories
                        </span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[200px]">
                      <DropdownMenuItem>
                        <Link
                          href="/products?categories=furniture"
                          className="flex w-full"
                        >
                          Furniture
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/products?categories=electronics"
                          className="flex w-full"
                        >
                          Electronics
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/products?categories=clothing"
                          className="flex w-full"
                        >
                          Clothing
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/products?categories=home-decor"
                          className="flex w-full"
                        >
                          Home Decor
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/products?categories=books"
                          className="flex w-full"
                        >
                          Books
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/products?categories=all"
                          className="flex w-full"
                        >
                          View All Categories
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link
                    href="/products"
                    className={`flex items-center gap-2 text-lg font-medium ${
                      isActive("/products")
                        ? "text-orange-500"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    Products
                  </Link>
                  <Link
                    href="#deals"
                    className={`flex items-center gap-2 text-lg font-medium ${
                      isActive("#deals")
                        ? "text-orange-500"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    Deals
                  </Link>
                  <Link
                    href="/dashboard/add-listing"
                    className={`flex items-center gap-2 text-lg font-medium ${
                      isActive("/dashboard/add-listing")
                        ? "text-orange-500"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    Sell
                  </Link>
                </nav>
                <div className="mt-4 flex flex-col gap-2">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Register
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* <-- Desktop --> */}
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">SwapSpot</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium ${
                isActive("/")
                  ? "text-orange-500"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 p-0 text-sm active:ring-0 font-medium text-foreground/60 hover:text-foreground hover:bg-transparent"
                >
                  Categories
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[220px] *:py-2 *:text-sm"
              >
                <DropdownMenuItem>
                  <Link
                    href="/products?categories=furniture"
                    className="flex items-center gap-1.5 w-full"
                  >
                    <Sofa /> Furniture
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/products?categories=electronics"
                    className="flex items-center gap-1.5 w-full"
                  >
                    <Tv /> Electronics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/products?categories=clothing"
                    className="flex items-center gap-1.5 w-full"
                  >
                    <Shirt />
                    Clothing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/products?categories=home-decor"
                    className="flex items-center gap-1.5 w-full"
                  >
                    <Home />
                    Home Decor
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/products?categories=books"
                    className="flex items-center gap-1.5 w-full"
                  >
                    <Book />
                    Books
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/products?categories=books"
                    className="flex items-center gap-1.5 w-full"
                  >
                    <BikeIcon />
                    Sports
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/products?categories=books"
                    className="flex items-center gap-1.5 w-full"
                  >
                    <Watch />
                    Accessories
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/products?categories=books"
                    className="flex items-center gap-1.5 w-full"
                  >
                    <Music />
                    Music
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="!p-0" />
                <DropdownMenuItem>
                  <Link
                    href="/products?categories=all"
                    className="flex justify-between items-center gap-1.5 w-full"
                  >
                    View All Categories <ChevronRight />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/products"
              className={`text-sm font-medium ${
                isActive("/products")
                  ? "text-orange-500"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Products
            </Link>
            <Link
              href="#deals"
              className={`text-sm font-medium ${
                isActive("#deals")
                  ? "text-orange-500"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Deals
            </Link>
            <Link
              href="/dashboard/add-listing"
              className={`text-sm font-medium ${
                isActive("/dashboard/add-listing")
                  ? "text-orange-500"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Sell
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative hidden md:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-[300px] bg-background pl-8 pr-12"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          {/* <Button variant="ghost" size="icon" className="hidden md:flex">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button> */}
          <Link href={"/cart"}>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-medium text-white">
                0
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          {/* <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button> */}

          {!user ? (
            <Link href="/auth">
              <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600">
                <LogIn className="mr-2 h-4 w-4" />
                Login
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
              <DropdownMenuContent className="w-[200px] mr-10 p-2">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1.5">
                    <p className="font-medium leading-none">{user.name}</p>
                    <p className="text-sm leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <Link href={"/dashboard/profile"} className="cursor-pointer">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>

                <DropdownMenuItem>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
                <DropdownMenuSeparator className="my-2" />
                <Button
                  onClick={handleLogout}
                  className="w-full h-8 cursor-pointer"
                >
                  <LogOut /> Logout
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-medium text-white">
              0
            </span>
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
