import Head from "next/head";
import { usePost } from "../../hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();
  // error が無いかつ data がないでローディング
  console.log(isLoading);
  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <div>{post?.body}</div>
      <br />
      {user?.name ? <div>ユーザー名だよ：{user.name}</div> : null}
    </div>
  );
};
