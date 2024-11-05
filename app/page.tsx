import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BudgetCards from "@/components/ui/budget-cards";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getCurrentUser } from "@/convex/users";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { useConvexAuth } from "convex/react";

export default async function Page() {
  const user = await currentUser();
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 w-full justify-between shrink-0 items-center gap-2 px-4">
          <div className="flex items-center">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <UserButton />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <h2 className="font-semibold text-xl"> Hey {user?.firstName}</h2>

          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <BudgetCards
              className="bg-muted/75 border-none shadow-none"
              title="PO"
            />
            <BudgetCards
              className="bg-muted/75 border-none shadow-none"
              title="Emergency"
            />
            <BudgetCards
              className="bg-muted/75 border-none shadow-none"
              title="Extra"
            />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}