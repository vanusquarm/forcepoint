"use client";
import Link from "next/link";
import { useAtom } from "jotai";
import { expandSideBar } from "@/components/headers/app-header";

export function NavigationLink({
  icon,
  name,
  path,
}: Readonly<{
  icon: React.ReactNode;
  name: string;
  path: string;
}>) {
  const [isExpand, _] = useAtom(expandSideBar);
  const isActive = false;
  if (isExpand) {
    return (
      <li className="w-full text-sm">
          <Link
            href={path || "/"}
            className={
              isActive
                ? `text-sm flex items-center space-x-3 py-4 px-8 bg-[#D84F00]/10 text-[#D84F00] w-full transition-all ease-in-out`
                : "text-sm flex items-center space-x-3 py-4 px-8 hover:bg-gray-50 w-full text-gray-500 transition-all ease-in-out"
            }
          >
            <span className="block w-5">{icon}</span>
            <span> {name} </span>
          </Link>
        </li>
    );
  }

  return (
    <li className="w-full text-sm group relative">
        <Link
          href={path || "/"}
          className={
            isActive
              ? `text-sm flex items-center py-4  text-white w-full transition-all ease-in-out justify-center`
              : "text-sm flex items-center py-4  hover:bg-gray-50 w-full text-gray-500 transition-all ease-in-out justify-center"
          }
        >
          {
            <span
              className={
                isActive
                  ? `block bg-[#D84F00] p-2.5 rounded-md shadow-lg transition-all ease-in-out`
                  : "text-slate"
              }
            >
              {icon}
            </span>
          }
        </Link>
        <p className="group-hover:block hidden absolute top-4 -right-16 2xl:-right-10 z-20 bg-slate-600/80 text-white p-1.5 w-20 text-center text-xs shadow rounded">
          {" "}
          {name}{" "}
        </p>
      </li>
  );
}
