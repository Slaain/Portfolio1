import styles from '../styles/Menu.module.css';
import Link from 'next/link';

function Menu() {
  return (
      <div className={styles.menueContainer}>
          <Link href="/"><div className={styles.link}>Accueil</div></Link>
          <Link href="/"><div className={styles.link}>A propos</div></Link>
          <Link href="/"><div className={styles.link}>CV</div></Link>
          <Link href="/"><div className={styles.link}>Skills</div></Link>
          <Link href="/"><div className={styles.link}>Portfolio</div></Link>
          <Link href="/"><div className={styles.link}>Contact</div></Link>
      </div>
   
    )}

    
export default Menu;