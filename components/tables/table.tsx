"use client";
import React, { useEffect, useState } from "react";

import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
  RowSelectionState,
  getFilteredRowModel,
  type Table as ReactTableType,
  getPaginationRowModel,
  ColumnDefResolved,
  getSortedRowModel,
} from "@tanstack/react-table";
import { FaSort } from "react-icons/fa";

export default function Table<T extends Record<string, string | number>>({
  columns,
  data,
  filters,
}: {
  columns: ColumnDef<T>[];
  data: T[];
  filters: {
    dateRange?: [string | null, string | null];
    status?: string;
    serviceName?: string;
  };
}) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const rerender = React.useReducer(() => ({}), {})[1];

  const COLUMNS = React.useMemo<ColumnDef<T>[]>(() => columns, []);

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const handleExport = () => {
    // Get current page data
    const currentPageData = table.getRowModel().rows.map((row) => row.original);

    // Convert to CSV
    const csvContent = [
      columns.map((col) => (col as ColumnDefResolved<T>).accessorKey).join(","), // Header
      ...currentPageData.map((row) =>
        columns
          .map((col) => row[(col as ColumnDefResolved<T>).accessorKey ?? ""])
          .join(",")
      ),
    ].join("\n");

    // Create a Blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const table = useReactTable({
    data,
    columns: COLUMNS,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getRowId: (row: any) => row.uuid || row.id,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  // Apply filters to the table instance
  useEffect(() => {
    // Set filters based on props
    const columnFilters = [];

    if (filters?.dateRange && (filters.dateRange[0] || filters.dateRange[1])) {
      columnFilters.push({
        id: "transDate",
        value: filters.dateRange, // This will use the dateRangeFilterFn
      });
    }

    if (filters.status) {
      columnFilters.push({
        id: "status",
        value: filters.status,
      });
    }

    if (filters.serviceName) {
      columnFilters.push({
        id: "serviceName",
        value: filters.serviceName,
      });
    }

    table.setColumnFilters(columnFilters);
  }, [filters, table]);

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-md shadow">
      <div className="h-2" />
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">
        <div className="flex gap-1">
          <select
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize, key) => (
              <option
                key={key}
                value={pageSize}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {pageSize}
              </option>
            ))}
          </select>
          {/* <button
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
            onClick={handleExport}
          >
            export
          </button> */}
        </div>

        <div>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <DebouncedInput
              value={table.getState().globalFilter ?? ""}
              onChange={(value) => table.setGlobalFilter(String(value))}
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-orange-500 focus:border-orange-500 "
              placeholder="Search all columns..."
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-6 py-4"
                    >
                      <span className="flex items-center">
                        {header.isPlaceholder ? null : (
                          <span>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </span>
                        )}
                        {header.column.getCanSort() && (
                          <span
                            className="px-3 py-3 cursor-pointer"
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {header.column.getIsSorted() ? (
                              header.column.getIsSorted() === "asc" ? (
                                "🔼"
                              ) : (
                                "🔽"
                              )
                            ) : (
                              <FaSort className="w-3 h-3" />
                            )}
                          </span>
                        )}
                      </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr className="odd:bg-white even:bg-gray-50 " key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td className="px-6 py-2" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="h-2" />
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">
            {table.getState().pagination.pageIndex + 1}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 ">
            {table.getPageCount()}
          </span>
        </span>

        <TablePagination table={table} />
      </nav>
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
    </div>
  );
}

export function TablePagination<TData extends Record<string, any>>({
  table,
}: {
  table: ReactTableType<TData>;
}) {
  const [activeNavBtn, setActiveNavBtn] = useState(1);
  return (
    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
      <li
        key={0}
        onClick={() => {
          table.previousPage();
          setActiveNavBtn((curr) =>
            !table.getCanPreviousPage() ? (curr -= 1) : 1
          );
        }}
      >
        <a
          href="#"
          className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
            activeNavBtn === 1
              ? "text-orange-600 border border-gray-300 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
              : "leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          Previous
        </a>
      </li>
      <li
        key={1}
        onClick={() => {
          table.firstPage();
          setActiveNavBtn(1);
        }}
      >
        <a
          href="#"
          className={`flex items-center justify-center px-3 h-8 ${
            activeNavBtn === 1
              ? "text-orange-600 border border-gray-300 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
              : "leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          1
        </a>
      </li>
      <li
        key={2}
        onClick={() => {
          table.setPageIndex(1);
          setActiveNavBtn(2);
        }}
      >
        <a
          href="#"
          className={`flex items-center justify-center px-3 h-8 ${
            activeNavBtn === 2
              ? "text-orange-600 border border-gray-300 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
              : "leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          2
        </a>
      </li>
      <li
        key={3}
        onClick={() => {
          table.setPageIndex(2);
          setActiveNavBtn(3);
        }}
      >
        <a
          href="#"
          className={`flex items-center justify-center px-3 h-8 ${
            activeNavBtn === 3
              ? "text-orange-600 border border-gray-300 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
              : "leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          3
        </a>
      </li>
      <li
        key={4}
        onClick={() => {
          table.getCanNextPage() ? table.nextPage() : table.lastPage();
          setActiveNavBtn((curr) =>
            !table.getCanNextPage() ? (curr += 1) : table.getPageCount()
          );
        }}
      >
        <a
          href="#"
          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${
            activeNavBtn > 3
              ? "text-orange-600 border border-gray-300 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
              : "leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          Next
        </a>
      </li>
    </ul>
  );
}

// Search
// A typical debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
