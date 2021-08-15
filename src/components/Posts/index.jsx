import { useCallback, useEffect, useReducer, useState } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

// const reducer = (状態、 アクション) => { 新しい状態 }
const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      // 成功時
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      // エラー時
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: {
      throw new Error("No アクションタイプ");
    }
  }
};

export const Posts = () => {
  // reducer は現在の state と 新しいaction を受け取って、新しいstateを返す
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("データ取得中にエラーが発生、データ取得失敗");
      }
      const json = await res.json();
      // actionをdispatchで起こしてる
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
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
