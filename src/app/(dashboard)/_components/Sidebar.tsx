"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Wrench, 
  Calendar, 
  User, 
  Star, 
  Settings, 
  Users, 
  BarChart3, 
  LogOut 
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
// import { DashboardSidebarProps } from "../types/dashboard.types";

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  activeStatus: "ACTIVE" | "INACTIVE";
  userStatus: string | null;
  isVerified: boolean;
  lastLoginAt: string;
  createdAt: string;
  updatedAt: string;
  technicianProfile?: null;
}

interface ApiResponse {
  data: { profile: IUserProfile };
  message: string;
  statusCode: number;
  success: boolean;
}

interface DashboardSidebarProps {
  user: ApiResponse | null | undefined;
  onLinkClick?: () => void; // For mobile sheet
}

const navigation = {
  customer: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Browse Services", href: "/dashboard/services", icon: Wrench },
    { name: "My Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "My Reviews", href: "/dashboard/reviews", icon: Star },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ],
  technician: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Services", href: "/dashboard/services", icon: Wrench },
    { name: "Availability", href: "/dashboard/availability", icon: Calendar },
    { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "Earnings", href: "/dashboard/earnings", icon: BarChart3 },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ],
  admin: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Users", href: "/dashboard/users", icon: Users },
    { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "Services", href: "/dashboard/services", icon: Wrench },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ],
} as const;

export function DashboardSidebar({ user, onLinkClick }: DashboardSidebarProps) {
  const pathname = usePathname();

  const role = user?.data?.profile?.role?.toLowerCase() as
    "customer" | "technician" | "admin" | undefined;

  if (!user?.success || !role || !["customer", "technician", "admin"].includes(role)) {
    return (
      <div className="p-6 text-destructive text-center">
        Invalid or missing user role
      </div>
    );
  }

  const navItems = navigation[role];

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add logout logic (clear tokens, redirect, etc.)
  };

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-8 border-b border-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Wrench className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">FixItNow</h1>
          <p className="text-xs text-muted-foreground -mt-1">Home Services</p>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-6">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onLinkClick}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <Separator className="my-6" />

        {/* Secondary Links */}
        <div className="px-4 space-y-1">
          <Link
            href="/dashboard/settings"
            onClick={onLinkClick}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-border p-4 mt-auto">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}