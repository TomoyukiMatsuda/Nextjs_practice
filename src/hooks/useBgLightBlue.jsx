import {useEffect} from "react";

export const useBgLightBlue = () => {
    // ライフサイクル マウント時、アンマウント時に走る
    useEffect(() => {
        // マウント時に走る
        document.body.style.backgroundColor = "lightblue";
        return () => {
            // アンマウント時に走る
            document.body.style.backgroundColor = "";
        };
    }, []);
}
