import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

// TODO: しまぶーさんReact講座 #16~ 開始！
// 引数を受け取る段階で props を展開
export default function Home({ count, isShow, handleClick, handleDisplay, text, array, handleAdd, handleChange }) {
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
