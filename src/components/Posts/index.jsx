import { usePosts } from "../../hooks/usePosts";
import Link from "next/link";

export const Posts = () => {
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
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
