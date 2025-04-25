"use client";

import {
  DollarSign,
  Home,
  PackagePlus,
  ShoppingBag,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (url?: string) => pathname === url;

  return (
    <Sidebar>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <Link href="/" className="flex items-center gap-2 mb-5">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SwapSpot</span>
          </Link>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="py-5" asChild>
                    <Link
                      href={item.url ?? "#"}
                      className={`flex items-center gap-2 rounded-md px-2 py-2 ${
                        isActive(item.url)
                          ? "bg-muted text-primary hover:!text-primary font-medium"
                          : "text-foreground hover:!text-primary"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Manage Listings",
    icon: ShoppingBag,
    url: "/dashboard/manage-listing",
  },
  {
    title: "Add Listing",
    url: "/dashboard/add-listing",
    icon: PackagePlus,
  },
  {
    title: "Track Purchases",
    url: "/dashboard/purchase-history",
    icon: ShoppingCart,
  },
  {
    title: "Track Sales",
    url: "/dashboard/sales-history",
    icon: DollarSign,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: UserRound,
  },
];
