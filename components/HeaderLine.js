import styles from '../styles/Home.module.css'

export function HeaderLine(props) {
  const { root, children } = props;

  return (
    <div>
      <h1 className={styles.title}>
          {root} page
        </h1>

        <p className={styles.description}>
          {children}
        </p>
    </div>
  )
}
