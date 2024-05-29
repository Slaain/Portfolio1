import React from 'react';
import styles from '../styles/Cv.module.css';

function Cv() {
  const formation = [
    {
      title: "CONSTRUISEZ UN SITE WEB À L'AIDE DU FRAMEWORK SYMFONY 5",
      date: "octobre 2020",
      institution: "Openclassroom",
      details: "Certificat de réussite Openclassroom : Symfony 5 Réaliser un site web complet, contrôler la qualité du code et déployer le site"
    },
    {
      title: "DÉVELOPPEUR WEB ET WEB MOBILE",
      date: "mai 2020 à janvier 2021",
      institution: "Access Code School de Nevers (58000)",
      details: "Titre professionnel niveau 5 : HTML, CSS, Javascript, PHP, MySQL, Symfony, React Native, Git & Github"
    },
    {
      title: "DESJEPS (DIPLÔME D’ÉTAT SUPÉRIEUR DE LA JEUNESSE, DE L’ÉDUCATION POPULAIRE ET DES SPORTS)",
      date: "février 2008",
      institution: "DRJS Dijon (21000)",
      details: "Diplôme d’État niveau 6 - Direction de structures et de projets"
    },
    {
      title: "DEFA (DIPLÔME D’ÉTAT RELATIF AUX FONCTIONS D’ANIMATION)",
      date: "février 2000",
      institution: "DRJS Paris (75000)",
      details: ""
    }
  ];

  const experience = [
    {
      title: "DÉVELOPPEUR WEB",
      date: "Depuis décembre 2021",
      institution: "Delit d'Influence, Bourges (18000)",
      details: "HTML, CSS, PHP, JS, Git/Github, Symfony, Wordpress, Shopify, Admin. système et serveur"
    },
    {
      title: "DÉVELOPPEUR WEB BACKEND",
      date: "septembre 2021 à décembre 2021",
      institution: "In-leed, Bourges (18000)",
      details: "Serveur DNS, mails, PHP, MySQL, Apache, Intégration du moteur web et mise en production"
    },
    {
      title: "DÉVELOPPEUR WEB PHP",
      date: "octobre 2020 à janvier 2021",
      institution: "Office National des Forets, Nevers (58000)",
      details: "Création d'un dashboard de gestion des fiches mouvements du personnel, Utilisation de PHP, MySQL, HTML, CSS, Javascript, JQuery, Bootstrap, Mise en production du dashboard sur machine virtuelle Windows server"
    }
  ];

  return (
    <div className={styles.propocontainer}>
      <section className={styles.section}>
        <h2 className={styles.h2}>Formation</h2>
        {formation.map((item, index) => (
          <div key={index} className={styles.div}>
            <h3 className={styles.h3}>{item.title}</h3>
            <p className={styles.p}>{item.date}</p>
            <p className={styles.p}>{item.institution}</p>
            <p className={styles.p}>{item.details}</p>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Expérience professionnelle</h2>
        {experience.map((item, index) => (
          <div key={index} className={styles.div}>
            <h3 className={styles.h3}>{item.title}</h3>
            <p className={styles.p}>{item.date}</p>
            <p className={styles.p}>{item.institution}</p>
            <p className={styles.p}>{item.details}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Cv;
