import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  // useCallback(コールバック関数, 依存配列); 再レンダリングを防ぐ
  const handleClick = useCallback(() => {
    // 前の状態を用いた処理をしたい場合はset~~(関数)とする
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // あんまり良く無いかも
    // setFoo(count + 1);
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 6) {
      alert("制限文字数以内にしようぜ");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  // TODO: しまぶーさんReact講座 #15~ 開始！
    const handleAdd = useCallback(() => {
        setArray((prevArray) => {
            if (prevArray.some((t) => t === text)) {
                alert("すでに同じ要素あり");
                return prevArray;
            }
            // js では破壊的メソッドは非推奨、破壊的挙動を避けるためにスプレッド公文を利用する
            return [...prevArray, text]
        });
    }, [text]);

  // ライフサイクル マウント時、アンマウント時に走る
  useEffect(() => {
    // マウント時に走る
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // アンマウント時に走る
      document.body.style.backgroundColor = "";
    };
  }, []);

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
