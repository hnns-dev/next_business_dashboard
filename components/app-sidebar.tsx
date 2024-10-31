"use client";

import * as React from "react";
import {
  Boxes,
  CalendarCheck,
  ChartLine,
  FileQuestion,
  FolderClosed,
  Frame,
  HandCoins,
  LayoutDashboard,
  LifeBuoy,
  Map,
  MessagesSquare,
  PieChart,
  Send,
  Settings2,
  ShieldQuestion,
  UserRound,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavResources } from "@/components/nav-resources";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "overview",
        },
        {
          title: "Analytics",
          url: "analytics",
        },
        {
          title: "Reports",
          url: "reports",
        },
        {
          title: "Goals",
          url: "goals",
        },
      ],
    },
    {
      title: "Schedule",
      url: "schedule",
      icon: CalendarCheck,
      items: [
        {
          title: "Tasks",
          url: "tasks",
        },
        {
          title: "Meetings",
          url: "meetings",
        },
        {
          title: "Events",
          url: "events",
        },
        {
          title: "Timleline",
          url: "timeline",
        },
      ],
    },
    {
      title: "Message",
      url: "message",
      icon: MessagesSquare,
      items: [
        {
          title: "Inbox",
          url: "inbox",
        },
        {
          title: "Unread",
          url: "unread",
        },
        {
          title: "Sent",
          url: "sent",
        },
        {
          title: "Templates",
          url: "templates",
        },
      ],
    },
    {
      title: "Projects",
      url: "projects",
      icon: FolderClosed,
      items: [
        {
          title: "Active",
          url: "active",
        },
        {
          title: "Planning",
          url: "planning",
        },
        {
          title: "Archive",
          url: "archive",
        },
        {
          title: "Team",
          url: "team",
        },
      ],
    },
  ],
  navResources: [
    {
      title: "Products",
      url: "products",
      icon: Boxes,
      isActive: true,
    },
    {
      title: "Costomers",
      url: "costomers",
      icon: Users,
      isActive: true,
    },
    {
      title: "Sales",
      url: "sales",
      icon: ChartLine,
      isActive: true,
    },
    {
      title: "Finance",
      url: "finance",
      icon: HandCoins,
      isActive: true,
    },
  ],

  //Smaller Nav maybe later

  navSecondary: [
    {
      title: "Maybe",
      url: "#",
      icon: FileQuestion,
    },
    {
      title: "later",
      url: "#",
      icon: ShieldQuestion,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <img
                  src="./logo.svg"
                  className="flex aspect-square size-8 items-center justify-center text-sidebar-primary-foreground mr-2 "
                />
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-black text-2xl ">
                    PLANSHIFT
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavResources items={data.navResources} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
