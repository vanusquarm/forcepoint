"use client"
import React from "react";
import { Tabs } from "../tabs/tab-buttons";
import Chart from "./chart"

function LineChart({ chartSeries }: any) {
  const series = chartSeries || [];
  const options = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["yellow", "#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "area",
      dropShadow: {
        enabled: true,
        color: "#623CEA14",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },

      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: "straight",
    },
    labels: {
      show: false,
      position: "top",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["yellow", "#3056D3", "#80CAEE"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: Month,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      }
    },
  };

  return (
    <div className="w-full bg-white shadow rounded-md p-6 relative 2xl:w-[66%]">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="font-semibold text-[#3C50E0]">Successes</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="font-semibold text-[#80CAEE]">Failures</p>
            </div>
          </div>
        </div>
        <Tabs
          tabList={[{ title: "Month" }, { title: "Realtime" }]}
          onTabChange={(title) => {}}
        />
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <Chart options={options} series={series} type="area" height={350} />
        </div>
      </div>

      <div className="inline-flex items-center mb-5">
        <span className="me-3 text-sm font-medium text-gray-400">Counts</span>
        <input type="checkbox" value="" className="sr-only peer" disabled />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-400">Amounts</span>
      </div>
    </div>
  );
}

export default LineChart;


const Month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];