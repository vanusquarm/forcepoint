import React from "react";

import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";

  type dataOptionsType = {
    pageIndex: number
    pageSize: number
  };

export default function Table({
  getColumns,
  useFetchQuery,
  fetchDataOptions,
}: {
  getColumns: () => any;
  useFetchQuery: (fetchDataOptions: any) => any;
  fetchDataOptions?: any;
}) {
  const columns = React.useMemo<ColumnDef<any>[]>(() => getColumns(), []);

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });


  //--{

    const dataQuery = useFetchQuery({
      ...fetchDataOptions,
      pageNumber: pageIndex + 1,
      pageSize,
      orderBy: "",
      sortedBy: "",
    }); 

  console.log(dataQuery?.data);

  //--}

  const defaultData = React.useMemo(() => [], []);

  const table = useReactTable({
    data: dataQuery?.data?.items || dataQuery?.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
  });

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-md shadow">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
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
  );
}
