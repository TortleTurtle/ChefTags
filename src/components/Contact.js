import styles from "@/styles/Contact.module.scss"

export default function Contact() {
    return (
    <section className={styles.contact}>
        <div className={styles.container}>
            <h2>Wil je me beter leren kennen?</h2>
            <ul>
                <li>Github: <a href={'https://github.com/TortleTurtle/'}>github.com/TortleTurtle/</a></li>
                <li>Email: <a href={'mailto:danielmeijs@gmail.com'}>danielmeijs@gmail.com</a></li>
                <li>Mobiel: <a href={'phone:+31634146573'}>+31 6 34 14 65 73</a></li>
            </ul>
        </div>
    </section>)
}