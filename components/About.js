import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Infos from './infos';

function About({ id }) {
  const initialData = [
    { 
      nom: 'Idris ALI', 
      tel: '07.67.43.05.75', 
      adresse: '13 rue de l\'amélie', 
      pays: 'France', 
      age: '26', 
      etude: 'License de niveau 6', 
      email: 'idris1390@gmail.com', 
      status: 'En recherche d\'alternance' 
    }
  ];

  const [infoData, setInfoData] = useState(initialData);

  const infos = infoData.map((data, i) => (
    <Infos
      key={i}
      
      icon={<FontAwesomeIcon icon={faGreaterThan} />}  nom={data.nom}
      tel={data.tel}
      adresse={data.adresse}
      pays={data.pays}
      age={data.age}
      etude={data.etude}
      email={data.email}
      status={data.status}
    />
  ));

  return (
    <div className={styles.propocontainer}  >
      <div className={styles.txt}>A Propos</div>
      <div className={styles.txt2} id="about">A Propos</div>
      <div className={styles.moiImg}>
        <Image src="/moiok.jpg" alt="Moi" width={250} height={290} />
      </div>
      <div className={styles.textDesc}>
        <p>
          Je m'appelle Idris ALI. Je suis développeur web en recherche d'une alternance dans le département des Bouches-du-Rhône. Actuellement en formation Concepteur Développeur d'Applications, je suis titulaire d’un Titre Professionnel BAC+4 « Concepteur developpeur d'application ». Je code principalement en PHP et j'ai adopté le framework Symfony comme mon outil de travail principal.
          Grâce à ma formation de Concepteur Développeur d'Applications, j'ai pu acquérir de nouvelles compétences, notamment la maîtrise du framework React, React Native, Node.js et TypeScript, ainsi que la base de données MongoDB. Cette formation m'a aidé à approfondir mes compétences et à apprendre de bonnes pratiques, telles que l'utilisation des reducers, pour développer des applications sécurisées et fonctionnelles.
          Pour continuer mon parcours dans ce domaine qui me passionne tant, je souhaite poursuivre mes études à l'école EPITECH et obtenir un Master en Architecture Logicielle. Cette opportunité représente un objectif crucial pour moi, me permettant d'acquérir les connaissances nécessaires pour réussir dans ce métier.
        </p>
      </div>
      <div className={styles.borderz}>
        {infos}
      </div>
    </div>
  );
}

export default About;
