import { useComment } from "../../hooks/useComment";
import Head from "next/head";

export const Comment = () => {
  const { comment, error, isLoading } = useComment();

  // error が無いかつ data がないでローディング
  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      <h1>{comment?.body}</h1>
      <ul>
        <li>{comment?.name}</li>
        <li>{comment?.email}</li>
      </ul>
    </div>
  );
};
