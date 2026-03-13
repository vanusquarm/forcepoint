import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "./client/api-endpoints";
import { UserClient } from "./client/user";

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();
  // const router = useRouter();

  return useMutation({
    mutationFn: UserClient.createUserWithPasswordResetEmail,
    onSuccess: async () => {
      // const generateRedirectUrl = router.query.shop
      //   ? `/${router.query.shop}${Routes.transaction.list}`
      //   : Routes.transaction.list;
      // await router.push("/settings", undefined);
      toast.success("successfully-created");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.USERS] });
    }
  });
};

// export const useDeleteTransactionMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: UserClient.delete,
//     onSuccess: () => {
//       toast.success("common:successfully-deleted");
//     },
//     // Always refetch after error or success:
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.TRANSACTIONS] });
//     },
//     onError: (error: any) => {
//       toast.error(`common:${error?.response?.data.message}`);
//     },
//   });
// };

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UserClient.update,
    onSuccess: () => {
      toast.success("successfully-updated");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.USERS] });
    },
    // onError: (error: any) => {
    //   toast.error(`common:${error?.response?.data.message}`);
    // },
  });
};

export const useUsersQuery = (name: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [API_ENDPOINTS.GROUPS, `${name}/members`],
    queryFn: () => UserClient.fetchGroupMembers({ name }),
    placeholderData: keepPreviousData,
  });

  return {
    data: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useUserQuery = (name: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [API_ENDPOINTS.USERS, `${name}`],
    queryFn: () => UserClient.fetchUserByEmail(name),
  });

  return {
    data: data ?? [],
    error,
    loading: isLoading,
  };
};

export const usePasswordResetMutation = () => {
  return useMutation({
    mutationFn: UserClient.resendPasswordResetEmail,
    onSuccess: () => {
      toast.success("password-reset email sent successfully");
    },
  });
};
