"use client";
import Table from "@/components/tables/partner-table";
import { PartnerTransaction as data } from "@/data/mockup-data";
import SubHeader from "@/components/headers/sub-header";
import { PartnerTransaction as ColumnType, PartnerServiceStats } from "@/data/mockup-data/columns.d";
import { PartnerTransaction as Columns } from "@/data/mockup-data/columns";
import { SelectInput } from "@/components/forms/group-select";
import { Accordion } from "@/components/accordions/accordion";
import { useTransactionsQuery } from "@/data/transaction";
import { useMemo, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useTransactionQuery } from "@/data/transaction";
import Button from "@/components/buttons/button";
import Input from "@/components/forms/input";
import { ColumnDef } from "@tanstack/react-table";


export default function PartnerTransaction() {
  const router = useRouter();
  const getColumns = () => [
    ...(Columns.map((column, key) => ({
      accessorKey: column,
      filterFn: "fuzzy",
      id: column,
      header: () => <span key={key}>{column}</span>,
    })) as ColumnDef<ColumnType>[]),
    {
      accessorKey: "status",
      header: () => <span>Status</span>,
      cell: ({ row }: { row: any }) => {
        return <Button status={row.original.status} />;
      },
    },
    {
      id: "expander",
      header: () => <span>Action</span>,
      cell: ({ row }: { row: any }) => {
        return (
          <FaRegEye
            className="mt-2 cursor-pointer"
            onClick={() => {
              router.push(`/transactions/${row.id}/show`);
            }}
          />
        );
      },
    },
  ];

  const { data: services } = useTransactionQuery({ slug: "services" });
  const services_options = useMemo( () =>
    (services as PartnerServiceStats[])?.map((item) => ({
      value: item.serviceName,
      label: item.serviceName,
    })),
    [services]
  );

  const status_options = [
    { value: "PENDING", label: "PENDING" },
    { value: "FAILED", label: "FAILED" },
    { value: "COMPLETED", label: "COMPLETED" },
  ];

  function handleReset(): void {
    setIsReset(true);
    setServiceName("");
    setStatus("");
    setStartDate("");
    setTimeout(() => setIsReset(false), 100);
  }

  const [serviceName, setServiceName] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [isReset, setIsReset] = useState(false);

  return (
    <>
      <SubHeader PageTitle="Transactions">{""}</SubHeader>
      <section className="p-6">
        <Accordion title="Filter Transactions">
          <div className="w-full flex flex-row flex-wrap space-x-4">
            <SelectInput
              key={2}
              options={services_options || []}
              onChange={setServiceName}
              label="Service"
              reset={isReset}
            />
            <SelectInput
              key={3}
              options={status_options || []}
              onChange={setStatus}
              label="Status"
              reset={isReset}
            />
            <Input
              label={"Entry Date"}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <span>
            {/* <button>Filter</button> */}
            <button
              className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mt-4"
              onClick={handleReset}
            >
              Clear Filter
            </button>
          </span>
        </Accordion>

        <Table
          getColumns={getColumns}
          useFetchQuery={useTransactionsQuery}
          fetchDataOptions={{
            serviceName,
            status,
            startDate,
          }}
        />
      </section>
    </>
  );
}
