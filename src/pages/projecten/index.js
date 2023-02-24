import Head from "next/head";
import Showcase from "@/components/Showcase";
import {Banner} from "@/components/Banner";

export default function Projecten(){
    return(
        <>
            <Head>
                <title>Projecten</title>
                <meta name="description" content="Lijst van projecten gemaakt door Daan Meijs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Banner/>
                <Showcase/>
            </main>
        </>
    )
}