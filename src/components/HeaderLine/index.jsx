import classes from 'src/components/HeaderLine/HeaderLine.module.css'

export const HeaderLine = (props) => {
  return (
    <div>
      <h1 className={classes.title}>
          {props.root} page
        </h1>

        <p className={classes.description}>
          {props.children}
        </p>
      <button onClick={props.handleReduce}>減らす（ヘッダーライン）</button>
    </div>
  )
}
