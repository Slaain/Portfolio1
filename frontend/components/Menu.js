import styles from '../styles/Menu.module.css';
import Link from 'next/link';

function Menu({id}) {
  return (
      <div className={styles.menueContainer} id={id}>
              <a href="#accueil" className={styles.link}>accueil</a>
          <a href="#about" className={styles.link}>A propos</a>
          <a href="#cv" className={styles.link}>CV</a>
          <a href="#skills" className={styles.link}>skills</a>
          <Link href="/"><div className={styles.link}>Portfolio</div></Link>
          <Link href="/"><div className={styles.link}>Contact</div></Link>
      </div>
   
    )}

    
export default Menu;