'use client'
import Sidebar from "@/components/sidebars/sidebar";
import AppHeader from "@/components/headers/app-header";
import { useAtom } from "jotai";
import { expandSideBar } from "@/components/headers/app-header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpand, _] = useAtom(expandSideBar);
  return (
    <div className="w-full bg-gray-100 flex items-start overflow-y-scroll">
      <Sidebar />
      <div className={`h-[100vh] overflow-y-scroll ${isExpand ? "md:w-[82%] w-[0%]" : "md:w-[95%] w-full"}`}>
        <AppHeader />
        {children}
      </div>
    </div>
  );
}