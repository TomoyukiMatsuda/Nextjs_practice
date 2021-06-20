import classes from 'src/components/HeaderLine/HeaderLine.module.css'

export function HeaderLine(props) {
  const { root, children, handleReduce } = props;

  return (
    <div>
      <h1 className={classes.title}>
          {root} page
        </h1>

        <p className={classes.description}>
          {children}
        </p>
      <button onClick={handleReduce}>減らす（ヘッダーライン）</button>
    </div>
  )
}
