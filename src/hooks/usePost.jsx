import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);

  // エラー
  if (!response.ok) {
    throw new Error("エラーが発生、データ取得に失敗");
  }

  const json = await response.json();
  return json;
};

export const usePost = () => {
  const router = useRouter();
  // query.id が取得できたらAPIを叩くようにする（query.id が存在しない状態でApiを叩くことを防いでいる）
  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );
  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !user && !userError, // 最終的にuserの情報が取れてからローディングを解除する
  };
};
