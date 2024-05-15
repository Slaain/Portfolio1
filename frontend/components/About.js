import styles from '../styles/About.module.css';
import Link from 'next/link';
import Image from 'next/image';

function About() {
  return (
      <div className={styles.propocontainer}>
           <div className={styles.txt}>A Propos</div>
           <div className={styles.txt2}>A Propos</div>
      <div className={styles.moiImg}>
           <Image src="/moiok.jpg" alt="Moi" width={250} height={290}/>
      </div>
      <div className={styles.textDesc}>
          <p>Olivier Prieur Je m'appelle Olivier Prieur. Je suis développeur web à Nevers, en région Bourgogne ouest. J’ai repris les cours en 2020 afin d’acquérir de nouvelles compétences en développement web qui complètent aujourd’hui celles déjà acquises dans le cadre des mes précédentes missions et dans le cadre de projets associatifs. Je suis aujourd’hui titulaire d’un Titre Professionnel BAC+2 « Développeur web et web mobile ». Je code principalement en PHP et j'ai adopté le framework Symfony comme mon outil de travail principal.
J'ai aussi pu acquérir de nouvelles compétences liées aux bonnes pratiques et aux savoir-faire professionnels indispensables dans le métier de développeur web (gestion de projets, versioning, ...).
Je possède également des compétences d'administration réseau, d'admininistration système Linux et quelques notions DevOps (Docker, Gitlab CI, ...). Libriste et linuxien, j'aime les temps conviviaux des install parties. Je blog (www.citizenz.info). J'ai créé une cryptomonnaie début 2020 : PengolinCoin (www.pengolincoin.xyz). </p>
      </div>
      </div>
   
    )}

    
export default About