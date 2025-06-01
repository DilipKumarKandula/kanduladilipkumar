import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Dilip Kumar</h1>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          {/* <Link href="/resume" className={styles.link}>Resume</Link> */}
          <Link href="/works" className={styles.link}>Works</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
