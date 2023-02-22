import styles from '@/styles/Text.module.scss'
export default function TextBlock() {
    // Todo: Use props to fill content.
    return <section className={styles.textBlock}>
        <div className={styles.container}>
        <h2>Ik ben Daniël</h2>
        <h3>Maar iedereen noemt me Daan</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Sem viverra aliquet eget sit amet. Commodo sed egestas egestas fringilla phasellus faucibus.
            Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Ullamcorper velit sed ullamcorper morbi
            tincidunt. Nunc sed id semper risus in hendrerit gravida. Id interdum velit laoreet id. Nibh ipsum consequat
            nisl vel pretium. Non pulvinar neque laoreet suspendisse interdum. Purus gravida quis blandit turpis.</p>
        </div>
    </section>;
}