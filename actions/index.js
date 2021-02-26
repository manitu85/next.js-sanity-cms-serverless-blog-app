import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

export const useGetHello = () => useSWR('/api/hello', fetcher);

export const useGetBlogs = ({ offset }, initialData) => {
  return useSWR(`/api/blogs?offset=${offset || 0}`, fetcher, { initialData });
};
