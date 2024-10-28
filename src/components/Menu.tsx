import Link from "next/link";
import Image from "next/image";
import {
  FaHouse,
  FaUser,
  FaGear,
  FaArrowRightFromBracket,
  IconType,
} from "react-icons/fa6";
import { title } from "process";

// Typ für ein Menüelement
interface MenuItem {
  icon: IconType | string; // Icon kann entweder eine Icon-Komponente oder ein Bildpfad sein
  label: string;
  href: string;
  visible: string[];
}

// Typ für eine Menügruppe
interface MenuGroup {
  title: string;
  items: MenuItem[];
}

// Die Menüstruktur
const menuItems: MenuGroup[] = [
  {
    title: "MENU",
    items: [
      {
        icon: FaHouse,
        label: "Home",
        href: "/",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: "/employee.png",
        label: "Employer",
        href: "/list/",
        visible: ["admin", "employer"],
      },
      {
        icon: "/employee.png",
        label: "Employee",
        href: "/list/empls",
        visible: ["admin", "employer"],
      },
      {
        icon: "/guest.png",
        label: "Guest",
        href: "/list/parents",
        visible: ["admin", "employer"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "employer", "employee", "guest"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: FaUser,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: FaGear,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: FaArrowRightFromBracket,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "employer", "employee", "guest"],
      },
    ],
  },
];

const Menu: React.FC = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((group) => (
        <div className="flex flex-col gap-2" key={group.title}>
          <span className="hidden lg:block text-zinc-400 font-light my-4">
            {group.title}
          </span>
          <div className="menu-items">
            {group.items.map((item) => (
              <div className="menu-item" key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center justify-center lg:justify-start gap-4 text-zinc-600 py-2"
                >
                  {typeof item.icon === "string" ? (
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <item.icon className="text-xl" />
                  )}
                </Link>
                <span className="menu-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
