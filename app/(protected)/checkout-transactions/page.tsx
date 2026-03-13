"use client";
import Table from "@/components/tables/checkout-table";
import SubHeader from "@/components/headers/sub-header";
import { CheckoutTransaction as Columns } from "@/data/mockup-data/columns";
import { CheckoutTransaction as ColumnType} from "@/data/mockup-data/columns.d";
import { CheckoutService } from "@/data/mockup-data/columns.d";
import { SelectInput } from "@/components/forms/group-select";
import { Accordion } from "@/components/accordions/accordion";
import { useCheckoutTransactionsQuery } from "@/data/checkout-transaction";
import { useMemo, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useCheckoutTransactionQuery } from "@/data/checkout-transaction";
import Button from "@/components/buttons/button";
import Input from "@/components/forms/input";
import { ColumnDef } from "@tanstack/react-table";


export default function CheckoutTransaction() {
  const router = useRouter();
  const columns: ColumnDef<ColumnType>[] = [
    ...(Columns.map((column, key) => ({
      accessorFn: (row: any) => row[column],
      accessorKey: column,
      header: () => <span key={key}>{column}</span>,
    })) as ColumnDef<ColumnType>[]),
    {
      accessorKey: "transDate",
      header: () => <span>Entry Date</span>,
      filterFn: dateRangeFilterFn,
    },
    {
      accessorKey: "status",
      header: () => <span>Status</span>,
      cell: ({ row }: { row: any }) => {
        return <Button status={row.original.status} />;
      },
    },
  ];

  const { data: services } = useCheckoutTransactionQuery({ slug: "services" });
  const services_options = useMemo(
    () =>
      (services as CheckoutService[])?.map((item: CheckoutService) => ({
        value: item.name,
        label: item.name,
      })),
    [services]
  );
  const { data: transactions } = useCheckoutTransactionQuery(
    { slug: "transactions" }
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
    setDateRange(["", ""]);
    setTimeout(() => setIsReset(false), 100);
  }

  const [serviceName, setServiceName] = useState("");
  const [status, setStatus] = useState("");
  const [isReset, setIsReset] = useState(false);
  const [dateRange, setDateRange] = useState<[string, string]>([
    "",
    "",
  ]);

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value || "";
    const newRange = [...dateRange] as [string, string];;
    newRange[index] = value;
    setDateRange(newRange);
  };

  return (
    <>
      <SubHeader PageTitle="Checkout Transactions">{""}</SubHeader>
      <section className="p-6">
        <Accordion title="Filter Transactions">
          <div className="w-full flex flex-row flex-wrap space-x-4">
            <SelectInput
              key={2}
              label="Service"
              options={services_options || []}
              onChange={setServiceName}
              reset={isReset}
            />
            <SelectInput
              key={3}
              label="Status"
              options={status_options || []}
              onChange={setStatus}
              reset={isReset}
            />
            <Input
              label={"Start Date"}
              value={dateRange[0] || ""}
              onChange={(e) => handleDateChange(e, 0)}
            />
            <Input
              label={"End Date"}
              value={dateRange[1] || ""}
              onChange={(e) => handleDateChange(e, 1)}
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
          columns={columns}
          data={transactions}
          filters={{
            status,
            serviceName,
            dateRange,
          }}
        />
      </section>
    </>
  );
}

const dateRangeFilterFn = (row: { getValue: (arg0: any) => string | number | Date; }, columnId: any, filterValue: [any, any]) => {
  const rowDate = new Date(row.getValue(columnId));
  const [startDate, endDate] = filterValue;

  return (
    (startDate ? rowDate >= new Date(startDate) : true) &&
    (endDate ? rowDate <= new Date(endDate) : true)
  );
};
