import Head from "next/head";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶ React 講座</h1>
      <p>JSONPlaceholder のAPIを色々叩くよ！</p>
    </div>
  );
};

export default Index;
