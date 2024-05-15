import React from 'react';
import styles from '../styles/Accueil.module.css';

function Accueil() {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <main className={styles.allContainer}>
        <div>Idris ALI</div>
        <div>Je suis développeur web FULLSTACK JUNIOR</div>
        <div>en recherche d'Alternance</div>
        <ArrowScroll onClick={handleScroll} />
      </main> 
    
     </div>
  );
}
function ArrowScroll({ onClick }) {
  return (
    <div className={styles.arrowContainer} onClick={onClick}>
      <div className={styles.arrow}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="150" height="150">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 17.27L18.18 11 20 12.73 12 20 4 12.73 5.82 11z"/>
        </svg>
      </div>
      <div className={styles.arrow}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="150" height="150" className={styles.arrow2}>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 17.27L18.18 11 20 12.73 12 20 4 12.73 5.82 11z"/>
        </svg>
      </div>
    </div>
  );
}
export default Accueil
