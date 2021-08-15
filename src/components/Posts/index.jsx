import { useCallback, useEffect, useState } from "react";

export const Posts = () => {
  // stateを一つにまとめた
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("データ取得中にエラーが発生、データ取得失敗");
      }
      const json = await res.json();
      setState((preState) => {
        // preStateには前の状態の値が格納されており、それ以外の値を上書きしてる
        return {
          ...preState,
          data: json,
          loading: false,
        };
      });
    } catch (e) {
      setState((preState) => {
        return {
          ...preState,
          loading: false,
          error: e,
        };
      });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ローディング中です。</div>;
  }
  if (state.error) {
    return <div>{state.error.message}</div>;
  }
  if (state.data.length === 0) {
    return <div>データはからです。</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
