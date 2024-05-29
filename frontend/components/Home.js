import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import About from '../components/About';
import Accueil from '../components/Accueil';
import Menu from '../components/Menu';
import Cv from '../components/Cv';

function Home() {
 
  // console.log("voici la :", infoData);

  return (
    <div className={styles.mains}>
      <div className={styles.bg}>
        <Menu />
        <Accueil />
      </div>
      <About />
     <Cv/>
      {/* <Card /> */}
    </div>
  );
}

export default Home;
