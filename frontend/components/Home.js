import React from 'react';
import styles from '../styles/Home.module.css';
import About from '../components/About';
import Accueil from '../components/Accueil';
import Menu from '../components/Menu';
function Home() {
  return (
    <div className={styles.mains}>
      <div className={styles.bg}>
         <Menu />
      <Accueil />
      </div>
     
      <About />
    </div>
  );
}

export default Home;