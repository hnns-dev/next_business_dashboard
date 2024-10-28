import Menu from "@/components/Menu";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDE */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-orange-200 p-4 ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <img src="logo.svg" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-extrabold text-xl text-zinc-800">
            PlanShift
          </span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT SIDE */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-sky-200">
        r
      </div>
    </div>
  );
}
