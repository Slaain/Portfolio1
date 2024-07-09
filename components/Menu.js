import styles from '../styles/Menu.module.css';
import Link from 'next/link';

function Menu({id}) {
  return (
    <div className={`${styles.menueContainer} ${styles.fixedMenu}`} id={id}>
          <a href="#accueil" className={styles.link}>ACCUEIL</a>
          <a href="#about" className={styles.link}>A PROPOS</a>
          <a href="#cv" className={styles.link}>CV</a>
          <a href="#skills" className={styles.link}>SKILLS</a>
          <Link href="#portfolio"><div className={styles.link}>PORTFOLIO</div></Link>
          <Link href="#contact"><div className={styles.link}>CONTACT</div></Link>
      </div>
   
    )}

    
export default Menu;