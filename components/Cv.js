import React from 'react';
import styles from '../styles/Cv.module.css';

function Cv({id}) {
  const formation = [
    {
    title: " Concepteur Développeur d'Applications Web & Mobile (BAC +3)",
    date: "2024",
    institution: "La Capsule",
    details: "Notions apprise et appronfondie sur JavaScript, React, Réact Native, mongoDB, compass, Express, Node.js"
  },
  {
    title: "Titre professionnel developpeur web et web mobile (BAC +2)",
    date: "Novembre 2021 à Aout 2022",
    institution: "A.F.P.A",
    details: "Notions apprise sur PHP, MYSQL, MariaDB, Progammation Orienté Objet, Twig, TailwindCss, BOOTSTRAP, Javascript, Angular, JQuery,L'utilisation de CMS  "
  },
  {
    title: "CAP Enseigne Signaletique et décors",
    date: "Septembre 2017 à Juin 2018",
    institution: "C.F.B.T",
    details: "Creation de visuel grace a la suite Adobe, maitrise des typographie, création de visuel a l'aide d'une charte graphique"
  },
  {
    title: "BACCALAUREAT STMG",
    date: "2016",
    institution: "LYCEE JEAN - MONNET ",
    details: "Apporter des concepts fondamentaux afin de développer des capacités d’analyse afin d’acquérir une culture juridique fondée sur l’argumentation.Compréhension des grands problèmes économiques contemporains. Apporter des éléments de réponse à une question posée, ce qui signifie et impose argumentation et débats. comprendre le fonctionnement d’une organisation. Découvrir les principes fondamentaux de gestion,"
  },
  ];

  const experience = [
    {
      title: "Projet d'examen Concepteur Développeur d'Applications Web & Mobilepteur",
      date: "2024",
      details: "Realisation d'un projet d'examen nous avons opté pour une application mobile en React NATIVE, mise en place de sprint matinaux pour déterminer les objectifs et differentes tache a realiser, mise en plage d'un reducers user pour communiquer tout mes etats dans le store, création des models et des routes coté back end et mise en place des données recuperer dans le back end grace a mes etats et mes hooks d'effets."
    },
     {
      title: "Développeur web Junior chez 99concepts",
      date: "Novembre 2022 / Avril 2023 : CDD",
      institution: "Entreprise de communication /  https://lissagecosmetiques.com/",
      details: "Réalisation via un React côté frontend  et MySQL côté backend. Site internet responsive afin que les utilisateurs puissent avoir la meilleure expérience sur tout type de plateformes. Page d'authentification avec sécurisation des mots de passe cryptés. Page de profil des commandes. Ajout des commandes dans la base de données MariaDB"
    },
    {
      title: "Développeur web Junior chez 99concepts",
      institution: "Concept Store - Vente de produits naturels, décoration, nourriture / https://www.iranja.fr/ ",
      details: "Réalisation via React côté frontend et MySQL côté backend Site internet responsive afin que les utilisations puissent avoir la meilleure expérience utilisateur sur tout type de plateforme Page dauthentification avec sécurisation des mot de passe crypté.Page de profil des commandes.Ajout des commandes dans la base de donnée MARIADB"
    },
    {
      title: "Projet d'examen",
      date: "Novembre 2022",
      details: "Réalisation de mon projet de fin d'examen pour mon BAC +2 que j'ai obtenue, un site qui repertoire plusieurs oeuvres audiovisuelles avec des avis et des commentaires des personnes qui s'inscrivent pour créer une communauté, site realiser grace au frameWork Symphony base de données realiser en en requete SQL pour montrer ma maitrise des requetes, traitement de données sur mariaDB et PHP myadmin "
    },
    {
      title: "Projet tout au long de l'année en groupe",
      date: "Novembre 2021 - Juin 2022",
      institution: "A.F.P.A",
      details: "Réalisation d'un projet de groupe durant toutes l'année methode agile, sprint matinaux et mise en place des Objectifs a atteindre a la fin des sprint. Implanter toutes les notions apprise tout au long de l'années  "
    },
  ];
 
  return (
    
    <div className={styles.propocontainer} > 
       <div className={styles.txt}>Curriculum Vitae</div>
      <div className={styles.txt2} id="cv">Curriculum Vitae</div>
      <button onClick={() => window.open("/cv.pdf", "_blank")} className={styles.button}>Télécharger mon CV</button>

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
