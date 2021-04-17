import styles from '../styles/Home.module.css'

export function HeaderLine(props) {
  const { root } = props;

  return (
    <div>
      <h1 className={styles.title}>
          {root} page
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/{root}.js</code>
        </p>
    </div>
  )
}
