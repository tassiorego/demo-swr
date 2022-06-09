import useSWR from 'swr';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

export default function useFetch<T = any>(
  url: string,
  options: AxiosRequestConfig = {},
) {
  const { data, error, mutate } = useSWR<T, AxiosError>(url, async (uri) => {
    const response = await axios.get(`http://localhost:5050${uri}`, options);

    return response.data;
  });

  return {
    data, error, isLoading: !data && !error, mutate,
  };
}
