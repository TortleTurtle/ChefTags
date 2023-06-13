import styles from "@/styles/Banner.module.scss";
import Image from "next/image";

export function Banner({hero, title, subtitle}) {

    return <div className={styles.banner}>
        {title && subtitle ?
            <div className={styles.title}>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </div> : ''
        }
        <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${hero.url}`}
            alt={hero.alternativeText}
            width={hero.width}
            height={hero.height}
            className={styles.background}
            priority={true}
        />
    </div>;
}