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
          <div className="w-[15%] md:w-[10%] lg:w-[17%] bg-yellow-100 p-4">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-300"></div>
              <span className="hidden lg:block">ProjectName</span>
            </Link>
          </div>
          <div className="w-[85%] md:w-[90%] lg:w-[83%] bg-purple-100">
            main
          </div>
        </div>
      </>
    </html>
  );
}
