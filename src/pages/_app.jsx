import Head from "next/head";
import "src/styles/globals.css";
import { Layout } from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  // ページ間で State(状態) を共通管理 _app.jsx にリフトアップしている。これはReactにあるものではなく、Next.js だからできること

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
