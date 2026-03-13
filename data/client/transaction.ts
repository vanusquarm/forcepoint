import {
  Transaction,
  TransactionQueryOptions,
  TransactionPaginator,
  QueryOptions,
} from "@/types";
import { API_ENDPOINTS } from "./api-endpoints";
import { crudFactory } from "@/data/client/crud-factory";
import { formatSearchParams } from '@/utils/format';
import * as HttpClient from "./http-client";


export const TransactionClient = {
  ...crudFactory<Transaction, QueryOptions, unknown>(
    API_ENDPOINTS.TRANSACTIONS
  ),
  paginated: ({
    ...params
  }: Partial<TransactionQueryOptions>) => {
    return HttpClient.get<TransactionPaginator>(API_ENDPOINTS.TRANSACTIONS, {
      ...params,
      search: formatSearchParams({ }),
    });
  },
};