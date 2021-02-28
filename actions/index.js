import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

// Example how to make custom swe hooks
export const useGetHello = () => useSWR('/api/hello', fetcher);

export const useGetBlogs = ({ offset, filter }, initialData) => {
  return useSWR(
    `/api/blogs?offset=${offset || 0}&date=${filter.date.asc ? 'asc' : 'desc'}`,
    fetcher,
    { initialData }
  );
};
