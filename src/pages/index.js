import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chef Tags</title>
        <meta name="description" content="Portfolio van Daan Meijs, designer en developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
      </main>
    </>
  )
}
