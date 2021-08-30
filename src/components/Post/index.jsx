import Head from "next/head";
import { usePost } from "../../hooks/usePost";
import { CommentsByPostId } from "../Comments/CommentsByPostId";
import { UserByUserId } from "../User/UserByUserId";

export const Post = () => {
  const { data, error, isLoading } = usePost();

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
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.title}</h1>
      <div>{data?.body}</div>
      <br />
      <UserByUserId id={data?.userId} />
      <CommentsByPostId id={data?.id} />
    </div>
  );
};
