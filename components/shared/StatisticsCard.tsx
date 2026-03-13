'use client'

import { useState } from "react";

export function Stat({
  label,
  count,
  color,
}: {
  label: string;
  count: string;
  color: string;
}) {
  return (
    <span className="flex flex-col items-center space-y-1">
      <span
        className={`flex justify-center py-0.5 px-2 rounded-full ${color} text-gray-500 text-sm`}
      >
        {" "}
        {count}{" "}
      </span>
      <span className="text-[9px] 2xl:text-[12px] text-gray-500 uppercase">
        {" "}
        {label}{" "}
      </span>
    </span>
  );
}

const StatisticsCard = ({
  name,
  queryHook,
}: {
  name: string;
  queryHook: () => any;
}) => {
    const dataQuery = queryHook(); 
    let total;
  return (
    <div className="bg-white rounded shadow-md flex flex-col space-y-3 p-4 items-start w-full">
      <span className="text-xs 2xl:text-[13px] font-medium text-gray-400 flex items-center">
        {" "}
        <span>Transaction Statistics </span>
        <span className="font-bold text-sm text-gray-600 px-3"> {name}</span>
      </span>
      <div className="flex justify-around items-center w-full">
        <div className="flex flex-col justify-center">
          <Stat
            label={"completed"}
            color={"bg-green-600"}
            count={
              isNaN(dataQuery?.[0]?.transactionCount)
                ? 0
                : dataQuery?.[0]?.transactionCount
            }
          />
          {resolveNaNToZero(dataQuery?.[0]?.transactionAmount)}
        </div>

        <div className="flex flex-col justify-center">
          <Stat
            label={"failed"}
            color={"bg-red-600"}
            count={
              isNaN(dataQuery?.[1]?.transactionCount)
                ? 0
                : dataQuery?.[1]?.transactionCount
            }
          />
          {resolveNaNToZero(dataQuery?.[1]?.transactionAmount)}
        </div>

        <div className="flex flex-col justify-center">
          <Stat
            label={"pending"}
            color={"bg-yellow-500"}
            count={
              isNaN(dataQuery?.[2]?.transactionCount)
                ? 0
                : dataQuery?.[2]?.transactionCount
            }
          />
          {resolveNaNToZero(dataQuery?.[2]?.transactionAmount)}
        </div>
      </div>

      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-500"> Total</span>
          <span className="text-2xl font-bold text-gray-800">
            {" "}
            {
              (total = parseInt(
                (
                  resolveNaNToZero(dataQuery?.[0]?.transactionAmount) +
                  resolveNaNToZero(dataQuery?.[1]?.transactionAmount) +
                  resolveNaNToZero(dataQuery?.[2]?.transactionAmount)
                ).toFixed(2)
              ))
            }
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-500">
            {" "}
            Success Rate
          </span>
          <span className="text-2xl font-bold text-gray-800">
            {" "}
            {(
              (resolveNaNToZero(dataQuery?.[0]?.transactionAmount) / total) *
              100
            ).toFixed(2)}
            {"%"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;

function resolveNaNToZero(x: number) {
    if (isNaN(x)) {
        return 0;
    } else {
        return x;
    }
}
