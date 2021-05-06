import styles from 'src/styles/Home.module.css'
import Head from 'next/head'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(1);

  // useCallback(コールバック関数, 依存配列); 再レンダリングを防ぐ
  const handleClick = (e) => {
    // 前の状態を用いた処理をしたい場合はset~~(関数)とする
    setCount(() => count + 1);

    // あんまり良く無いかも
    // setFoo(count + 1);
  }

    // ライフサイクル マウント時、アンマウント時に走る
    useEffect(() => {
      document.body.style.backgroundColor = "lightblue";

      return () => {
        console.log("アンマウント時");
        document.body.style.backgroundColor = "";
      }
    }, []);

    console.log(count);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button
        onClick={handleClick}
        >ボタン</button>
      <Main root="index" />
      <Footer />
    </div>
  )
}
