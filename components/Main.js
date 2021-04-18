import { HeaderLine } from '../components/HeaderLine'
import { Links } from '../components/Links'
import classes from './Main.module.css'

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
