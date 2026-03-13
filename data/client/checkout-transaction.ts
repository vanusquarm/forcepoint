import {
  TransactionQueryOptions,
  TransactionPaginator,
  GetParams,
} from "@/types";
import { API_ENDPOINTS } from "./api-endpoints";
import { formatSearchParams } from '@/utils/format';
import * as HttpClient from "./checkout-transaction-client";

export const CheckoutTransactionClient = {
  all(params: any) {
    return HttpClient.get<any[]>(API_ENDPOINTS.CHECKOUT_TRANSACTIONS, params);
  },
  get({ slug }: GetParams) {
    return HttpClient.get<any>(
      `${API_ENDPOINTS.CHECKOUT_TRANSACTIONS}/${slug}`
    );
  },
  delete({ id }: { id: string }) {
    return HttpClient._delete<boolean>(
      `${API_ENDPOINTS.CHECKOUT_TRANSACTIONS}/${id}`
    );
  },
  paginated: ({ ...params }: Partial<TransactionQueryOptions>) => {
    return HttpClient.get<TransactionPaginator>(API_ENDPOINTS.CHECKOUT_TRANSACTIONS, {
      ...params,
      search: formatSearchParams({}),
    });
  },
};