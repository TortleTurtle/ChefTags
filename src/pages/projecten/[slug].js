import {Banner} from "@/components/Banner";
import TextBlock from "@/components/TextBlock";
import styles from "@/styles/ProjectDetail.module.scss";
import Image from "next/image";
import {useState} from "react";
import closeIcon from "public/close.svg"

export default function ProjectDetail({project}) {
    const projectAttributes = project.data[0].attributes;
    const media = projectAttributes.Media.data.map((item, index) =>
        <li key={index} onClick={() => openFullscreen(item)}>
            <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.url}`}
                   alt={item.attributes.alternativeText}
                   width={item.attributes.width}
                   height={item.attributes.height}
            />
        </li>
    );

    const [isToggled, setIsToggled] = useState(false);
    //state used for setting the fullscreen image.
    const [image, setImage] = useState(projectAttributes.Media.data[0]);
    //function for setting the fullscreen images.
    const openFullscreen = (newImage) => {
        setImage(newImage);
        toggle();
    }
    const toggle = () =>
        setIsToggled(!isToggled);
    return (
        <>
            <div className={`${styles.fullscreen} ${isToggled ? '' : styles.disabled}`}>
                <Image src={closeIcon}
                       alt="close button"
                       className={styles.closeButton}
                       onClick={() => toggle()}
                />
                <div className={styles.imageContainer}>
                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                           alt={image.attributes.alternativeText}
                           fill={true}
                           className={styles.fullscreenImage}
                    />
                </div>
            </div>
            <Banner hero={projectAttributes.Hero.data.attributes}/>
            <main>
                <TextBlock title={projectAttributes.Title} subtitle={projectAttributes.Subtitle}
                           description={projectAttributes.Description}/>
                <ul className={styles.gallery}>
                    {media}
                </ul>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.STRAPI_API_URL}/projects?fields[0]=Slug`)
    const projects = await res.json();

    const paths = projects.data.map(path => {
            return {params: {slug: path.attributes.Slug}}
        }
    );

    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({params}) {
    const {slug} = params;

    const res = await fetch(`${process.env.STRAPI_API_URL}/projects?filters[Slug][$eq]=${slug}&populate=*`);
    const project = await res.json();

    return {
        props: {
            project
        }
    }
}