import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Header } from "src/components/Header";
import { useRouter } from "next/router";

// props 展開せずにその場その場でpropsから利用した方がpropsから渡ってきていることがわかりやすい説
const PostId = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {/*id という名前は ディレクトリ名[id]に対応している*/}
      <div>{router.query.id}</div>
    </div>
  );
};

export default PostId;
