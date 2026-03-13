"use client";
import React, { useState } from "react";

type tabListType = {
    title: string
    icon: React.ReactNode
    page: React.ReactNode
}



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Tabs({ tabList }: { tabList: tabListType[] }) {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="w-full max-w sm:px-0">
      <div>
        <ul className="flex space-x-1 bg-orange-900/20 p-1">
          {tabList.map((tab, index) => (
            <li
              key={index}
              onClick={() => setSelectedTab(index)}
              className={classNames(
                "w-full rounded-lg px-2 py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2",
                index === selectedTab
                  ? "bg-white text-orange-700 shadow"
                  : "text-orange-100 hover:bg-white/[0.12] hover:text-white"
              )}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <div
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2"
            )}
          >
            {tabList[selectedTab]?.page}
          </div>
        </div>
      </div>
    </div>
  );
}
