import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <>
        <div className="h-screen flex">
          <div className="w-[15%] md:w-[10%] lg:w-[17%] p-4">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <img src="logo.svg" alt="logo" />
              <span className="hidden lg:block font-bold text-xl">
                OmniSync
              </span>
            </Link>
            <Menu />
          </div>
          <div className="w-[85%] md:w-[90%] lg:w-[83%] bg-zinc-100 overflow-scroll">
            <Navbar />
            {children}
          </div>
        </div>
      </>
    </html>
  );
}
