import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

// props 展開せずにその場その場でpropsから利用した方がpropsから渡ってきていることがわかりやすい説
const Home = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加する</button>
      <ul>
          {props.array.map(item => {
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

export default Home;