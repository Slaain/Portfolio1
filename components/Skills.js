import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Skills.module.css';

const Skills = ({id}) => {
  return (
    <div className={`container ${styles.skillsContainer}`}>
       <div className={styles.txt}>Skills</div>
      <div className={styles.txt2} id={id}>Skills</div>
      <div className={styles.container}>
      <div className="row justify-content-center">
        <div className={`col-md-6 ${styles.skillBox} `}>
          <div className={`card ${styles.skillCard}`}>
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faTools} size="2x" color="#df7058"/>
              <h3 className={`card-title mt-4  ${styles.titretexte}`}>Hard Skills</h3>
              <p className={`card-title mt-4  ${styles.textepara}`}> PHP, SQL, Symfony, MariaDB,Bootstrap, JavaScript, React, React-Native,GitHub/GitLab, WordPress,HTML, CSS</p>
            </div>
          </div>
        </div>
        <div className={`col-md-6 ${styles.skillBox}`}>
          <div className={`card ${styles.skillCard}`}>
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faSmileBeam} size="2x" color="#df7058" />
              <h3 className={`card-title mt-4  ${styles.titretexte}`}>Soft Skills</h3>
              <p className={`card-title mt-4  ${styles.textepara}`}>Methode Agile, Empathie, Résolution de problèmes, Gestion du temps, Motivation, Sens du collectif</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
