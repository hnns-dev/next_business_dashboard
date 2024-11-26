import React from "react";

const announcements = [
  {
    id: 1,
    title: "Company Chirstmas Party",
    date: "20.12.2024",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    date: "22.12.2024",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, omnis voluptatem ab aliquam dolorem cum.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    date: "08.01.2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col gap-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Announcements</h1>
        <p className="text-xs text-zinc-400">View all</p>
      </div>
      {announcements.map((announcement) => (
        <div
          className="p-4 rounded-md odd:bg-mainGreenLight even:bg-mainOrangeLight"
          key={announcement.id}
        >
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-zinc-800">
              {announcement.title}
            </h1>
            <span className="text-xs text-zinc-400">{announcement.date}</span>
          </div>
          <p className="mt-2 font-light text-sm text-zinc-600">
            {announcement.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
