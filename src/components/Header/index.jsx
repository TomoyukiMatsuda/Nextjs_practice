import Link from 'next/link';
import classes from 'src/components/Header/Header.module.css';

export function Header() {
  return (
      <header className={classes.header}>
        <Link href="/">
          <a className={classes.anchor}>インデックス</a>
        </Link>
        <Link href="/about">
          <a className={classes.anchor}>アバウト</a>
        </Link>
      </header>
  )
}
