import Head from "next/head";
import "src/styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  // ページ間で State(状態) を共通管理 _app.jsx にリフトアップしている。これはReactにあるものではなく、Next.js だからできること

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
