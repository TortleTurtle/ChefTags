import styles from "@/styles/ShowcaseItem.module.scss"
import Image from "next/image";
import Link from "next/link";

export default function ShowcaseItem({project, className}) {
    const projectAttributes = project.attributes;
    const hero = projectAttributes.Hero.data.attributes;
    return (
        <Link href={`/projecten/${projectAttributes.Slug}`} className={className}>
            <div className={styles.title}>
                <h2>{projectAttributes.Title}</h2>
                <h3>{projectAttributes.Subtitle}</h3>
            </div>
            <div className={styles.thumbnail}>
                <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${hero.url}`}
                       alt={hero.alternativeText}
                       width={hero.width}
                       height={hero.height}
                />
            </div>
        </Link>
    )
}