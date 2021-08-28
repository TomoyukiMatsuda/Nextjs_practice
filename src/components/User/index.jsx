import Head from "next/head";
import { useUser } from "../../hooks/useUser";

export const User = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{user?.name}</title>
      </Head>
      <h1>{user?.name}</h1>
      <div>{user?.username}</div>
      <br />
      {user?.username ? <div>ユーザー名だよ：{user.username}</div> : null}
    </div>
  );
};
