"use client";
import { FaLock, FaUnlock } from "react-icons/fa";
import { MdOutlineKey } from "react-icons/md";
import { useState } from "react";
import Table from "@/components/tables/table-row";
import { PartnerTransaction as Columns } from "@/data/mockup-data/columns";
import { useParams } from "next/navigation";
import { useTransactionQuery } from "@/data/transaction";
import { Column } from "@tanstack/react-table";
import Button from "@/components/buttons/button";

export default function TransactionPage() {
  const params = useParams();
  const {data: services} = useTransactionQuery({ slug: "services" });
  const { data: transaction } = useTransactionQuery({
    slug: params.id as string,
  });
  

  const [isActiveIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <h1 className="text-xl font-bold">Jump To</h1>
              <ul>
                {["General"]?.map((item: string, index: number) => (
                  <li
                    key={index}
                    className={
                      isActiveIndex === index
                        ? `mt-4 flex flex-col gap-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded`
                        : `mt-4 flex flex-col gap-4 hover:bg-orange-100 text-orange-600 py-2 px-4 rounded cursor-pointer`
                    }
                    onClick={() => setActiveIndex(index)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex space-between">
                <div className="flex-1 text-xl font-bold mb-4 text-orange-600">
                  General Transaction Details
                </div>
                <div className="flex flex-col gap-4 justify-end">
                  <div className="text-orange-600">Transaction Id</div>
                  <h1 className="text-xl text-gray-400 font-bold">
                    #1{params.id}
                  </h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="div">
                  Transaction Status
                  <div className="flex gap-2 mt-4">
                    <Button status={(transaction as any)?.status} />
                    {/* <button className="px-3 py-2 text-xs font-medium text-center text-white bg-black rounded-full hover:bg-black focus:ring-4 focus:outline-none focus:ring-black">
                      <FaLock className="w-3 h-3 text-white me-2" />
                    </button> */}
                  </div>
                </div>

                {/* <div className="div mt-4">
                  Actions
                  <div className="flex flex-col gap-2 mt-2">
                    <button className="px-3 py-2 text-xs font-medium text-center inline-flex items-center me-2 text-white bg-cyan-700 rounded-lg">
                      <MdOutlineKey className="w-3.5 h-3.5 me-2" />
                      Check Status
                    </button>
                    <button className="px-3 py-2 text-xs font-medium text-center inline-flex items-center me-2 text-white bg-gray-400 rounded-lg">
                      <FaUnlock className="w-3 h-3 text-white me-2" />
                      Unlock
                    </button>
                  </div>
                </div> */}
              </div>

              <h2 className="text-xl font-bold mt-6 mb-4">
                Transaction Details
              </h2>
              <Table data={transaction} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
