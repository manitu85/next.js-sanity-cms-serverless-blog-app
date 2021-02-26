import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

export const useGetHello = () => useSWR('/api/hello', fetcher);

export const useGetBlogs = (initialData) => {
  return useSWR(`/api/blogs`, fetcher, { initialData });
};
