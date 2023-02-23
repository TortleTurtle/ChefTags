import styles from "@/styles/Contact.module.scss"
import Image from "next/image";
import Github from "public/github-mark-white.svg"
import LinkedIn from "public/In-White-128.png"
import Mail from "public/Mail.svg"
import Whatsapp from "public/Whatsapp.svg"

export default function Contact() {
    return (
    <section className={styles.contact}>
        <div className={styles.container}>
            <h2>Wil je me beter leren kennen?</h2>
            <a href={'https://github.com/TortleTurtle/'}>
                <Image src={Github} alt={'github logo'}/>
            </a>
            <a href={'https://www.linkedin.com/in/d-meijs/'}>
                <Image src={LinkedIn} alt={'LinkedIn logo'}/>
            </a>
            <a href={'mailto:danielmeijs@gmail.com'}>
                <Image src={Mail} alt={'E-mail Icon'}/>
            </a>
            <a href={'phone:+31634146573'}>
                <Image src={Whatsapp} alt={'Whatsapp Logo'}/>
            </a>
        </div>
    </section>)
}