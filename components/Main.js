import { HeaderLine } from '../components/HeaderLine'
import { Links } from '../components/Links'
import styles from '../styles/Home.module.css'

export function Main(props) {
  const { root } = props;

  return (
    <main className={styles.main}>
      <HeaderLine root={root} >
        <code className={styles.code}>pages/{root}.js</code>
      </HeaderLine>
      <Links />
    </main>
  )
}
