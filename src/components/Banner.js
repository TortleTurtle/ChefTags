import styles from "@/styles/Banner.module.scss";
import Image from "next/image";
import profileImg from "../../public/me.png";
import backgroundImg from "../../public/wijnhaven.JPEG";

export function Banner() {
    return <div className={styles.banner}>
        <div className={styles.title}>
            <h1>Projecten</h1>
            <h3>Waar hou ik me mee bezig?</h3>
        </div>
        {/*Todo: Fetch images from Api*/}
        <Image
            src={backgroundImg}
            alt={""}
            width={2048}
            height={1536}
            className={styles.background}
        />
    </div>;
}