import {useEffect, useMemo} from "react";
import {useRouter} from "next/router";

export const useBgColor = () => {
    const router = useRouter();

    const bgColor = useMemo(() => {
        switch (router.pathname) {
            case "/": {
                return "lightblue";
            }
            case "/about": {
                return "beige";
            }
            default: {
                return "";
            }
        }
    }, [router.pathname])

    // ライフサイクル マウント時、アンマウント時に走る
    useEffect(() => {
        // マウント時に走る
        document.body.style.backgroundColor = bgColor;
        return () => {
            // アンマウント時に走る
            document.body.style.backgroundColor = "";
        };
    }, [bgColor]);
}
