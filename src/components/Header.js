import Link from "next/link";
import styles from "@/styles/Header.module.scss"
import {useState} from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <header className={styles.header}>
            <h2>Chef Tags</h2>
            <nav className={toggle ? styles.navToggle : ''}>
                <Link href={'/'}>Home</Link>
                <Link href={'/projecten'}>Projecten</Link>
                <Link href={'/contact'}>Contact</Link>
            </nav>
            <button className={`${styles.burger} ${toggle ? styles.burgerToggle : ''}`} onClick={() => setToggle(!toggle)}>
                <div className={`${styles.line} ${toggle ? styles.lineToggle : ''}`}/>
                <div className={`${styles.line} ${toggle ? styles.lineToggle : ''}`}/>
                <div className={`${styles.line} ${toggle ? styles.lineToggle : ''}`}/>
            </button>
        </header>
    )
}