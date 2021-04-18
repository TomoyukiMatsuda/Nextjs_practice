import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App！</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main root="index" />
      <Footer />
    </div>
  )
}
