import UserCard from "@/components/OverviewCard";
import RadialChart from "@/components/RadialChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type={"Revenue per year"} />
          <UserCard type={"Revenue per month"} />
          <UserCard type={"Sales total"} />
          <UserCard type={"Project efficiency"} />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-96">
            <RadialChart />
          </div>
          <div className="w-full lg:w-2/3 h-96"></div>
        </div>
        {/* BOTTOM CHARTS */}
        <div></div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
