import Head from 'next/head';
import 'src/styles/globals.css';
import {useCounter} from "../hooks/useCounter";
import {useInputArr} from "../hooks/useInputArr";
import {useBgColor} from "../hooks/useBgColor";

function MyApp({ Component, pageProps }) {
  // ページ間で State(状態) を共通管理 _app.jsx にリフトアップしている。これはReactにあるものではなく、Next.js だからできること
  const counter = useCounter();
  const inputArr = useInputArr();
  useBgColor()

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArr} />
    </>
  )
}

export default MyApp
