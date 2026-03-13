import Router, { useRouter } from "next/router";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Routes } from "@/config/routes";
import { API_ENDPOINTS } from "./client/api-endpoints";
import {
  GetParams,
} from "@/types";
import { TransactionClient } from "./client/transaction";

export const useCreateTransactionMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: TransactionClient.create,
    onSuccess: async () => {
      const generateRedirectUrl = router.query.shop
        ? `/${router.query.shop}${Routes.transaction.list}`
        : Routes.transaction.list;
      await Router.push(generateRedirectUrl, undefined);
      toast.success("common:successfully-created");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.TRANSACTIONS] });
    },
    onError: (error: any) => {
      toast.error(`common:${error?.response?.data.message}`);
    },
  });
};

export const useDeleteTransactionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TransactionClient.delete,
    onSuccess: () => {
      toast.success("common:successfully-deleted");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.TRANSACTIONS] });
    },
    onError: (error: any) => {
      toast.error(`common:${error?.response?.data.message}`);
    },
  });
};

export const useUpdateTransactionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: TransactionClient.update,
    onSuccess: () => {
      toast.success("common:successfully-updated");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.TRANSACTIONS] });
    },
    onError: (error: any) => {
      toast.error(`common:${error?.response?.data.message}`);
    },
  });
};

export const useTransactionQuery = ({ slug }: GetParams) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [API_ENDPOINTS.TRANSACTIONS, { slug }],
    queryFn: () => TransactionClient.get({ slug }),
  });

  return {
    data: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useTransactionsQuery = (options: any) => {
  const { data, error, isLoading } = useQuery<any>({
    queryKey: [API_ENDPOINTS.TRANSACTIONS, options],
    queryFn: ({ queryKey, pageParam }) =>
      TransactionClient.paginated(Object.assign({}, queryKey[1], pageParam)),
    placeholderData: keepPreviousData
  });

  return {
    data: data ?? [],
    paginatorInfo: '',
    error,
    loading: isLoading,
  };
};
