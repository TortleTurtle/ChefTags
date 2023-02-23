import styles from "@/styles/BannerHome.module.scss";
import Image from "next/image";
import profileImg from "../../public/me.png";
import backgroundImg from "../../public/wijnhaven.JPEG";

export function BannerHome() {
    return <div className={styles.banner}>
        <div className={styles.title}>
            <h1>Daan Meijs <br/>a.k.a. <br/>Chef Tags</h1>
            <h3>Developer & Designer</h3>
        </div>
        {/*Todo: Fetch images from Api*/}
        <Image
            src={profileImg}
            alt={"Daan Meijs zittend, in pak, aan de Wijnhaven"}
            width={1440}
            height={1440}
            className={styles.profileImage}
        />
        <Image
            src={backgroundImg}
            alt={""}
            // fill={true}
            width={2048}
            height={1536}
            className={styles.background}
        />
    </div>;
}