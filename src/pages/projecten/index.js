import Head from "next/head";
import Showcase from "@/components/Showcase";
import {Banner} from "@/components/Banner";

export default function Projecten({projects, projectIndex}) {
    const projectIndexAttributes = projectIndex.data.attributes;
    const hero = projectIndexAttributes.Hero.data.attributes;

    return (
        <>
            <Head>
                <title>Projecten</title>
                <meta name="description" content="Lijst van projecten gemaakt door Daan Meijs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Banner hero={hero} title={projectIndexAttributes.Title} subtitle={projectIndexAttributes.Subtitle}/>
                <Showcase projects={projects.data}/>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const projectsRes = await fetch(`${process.env.STRAPI_API_URL}/projects?fields[0]=Title&fields[1]=Subtitle&populate=Hero`);
    const projects = await projectsRes.json();
    const projectIndexRes = await fetch(`${process.env.STRAPI_API_URL}/project-list?populate=*`);
    const projectIndex = await projectIndexRes.json();

    return {
        props: {
            projects,
            projectIndex
        }
    }
}