"use client";
import Table from "@/components/tables/table";
import SubHeader from "@/components/headers/sub-header";
import { User as Columns } from "@/data/mockup-data/columns";
import { User as ColumnType } from "@/data/mockup-data/columns.d";
import { useState } from "react";
import { Modal } from "@/components/modals/modal";
import { DynamicForm } from "@/components/forms/dynamic-form";
import { useUsersQuery, useCreateUserMutation, useUpdateUserMutation, usePasswordResetMutation } from "@/data/user";
import Checkbox from "@/components/forms/checkbox";
import { useSession } from "next-auth/react";
import { MdLockReset } from "react-icons/md";
import { CreateUserInput } from "@/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ColumnDef } from "@tanstack/react-table";

export default function TransactionIssues() {
  const { data: session } = useSession();
  const useFetchQuery = () => 
  {    
    const { data: users } = useUsersQuery(session?.preferred_username ?? "");
    return {data: users};
  }
  const { data: users } = useUsersQuery(session?.preferred_username ?? "");
  const createUserMutation = useCreateUserMutation();
  const updateUserMutation = useUpdateUserMutation();
  const resetPassword = usePasswordResetMutation();


  const columns: ColumnDef<ColumnType>[] = [
    ...(Columns.map((column, key) => ({
      accessorFn: (row: any) => row[column],
      accessorKey: column,
      header: () => <span key={key}>{column}</span>,
    })) as ColumnDef<ColumnType>[]),
    {
      accessorKey: "createdTimestamp",
      id: "createdTimestamp",
      header: () => <span>{"createdTimestamp"}</span>,
      cell: DateCell,
    },
    {
      accessorKey: "enabled",
      header: () => <span>Enabled</span>,
      cell: (row: any) => {
        console.log("row", row);
        return (
          <Checkbox
            isChecked={row.getValue()}
            onChange={() => {
              updateUserMutation.mutate({
                id: row.row.id,
                payload: { enabled: !row.getValue() },
              });
            }}
          />
        );
      },
    },
    {
      id: "action",
      header: () => <span>Reset Password</span>,
      cell: ({ row }: { row: any }) => {
        return (
          <MdLockReset
            className="cursor-pointer"
            onClick={() => {
              resetPassword.mutate({
                id: row.id,
              });
            }}
          />
        );
      },
    },
  ];

  const [isShowingModal, setIsShowingModal] = useState(false);
  const handleSubmit = async (formData: Record<string, string>) => {
    const userData = {
      ...formData,
      username: `${formData?.email.split("@")[0]}`,
      enabled: true,
      groups: [session?.preferred_username ?? ""],
    };
    try {
      createUserMutation.mutate({ payload: userData as CreateUserInput});
    } catch (error) {
      console.error("Error creating user:", error);
    }
    setIsShowingModal(false);
  };

  const inputValues = ["firstName", "lastName", "email"].map(
    (item) => ({
      label: item.toUpperCase(),
      name: item,
      type: "text",
      placeholder: `Enter ${item.toLowerCase()}`,
    })
  );

  return (
    <>
      <SubHeader PageTitle="Manage Users">
        <div className="relative">
          <button
            className="focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-orange-700 hover:bg-orange-600 focus:outline-none rounded"
            onClick={() => setIsShowingModal((curr) => !curr)}
          >
            <p className="text-sm font-medium leading-none text-white">
              Add User
            </p>
          </button>
        </div>
      </SubHeader>
      <section>
        {isShowingModal && (
          <Modal
            title="Profile New User"
            cancel={() => setIsShowingModal(false)}
          >
            <DynamicForm inputValues={inputValues} onSubmit={handleSubmit} />
            {""}
          </Modal>
        )}
        {/* <Table
          getColumns={getColumns}
          useFetchQuery={useFetchQuery}
        /> */}
        <Table
          columns={columns}
          data={(users as any)}
          filters={{}}
        />
      </section>
    </>
  );
}

const DateCell = ({ getValue }: any) => {
  const date = getValue();
  return (
    <DatePicker
      wrapperClassName="date-wrapper"
      dateFormat="MMM d, yyyy h:mm aa"
      selected={date}
      disabled
    />
  );
};