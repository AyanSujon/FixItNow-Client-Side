

"use client";

import { useState } from "react";
import { Menu, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ApiResponse } from "../types/dashboard.types";
import SidebarContent from "./SidebarContent";


interface DashboardSidebarProps {
  user: ApiResponse | null | undefined;
}

export default function DashboardSidebar({
  user,
}: DashboardSidebarProps) {
  const [open, setOpen] = useState(false);

  const role = user?.data.profile.role.toLowerCase() as
    | "customer"
    | "technician"
    | "admin"
    | undefined;

  if (!user?.success || !role) {
    return (
      <div className="p-6 text-center text-destructive">
        Invalid or missing user role.
      </div>
    );
  }

  return (
    <>
      {/* Desktop */}
      <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r bg-sidebar lg:flex">
        <SidebarContent role={role} />
      </aside>

      {/* Mobile */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-4 py-4 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Wrench className="h-5 w-5" />
          </div>

          <h1 className="text-xl font-bold">
            FixItNow
          </h1>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-72 p-0">
            <SidebarContent
              role={role}
              onClose={() => setOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </header>

      {/* Desktop Spacer */}
      <div className="hidden w-72 shrink-0 lg:block" />
    </>
  );
}