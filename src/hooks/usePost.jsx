import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const usePost = () => {
  const router = useRouter();
  // query.id が取得できたらAPIを叩くようにする（query.id が存在しない状態でApiを叩くことを防いでいる）
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error, // 最終的にuserの情報が取れてからローディングを解除する
  };
};
