import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useCounter } from "src/hooks/useCounter";
import { useBgLightBlue } from "../hooks/useBgLightBlue";
import { useInputArr } from "../hooks/useInputArr";

// TODO: しまぶーさんReact講座 #15~ 開始！
export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleAdd, handleChange } = useInputArr();
  useBgLightBlue();

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加する</button>
      <ul>
          {array.map(item => {
              return (
                  <li key={item}>{item}</li>
              )
          })}
      </ul>

      <Main root="index" />
      <Footer />
    </div>
  );
}
