"use client";

import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Meeting HR",
    time: "9:00 - 11:00 Uhr",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugiat?",
  },
  {
    id: 2,
    title: "Interview",
    time: "11:00 - 12:00 Uhr",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugiat?",
  },
  {
    id: 3,
    title: "Answer Mails",
    time: "12:30 - 15:00 Uhr",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugiat?",
  },
];

const SmallCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-2xl">
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-4">
        {/* TITLE */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold mt-4 ">To Do´s</h1>
          <img src="/more.svg" />
        </div>
        {events.map((event) => (
          <div
            className="p-3 rounded-md border-2 border-zinc-100 border-t-4 odd:border-t-mainOrange even:border-t-mainGreen"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-zinc-600">{event.title}</h1>
              <span className="text-xs text-zinc-300">{event.time}</span>
            </div>
            <p className="mt-2 font-light text-sm text-zinc-400">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
