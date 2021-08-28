import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useComments = () => {
  // 第２引数で渡す fetcher で処理の上書きができる
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};