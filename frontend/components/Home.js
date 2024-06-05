import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import About from '../components/About';
import Accueil from '../components/Accueil';
import Menu from '../components/Menu';
import Cv from '../components/Cv';
import Skills from '../components/Skills';
import Portofolio from './Portfolio';
import Contact from './Contact';

function Home() {
  
  return (
    <div className={styles.mains}>
      <div className={styles.bg}>
        <Menu id="accueil"/>
        <Accueil />
      </div>
      <About/>
     <Cv id="cv"/>
  
       <Skills id="skills"/> 
       <Portofolio/>
       <Contact/>
    </div>
  );
}

export default Home;
