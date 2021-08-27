import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Header } from "src/components/Header";
import { useRouter } from "next/router";
import useSWR from "swr";
import { usePost } from "../../../hooks/usePost";

// props 展開せずにその場その場でpropsから利用した方がpropsから渡ってきていることがわかりやすい説
const PostId = () => {
  const { post, user, error, isLoading } = usePost();

  console.log({ post, user, error, isLoading });
  return (
    <div className={styles.container}>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Header />
      <div>
        <h1>{post?.title}</h1>
        <div>{post?.body}</div>
        <br />
        {user?.name ? <div>ユーザー名だよ：{user.name}</div> : null}
      </div>
    </div>
  );
};

export default PostId;
