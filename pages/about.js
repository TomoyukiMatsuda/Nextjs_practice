import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App！</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main root="about" />
      <Footer />
    </div>
  )
}
