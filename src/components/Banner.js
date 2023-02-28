import styles from "@/styles/Banner.module.scss";
import Image from "next/image";

export function Banner({hero}) {

    return <div className={styles.banner}>
        <div className={styles.title}>
            <h1>Projecten</h1>
            <h3>Waar hou ik me mee bezig?</h3>
        </div>
        <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${hero.url}`}
            alt={hero.alternativeText}
            width={hero.width}
            height={hero.height}
            className={styles.background}
        />
    </div>;
}