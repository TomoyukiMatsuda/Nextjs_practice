import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Header } from "src/components/Header";
import { useRouter } from "next/router";
import useSWR from "swr";

// props 展開せずにその場その場でpropsから利用した方がpropsから渡ってきていることがわかりやすい説
const PostId = () => {
  const router = useRouter();
  // query.id が取得できたらAPIを叩くようにする（query.id が存在しない状態でApiを叩くことを防いでいる）
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null
  );

  console.log({ data, error });

  return (
    <div className={styles.container}>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <Header />
      <h1>{data?.title}</h1>
      <div>{data?.body}</div>
    </div>
  );
};

export default PostId;
