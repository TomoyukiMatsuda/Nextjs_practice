import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Header } from "src/components/Header";
import { useRouter } from "next/router";
import useSWR from "swr";

// props 展開せずにその場その場でpropsから利用した方がpropsから渡ってきていることがわかりやすい説
const PostId = () => {
  const router = useRouter();
  // query.id が取得できたらAPIを叩くようにする（query.id が存在しない状態でApiを叩くことを防いでいる）
  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null
  );
  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null
  );

  console.log({ post, postError });

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
