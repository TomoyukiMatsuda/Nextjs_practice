import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/posts": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  // ライフサイクル マウント時、アンマウント時に走る
  useEffect(() => {
    // マウント時（コンポーネントがDOMになるタイミング）に走る処理
    document.body.style.backgroundColor = bgColor;
    return () => {
      // アンマウント時（コンポーネントが破棄されるタイミング？）に走る処理
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
