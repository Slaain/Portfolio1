import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import About from '../components/About';
import Infos from './infos';
import Accueil from '../components/Accueil';
import Menu from '../components/Menu';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
 
  // console.log("voici la :", infoData);

  return (
    <div className={styles.mains}>
      <div className={styles.bg}>
        <Menu />
        <Accueil />
      </div>
      <About />
     
      {/* <Card /> */}
    </div>
  );
}

export default Home;
