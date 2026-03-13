import axios from "axios";

function formatBooleanSearchParam(key: string, value: boolean): string {
  return value ? `${key}:1` : `${key}:`;
}

interface SearchParamOptions {
  categories: string;
  code: string;
  type: string;
  name: string;
  shop_id: string;
  is_approved: boolean;
  tracking_number: string;
  notice: string;
  pageSize: string;
}

export function formatSearchParams(params: Partial<SearchParamOptions>): string {
  return Object.entries(params)
    .filter(([, value]) => Boolean(value))
    .map(([k, v]) =>
      ["type", "categories", "tags", "transaction"].includes(k)
        ? `${k}.slug:${v}`
        : ["is_approved"].includes(k)
        ? formatBooleanSearchParam(k, v as boolean)
        : `${k}:${v}`
    )
    .join(";");
}

// Utility functions for error handling
export function getFormErrors(error: unknown): string | null {
  if (axios.isAxiosError(error)) {
    return error.response?.data.message ?? null;
  }
  return null;
}

export function getFieldErrors(error: unknown): Record<string, any> | null {
  if (axios.isAxiosError(error)) {
    return error.response?.data.errors ?? null;
  }
  return null;
}
