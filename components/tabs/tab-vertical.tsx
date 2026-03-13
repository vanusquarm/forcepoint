"use client";
import React, { useState } from "react";

type tabListType = {
    title: string
    icon: React.ReactNode
    page: React.ReactNode
}

export function Tabs({
  tabList
}: {
  tabList: tabListType[];
}) {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-xl font-bold">Jump To</h1>
        <ul>
          {tabList.map((tab, index) => {
            return (
              <li
                key={index}
                onClick={() => setSelectedTab(index)}
                className={
                  index === selectedTab
                    ? `mt-4 flex flex-col gap-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded`
                    : `mt-4 flex flex-col gap-4 hover:bg-orange-100 text-orange-600 py-2 px-4 rounded cursor-pointer`
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
