import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Header from "@/components/Header";
import Image from "next/image";
import profileImg from "/public/me.png";
import backgroundImg from "/public/wijnhaven.JPEG"
import TextBlock from "@/components/TextBlock";
import Showcase from "@/components/Showcase";
import Link from "next/link";
import Contact from "@/components/Contact";

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
            <div className={styles.banner}>
                <div className={styles.title}>
                    <h1>Daan Meijs <br/>a.k.a. <br/>Chef Tags</h1>
                    <h3>Developer & Designer</h3>
                </div>
                {/*Todo: Fetch images from Api*/}
                <Image
                    src={profileImg}
                    alt={'Daan Meijs zittend, in pak, aan de Wijnhaven'}
                    width={1440}
                    height={1440}
                    className={styles.profileImage}
                />
                <Image
                    src={backgroundImg}
                    alt={''}
                    // fill={true}
                    width={2048}
                    height={1536}
                    className={styles.background}
                />
            </div>
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
