import Link from "next/link";
import React from "react";
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/gauge.svg",
        label: "Dashboard",
        href: "/",
        visible: ["admin", "employee", "guest"],
      },
      {
        icon: "/calendar.svg",
        label: "Calendar",
        href: "/list/calendar",
        visible: ["admin", "employee"],
      },
      {
        icon: "/project.svg",
        label: "Projects",
        href: "/list/projects",
        visible: ["admin", "employee"],
      },
      {
        icon: "/task.svg",
        label: "Tasks",
        href: "/list/tasks",
        visible: ["admin", "employee"],
      },
      {
        icon: "/customer.svg",
        label: "Customer",
        href: "/list/customer",
        visible: ["admin", "employee"],
      },
      {
        icon: "/sales.svg",
        label: "Sales",
        href: "/list/sales",
        visible: ["admin", "employee"],
      },
      {
        icon: "/message.svg",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "employee", "guest"],
      },
      {
        icon: "/announcement.svg",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "employee", "guest"],
      },
      {
        icon: "/employee.svg",
        label: "Employees",
        href: "/list/employees",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.svg",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "employee", "guest"],
      },
      {
        icon: "/settings.svg",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "employee", "guest"],
      },
      {
        icon: "/logout.svg",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "employee", "guest"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2 ">
          <span className="hidden lg:block text-zinc-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={"item.href"}
                  key={item.label}
                  className="flex gap-3 items-center justify-center lg:justify-start text-zinc-500 p-2 rounded-md  hover:bg-mainOrangeLight cursor-pointer"
                >
                  <img src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
