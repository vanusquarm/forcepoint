"use client";
import React, { useState } from "react";

type tabListType = {
    title: string
    icon: React.ReactNode
    page: React.ReactNode
}

export function Tabs({
  tabList
}: Readonly<{
  tabList: tabListType[];
}>) {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div>
      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
          {tabList.map((tab, index) => {
            return (
              <li
                key={index}
                onClick={() => setSelectedTab(index)}
                className={
                  index === selectedTab
                    ? "inline-flex items-center justify-center p-4 border-b-2 text-orange-600 border-orange-600 rounded-t-lg active group"
                    : "cursor-pointer inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group"
                }
              >
                <div
                  className={
                    index === selectedTab
                      ? "w-4 h-4 me-2 text-orange-600"
                      : "w-4 h-4 me-2 text-gray-600"
                  }
                >
                  {tab.icon}
                </div>
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
