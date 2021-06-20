import { useCallback, useState } from "react";

export const useInputArr = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const handleChange = useCallback((e) => {
        if (e.target.value.length > 6) {
            alert("制限文字数以内にしようぜ");
            return;
        }
        setText(e.target.value);
    }, []);

    const handleAdd = useCallback(() => {
        setArray((prevArray) => {
            if (prevArray.includes(text)) {
                alert("すでに同じ要素あり");
                return prevArray;
            }
            // js では破壊的メソッドは非推奨、破壊的挙動を避けるためにスプレッド公文を利用する
            return [...prevArray, text]
        });
    }, [text]);

    return { text, array, handleChange, handleAdd };
}
