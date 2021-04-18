import { HeaderLine } from 'src/components/HeaderLine'
import { Links } from 'src/components/Links';
import classes from 'src/components/Main/Main.module.css';

export function Main(props) {
  const { root } = props;

  return (
    <main className={classes.main}>
      <HeaderLine root={root} >
        <code className={classes.code}>pages/{root}.js</code>
      </HeaderLine>
      <Links />
    </main>
  )
}

// 絶対パスに修正する？？