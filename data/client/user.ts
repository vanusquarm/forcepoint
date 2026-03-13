import {
  AuthResponse,
  LoginInput,
  User,
  ChangePasswordInput,
  ForgetPasswordInput,
  VerifyForgetPasswordTokenInput,
  ResetPasswordInput,
  MakeAdminInput,
  BlockUserInput,
  Group,
  CreateUserInput,
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import * as HttpClient from './keycloak-client';

export const UserClient = {
  me: () => {
    return HttpClient.get<User>(API_ENDPOINTS.ME);
  },
  login: (variables: LoginInput) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.TOKEN, variables);
  },
  logout: () => {
    return HttpClient.post<unknown>(API_ENDPOINTS.LOGOUT, {});
  },
  update: ({ id, payload }: { id: string; payload: unknown }) => {
    return HttpClient.put<User>(`${API_ENDPOINTS.USERS}/${id}`, payload);
  },
  changePassword: (variables: ChangePasswordInput) => {
    return HttpClient.post<unknown>(API_ENDPOINTS.CHANGE_PASSWORD, variables);
  },
  forgetPassword: (variables: ForgetPasswordInput) => {
    return HttpClient.post<unknown>(API_ENDPOINTS.FORGET_PASSWORD, variables);
  },
  verifyForgetPasswordToken: (variables: VerifyForgetPasswordTokenInput) => {
    return HttpClient.post<unknown>(
      API_ENDPOINTS.VERIFY_FORGET_PASSWORD_TOKEN,
      variables
    );
  },
  resetPassword: (variables: ResetPasswordInput) => {
    return HttpClient.post<unknown>(API_ENDPOINTS.RESET_PASSWORD, variables);
  },
  makeAdmin: (variables: MakeAdminInput) => {
    return HttpClient.post<unknown>(API_ENDPOINTS.MAKE_ADMIN, variables);
  },
  block: (variables: BlockUserInput) => {
    return HttpClient.post<unknown>(API_ENDPOINTS.BLOCK_USER, variables);
  },
  unblock: (variables: BlockUserInput) => {
    return HttpClient.post<unknown>(API_ENDPOINTS.UNBLOCK_USER, variables);
  },
  fetchGroupMembers: ({ name }: { name: string }) => {
    return UserClient.fetchGroupDetails({ name: name }).then((group) =>
      HttpClient.get<unknown>(`groups/${group[0].id}/members`)
    );
  },
  fetchGroupDetails: ({ name }: { name: string }) => {
    return HttpClient.get<Group[]>(`groups`, {
      search: name,
    });
  },
  fetchUser: ({ id }: { id: string }) => {
    return HttpClient.get<User>(`${API_ENDPOINTS.USERS}/${id}`);
  },
  fetchUserByEmail: (email: string) => {
    return HttpClient.get<User[]>(API_ENDPOINTS.USERS, {
      email,
    });
  },
  createUser: ({ payload }: { payload: unknown }) => {
    return HttpClient.post<User>(API_ENDPOINTS.USERS, payload);
  },
  createUserWithPasswordResetEmail: ({ payload }: { payload: CreateUserInput }) => {
    return HttpClient.post<User>(API_ENDPOINTS.USERS, payload).then(() =>
      UserClient.fetchUserByEmail(payload.email).then((user) =>
        UserClient.resendPasswordResetEmail({ id: user[0].id })
      )
    );

  },
  resendVerificationEmail: () => {
    return HttpClient.post<unknown>(API_ENDPOINTS.SEND_VERIFICATION_EMAIL, {});
  },
  resendPasswordResetEmail: ({ id }: { id: string }) => {
    return HttpClient.put<unknown>(
      `${API_ENDPOINTS.USERS}/${id}/reset-password-email`,
      {
        client_id: process.env.KEYCLOAK_CLIENT_ID,
        redirect_uri: process.env.NEXTAUTH_URL,
      }
    );
  },
  updateEmail: ({ email }: { email: string }) => {
    return HttpClient.post<unknown>(API_ENDPOINTS.UPDATE_EMAIL, { email });
  },
};
