import camelCaseKeys from 'camelcase-keys';
import { MappedPaginatorInfo, PaginatorInfo } from '@/types';

export const mapPaginatorData = (
  obj: PaginatorInfo<any> | undefined
): MappedPaginatorInfo | null => {
  if (!obj) return null;
  const { data, ...formattedValues } = camelCaseKeys(obj);
  return {
    ...formattedValues,
    hasMorePages: formattedValues.lastPage !== formattedValues.currentPage,
  };
};

type Transaction = {
  status: "COMPLETED" | "FAILED" | "PENDING";
  month: number;
  transactionCount: number;
  transactionAmount: number;
};

type OutputData = {
  name: string;
  data: number[];
};

export const transformStreamData = (
  input: any[],
  type: "COUNT" | "AMOUNT" = "COUNT"
): OutputData[] => {
  const statuses: string[] = ["COMPLETED", "FAILED", "PENDING"];

  // Initialize the output structure with empty data arrays for each status
  const output: OutputData[] = statuses.map((status) => ({
    name: status,
    data: new Array(12).fill(0), // Initialize an array of 12 zeros
  }));

  // Populate the data arrays based on the input transactions
  if (type === "COUNT") {
    input?.forEach(({ status, month, transactionCount }) => {
      const statusIndex = statuses.indexOf(status);
      output[statusIndex].data[month - 1] += transactionCount;
    });
  } else if (type === "AMOUNT") {
    input?.forEach(({ status, month, transactionAmount }) => {
      const statusIndex = statuses.indexOf(status);
      output[statusIndex].data[month - 1] += transactionAmount;
    });
  }

  return output;
}