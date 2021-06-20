import { HeaderLine } from 'src/components/HeaderLine'
import { Links } from 'src/components/Links';
import classes from 'src/components/Main/Main.module.css';
import {useCallback, useState} from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation \u21D2",
    description: "Find in-depth information about Next.js features and API."
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn \u21D2",
    description: "Learn about Next.js in an interactive course with quizzes!"
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples \u21D2",
    description: "Discover and deploy boilerplate example Next.js projects."
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy \u21D2",
    description: "Instantly deploy your Next.js site to a public URL with Vercel."
  },
];

export function Main(props) {
  const { root } = props;
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className={classes.main}>
      <HeaderLine root={root} handleReduce={handleReduce} >
        <code className={classes.code}>pages/{root}.js</code>
        <p>{items.length}</p>
      </HeaderLine>
      <Links items={items} handleReduce={handleReduce}/>
    </main>
  )
}

// 絶対パスに修正する？？