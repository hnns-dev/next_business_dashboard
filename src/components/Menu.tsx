import Link from "next/link";
import React from "react";
import { Gauge } from "lucide-react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/gauge.svg",
        label: "Dashboard",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.svg",
        label: "Calendar",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/project.svg",
        label: "Projects",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/task.svg",
        label: "Tasks",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/customer.svg",
        label: "Customer",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/sales.svg",
        label: "Sales",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.svg",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.svg",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
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
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/settings.svg",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.svg",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-zinc-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={"item.href"}
              key={item.label}
              className="flex gap-3 items-center justify-center lg:justify-start text-zinc-500 py-2"
            >
              <img src={item.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
