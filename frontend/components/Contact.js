import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Contact.module.css';

function Contact ({id}) {
  return (
    <div className={`container mt-4 ${styles.contactContainer}`}>
    <div className={styles.txt}>Me contacter</div>
      <div className={styles.txt2} id={id}>Me contacter</div>
      <div className="row justify-content-center">
        {/* Section Réseaux Sociaux */}
        <div className="col-12 mb-4">
          <div className={`p-4 border rounded bg-light text-center ${styles.socialSection}`}>
            <h5 className="mb-3">Réseaux Sociaux</h5>
            <div className="d-flex justify-content-center gap-4">
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`text-decoration-none text-dark ${styles.socialLink}`}>
                <FontAwesomeIcon icon={faTwitter} size="2x"  color="#df7058"  />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`text-decoration-none text-dark ${styles.socialLink}`}>
                <FontAwesomeIcon icon={faFacebook} size="2x"  color="#df7058"  />
              </a> */}
              <a href="https://www.linkedin.com/in/idris-ali-b83a03210/" target="_blank" rel="noopener noreferrer" className={`text-decoration-none text-dark ${styles.socialLink}`}>
                <FontAwesomeIcon icon={faLinkedin} size="2x"  color="#df7058" />
              </a>
              <a href="https://github.com/Slaain?tab=repositories" target="_blank" rel="noopener noreferrer" className={`text-decoration-none text-dark ${styles.socialLink}`}>
                <FontAwesomeIcon icon={faGithub} size="2x"  color="#df7058" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Adresse E-mail et Téléphone */}
        <div className="col-md-6 col-12 mb-4">
          <div className="p-4 border rounded bg-light text-center">
            <h5>Adresse E-mail</h5>
            <div className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="me-2"   color="#df7058" />
              <span>idris1390@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 mb-4">
          <div className="p-4 border rounded bg-light text-center">
            <h5>Téléphone</h5>
            <div className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faPhone} className="me-2"  color="#df7058"  />
              <span>+33 7 67 43 05 75</span>
            </div>
          </div>
        </div>

        {/* Section Me Contacter */}
        <div className="col-12 mb-4">
          <div className="p-4 border rounded bg-light text-center">
            <h5>Me Contacter</h5>
            <p>Vous pouvez me contacter directement en cliquant sur le bouton ci-dessous :</p>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Me Contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
