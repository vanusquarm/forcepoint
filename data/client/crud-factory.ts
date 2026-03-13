import type { GetParams, PaginatorInfo } from '@/types';
import * as HttpClient from './http-client'; // Import the individual functions

export function crudFactory<Type, QueryParams, InputType>(
  endpoint: string
) {
  return {
    all(params: QueryParams) {
      return HttpClient.get<Type[]>(endpoint, params);
    },
    paginated(params: QueryParams) {
      return HttpClient.get<PaginatorInfo<Type>>(endpoint, params);
    },
    get({ slug }: GetParams) {
      return HttpClient.get<Type>(`${endpoint}/${slug}`);
    },
    create(data: InputType) {
      return HttpClient.post<Type>(endpoint, data);
    },
    update({ id, ...input }: Partial<InputType> & { id: string }) {
      return HttpClient.put<Type>(`${endpoint}/${id}`, input);
    },
    delete({ id }: { id: string }) {
      return HttpClient._delete<boolean>(`${endpoint}/${id}`);
    },
  };
}


