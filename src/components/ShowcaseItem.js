import styles from "@/styles/ShowcaseItem.module.scss"
import Image from "next/image";
import hero from "/public/FoF_Hero.png"
export default function ShowcaseItem(props) {
    return (
        <div className={props.className}>
            <div className={styles.title}>
                <h2>Forest of Frequencies</h2>
                <h3>3D adventure music game</h3>
            </div>
            <div className={styles.thumbnail}>
                <Image src={hero}
                       alt={''}
                       width={1920}
                       height={1080}
                />
            </div>
        </div>
    )
}