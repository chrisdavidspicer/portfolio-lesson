import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MY CAT PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />
        {/* meta tag seo */}
      </Head>

      <h1>Welcome to the pinkness! This is my Portfolio 👋</h1>
    </div>
  )
}
