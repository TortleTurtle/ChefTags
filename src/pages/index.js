import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Header from "@/components/Header";
import TextBlock from "@/components/TextBlock";
import Showcase from "@/components/Showcase";
import Link from "next/link";
import Contact from "@/components/Contact";
import {BannerHome} from "@/components/BannerHome";

export default function Home() {
    return (
        <>
            <Head>
                <title>Chef Tags</title>
                <meta name="description" content="Portfolio van Daan Meijs, designer en developer."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <BannerHome/>
            <main className={styles.main}>
                {/*TODO: Fetch content for Text Block & Showcase*/}
                <TextBlock/>
                <section className={styles.showcase}>
                    <h2>Hier ben ik trots op</h2>
                    <Showcase/>
                    <Link className={styles.seeMore} href={'/projecten'}>
                        <h2>Wil je meer zien?</h2>
                    </Link>
                </section>
                <Contact/>
            </main>
        </>
    )
}
