import styles from './styles.module.css'
import Link from 'next/link'


export default function Footer() {
    return(
       <footer className={styles.footer}>
        Made with ❤️ by&nbsp;
        <Link href="https:/instagram.com/emreelagoz" target="_blank">Emre BABA</Link>
       </footer>
    )
}