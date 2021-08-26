import { usePosts } from "../../hooks/usePosts";

export const Posts = () => {
  // 第２引数で渡す fetcher で処理の上書きができる
  const { data, error, isLoading, isEmpty } = usePosts();

  // error が無いかつ data がないでローディング
  if (isLoading) {
    return <div>ローディング中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データはからです。</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
