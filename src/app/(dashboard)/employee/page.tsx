import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import SmallCalendar from "@/components/SmallCalendar";

const EmployeePage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-2xl">
          <h1 className="text-2xl font-semibold">Placeholder Employee</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <SmallCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default EmployeePage;
