import Head from 'next/head'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import styles from 'src/styles/Home.module.css'
import { useCounter } from "../hooks/useCounter";
import { useBgLightBlue } from "../hooks/useBgLightBlue";
import { useInputArr } from "../hooks/useInputArr";

export default function About() {
    const { count, isShow, handleClick, handleDisplay } = useCounter();
    const { text, array, handleAdd, handleChange } = useInputArr();
    useBgLightBlue();

    return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
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

      <Main root="about" />
      <Footer />
    </div>
  )
}
