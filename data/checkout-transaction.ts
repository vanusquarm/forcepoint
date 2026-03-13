import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "./client/api-endpoints";
import {
  GetParams,
} from "@/types";
import { CheckoutTransactionClient } from "./client/checkout-transaction";

export const useDeleteCheckoutTransactionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CheckoutTransactionClient.delete,
    onSuccess: () => {
      toast.success("common:successfully-deleted");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.CHECKOUT_TRANSACTIONS],
      });
    },
    onError: (error: any) => {
      toast.error(`common:${error?.response?.data.message}`);
    },
  });
};

export const useCheckoutTransactionQuery = ({ slug }: GetParams) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [API_ENDPOINTS.CHECKOUT_TRANSACTIONS, { slug }],
    queryFn: () => CheckoutTransactionClient.get({ slug })
  });

  return {
    data: data?.items ?? [],
    error,
    loading: isLoading,
  };
};

export const useCheckoutTransactionsQuery = (options: any) => {
  const { data, error, isLoading } = useQuery<any>({
    queryKey: [API_ENDPOINTS.CHECKOUT_TRANSACTIONS, options],
    queryFn: ({ queryKey, pageParam }) =>
      CheckoutTransactionClient.paginated(
        Object.assign({}, queryKey[1], pageParam)
      ),
    placeholderData: keepPreviousData,
  });

  return {
    data: data ?? [],
    paginatorInfo: '',
    error,
    loading: isLoading,
  };
};
