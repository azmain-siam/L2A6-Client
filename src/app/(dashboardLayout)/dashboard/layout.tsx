import { AppSidebar } from "@/components/modules/Dashboard/shared/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-3 pt-5 w-full">
        <SidebarTrigger className="absolute" />
        <div className="ml-9">{children}</div>
      </main>
    </SidebarProvider>
  );
}
