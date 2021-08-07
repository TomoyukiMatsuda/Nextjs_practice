// カウントアップのカスタムフック
import { useCallback, useMemo, useState, useEffect } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  // todo: useEffect学習用記述 後々消す
  useEffect(() => {
    // ① 実行させたい処理
    //console.log(`① count：${count}`);
    return () => {
      // ② ①の処理と対の関係になるクリーンアップ関数
      //console.log(`② count：${count}`);
    };
  }, [count]); // ③ 依存配列に変数 count を指定

  // countのあたいにしか依存しない、isShow の変更などに関心を持たない
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  // useCallback(コールバック関数, 依存配列); 再レンダリングを防ぐ
  const handleClick = useCallback(() => {
    // 前の状態を用いた処理をしたい場合はset~~(関数)とする
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, doubleCount, isShow, handleClick, handleDisplay };
};
