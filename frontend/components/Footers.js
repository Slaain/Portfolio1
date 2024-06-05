import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Footers.module.css';

function Footers() {
  return (
    <footer className={`bg-body-tertiary text-center text-lg-start ${styles.footer}`} style={{ width: '100%', backgroundImage: 'url("bg.png")', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', padding: '5px 0' }}>

      <div className={`container ${styles.footerContent}`}>
        <div className="row">
          <div className=" col-md-12 mb-4 mb-md-0">
            <h5 className="text-white text-center">Merci de m'avoir lu </h5>
            <p className={`text-white text-center text-lg-start ${styles.footer}`} style={{ textAlign: 'justify', fontSize: '0.9rem' }}>
              Passionné par l'univers du web, mes expériences professionnelles m'ont permis d'acquérir de nombreuses compétences, savoirs-faire et savoirs-être liés au développement web. Développeur et geek, je code, je blogue et crée toute sorte d'application depuis maintenant 3 ans. L'éclectisme de mon parcours et ma maturité me confèrent aujourd’hui une réelle polyvalence et l’expérience nécessaire à la bonne réalisation des projets.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-1 mt-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-white" href="">Idris Ali</a>
      </div>

    </footer>
  )
}
export default Footers;
