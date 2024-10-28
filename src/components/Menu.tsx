import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
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
        label: "employee",
        href: "/list/empls",
        visible: ["admin", "employer"],
      },
      {
        icon: "/guest.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "employer"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "employer"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "employer"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
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
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "Employer", "employee", "guest"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "employer", "employee", "guest"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "employer", "employee", "guest"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu">
      {menuItems.map((i) => (
        <div className="menu-section" key={i.title}>
          <span className="menu-title">{i.title}</span>
          <div className="menu-items">
            {i.items?.map((item) => (
              <div className="menu-item" key={item.label}>
                <Link href={item.href}>
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
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
