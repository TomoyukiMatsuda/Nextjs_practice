import Head from 'next/head'
import { Footer } from '../components/Footer'
import { HeaderLine } from '../components/HeaderLine'
import { Links } from '../components/Links'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App！</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeaderLine root="index" />
        <Links />
      </main>
      <Footer />
    </div>
  )
}
