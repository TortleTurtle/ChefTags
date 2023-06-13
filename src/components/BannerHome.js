import styles from "@/styles/BannerHome.module.scss";
import Image from "next/image";

export function BannerHome({backgroundImg, portret}) {
    const backgroundAttributes = backgroundImg.data.attributes;
    const portretAttributes = portret.data.attributes;

    return <div className={styles.banner}>
        <div className={styles.title}>
            <h1>Daan Meijs <br/>a.k.a. <br/>Chef Tags</h1>
            <h3>Developer & Designer</h3>
        </div>
        <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${portretAttributes.url}`}
            alt={portretAttributes.alternativeText}
            width={portretAttributes.width}
            height={portretAttributes.height}
            className={styles.profileImage}
            priority={true}
        />
        <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${backgroundAttributes.url}`}
            alt={backgroundAttributes.alternativeText}
            width={backgroundAttributes.width}
            height={backgroundAttributes.height}
            className={styles.background}
        />
    </div>;
}