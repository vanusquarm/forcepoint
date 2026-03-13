"use client";
import Table from "@/components/tables/headlessTable";
import { PartnerTransaction as data } from "@/data/mockup-data";
import SubHeader from "@/components/headers/sub-header";
import { PartnerTransaction as ColumnTypes } from "@/data/mockup-data/columns.d";
import { PartnerTransaction as Columns } from "@/data/mockup-data/columns";
import { SelectInput } from "@/components/forms/group-select";
import { Accordion } from "@/components/accordions/accordion";
import { useTransactionsQuery } from "@/data/transaction";
import { useState } from "react";

export default function TransactionIssues() {
  const getColumns = () =>
    Columns.map((column, key) => ({
      accessorFn: (row: any) => row[column],
      id: column,
      header: () => <span key={key}>{column}</span>,
    }));

  const [status, setStatus] = useState("PENDING");

  return (
    <>
      <SubHeader PageTitle="Transaction Issues">{'PENDING...'}</SubHeader>
      <section className="p-6">
        <Table
          getColumns={getColumns}
          useFetchQuery={useTransactionsQuery}
          fetchDataOptions={{
            status,
          }}
        />
      </section>
    </>
  );
}
