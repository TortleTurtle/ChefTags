import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import TextBlock from "@/components/TextBlock";
import Showcase from "@/components/Showcase";
import Link from "next/link";
import {BannerHome} from "@/components/BannerHome";

export default function Home({home, showcase}) {
    return (
        <>
            <Head>
                <title>Chef Tags</title>
                <meta name="description" content="Portfolio van Daan Meijs, designer en developer."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <BannerHome/>
            <main className={styles.main}>
                {/*TODO: Fetch content for Showcase*/}
                <TextBlock title={home.data.attributes.Title} subtitle={home.data.attributes.Subtitle}
                           description={home.data.attributes.Description}/>
                <section className={styles.showcase}>
                    <h2>Hier ben ik trots op</h2>
                    <Showcase/>
                    <Link className={styles.seeMore} href={'/projecten'}>
                        <h2>Wil je meer zien?</h2>
                    </Link>
                </section>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const homeResponse = await fetch(`${process.env.API_URL}/home?populate=*`);
    const home = await homeResponse.json();
    const showcaseResponse = await fetch(`${process.env.API_URL}/projects?filter[Feature][$eq]=true&fields[0]=Title&fields[1]=Subtitle&populate=Hero`);
    const showcase = await showcaseResponse.json();

    return {
        props: {
            home,
            showcase
        }
    }
}