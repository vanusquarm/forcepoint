"use server";

import axios from "axios";
import { cookies } from "next/headers";

// Error handling for environment variables
if (!process.env.KEYCLOAK_ADMIN_URL) {
  throw new Error(
    "KEYCLOAK_ADMIN_URL is not defined, please define it in your .env file"
  );
}

const cookieStore = cookies();

const Axios = axios.create({
  baseURL: process.env.KEYCLOAK_ADMIN_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Change request data/error
const AUTH_TOKEN_KEY = process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY ?? "authToken";
Axios.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  //@ts-ignore
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token || ""}`,
  };
  return config;
});

// Change response data/error here
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response &&
        (error.response.status === 401 || error.response.status === 403)) ||
      (error.response &&
        error.response.data.message === "MYGHPAY_ERROR.NOT_AUTHORIZED")
    ) {
      cookieStore.delete(AUTH_TOKEN_KEY);
    }
    return error;
  }
);


async function get<T>(url: string, params?: unknown): Promise<T> {
  debugger;
  const response = await Axios.get<T>(url, { params });
  return response.data;
}

async function post<T>(url: string, data: unknown, options?: any): Promise<T> {
  const response = await Axios.post<T>(url, data, options);
  return response.data;
}

async function put<T>(url: string, data: unknown): Promise<T> {
  const response = await Axios.put<T>(url, data);
  return response.data;
}

async function _delete<T>(url: string): Promise<T> {
  const response = await Axios.delete<T>(url);
  return response.data;
}

export async function getAccessToken() {
  const params = new URLSearchParams();
  params.append("client_id", process.env.KEYCLOAK_CLIENT_ID);
  params.append("client_secret", process.env.KEYCLOAK_CLIENT_SECRET);
  params.append("grant_type", "client_credentials");

  try {
    const response = await axios.post(process.env.REFRESH_TOKEN_URL, params);
    return response.data.access_token;
  } catch (error) {
    console.error("Error obtaining access token:", error);
    throw error;
  }
}

export {
  get,
  post,
  put,
  _delete
};
