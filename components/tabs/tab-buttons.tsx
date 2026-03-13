"use client";
import React, { useState } from "react";

type tabListType = {
    title: string
    icon: React.ReactNode
    page: React.ReactNode
}

export function Tabs({
  tabList,
  onTabChange
}: Readonly<{
  tabList: any[];
  onTabChange: (title: string) => any
}>) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div className="flex w-full max-w-45 justify-end ">
        <ul className="flex text-xs font-medium text-center  text-gray-500">
          {tabList.map((tab, index) => {
            return (
              <li
                key={index}
                onClick={() => {setSelectedTab(index); onTabChange(tab.title); }}
                className={
                  index === selectedTab
                    ? "flex w-[70px] justify-center p-2 text-gray-900 bg-gray-100 rounded-full focus:ring-4 focus:ring-blue-300 active focus:outline-none"
                    : "cursor-pointer flex w-[70px] justify-center p-2 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                }
              >
                {tab.title}
              </li>
            );
          })}
        </ul>
      </div>

      <div id="default-tab-content">{tabList[selectedTab]?.page}</div>
    </div>
  );
}
