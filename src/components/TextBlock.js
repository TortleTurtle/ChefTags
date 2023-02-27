import styles from '@/styles/TextBlock.module.scss'

export default function TextBlock({title, subtitle, description}) {
    return <section className={styles.textBlock}>
        <div className={styles.container}>
            <h2>{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <p>{description}</p>
        </div>
    </section>;
}