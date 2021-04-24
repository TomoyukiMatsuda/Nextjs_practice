import styles from 'src/styles/Home.module.css'
import Head from 'next/head'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import { useCallback } from 'react';

export default function Home() {
  const foo = "ふーだよ";

  // useCallback(コールバック関数, 依存配列); 再レンダリングを防ぐ
  const handleClick = useCallback((e) => {
      console.log(e.target.href);
      e.preventDefault();
      alert(foo);
    }, [],);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a
        href="/about"
        onClick={handleClick}
        >ボタンだよ</a>
      <Main root="index" />
      <Footer />
    </div>
  )
}
