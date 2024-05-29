import styles from '../styles/Infos.module.css';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Infos(props) {
  return (
    <div className={styles.infos}>
        <div className={styles.textinfos}>
      <p className={styles.textinfo}><FontAwesomeIcon icon={faGreaterThan} size={1} className={styles.icon} /> <span className={styles.text}>Nom : {props.nom}</span></p>
      <p className={styles.textinfo}><FontAwesomeIcon icon={faGreaterThan} className={styles.icon} /> <span className={styles.text}>Téléphone : {props.tel}</span></p>
      <p className={styles.textinfo}><FontAwesomeIcon icon={faGreaterThan} className={styles.icon} /> <span className={styles.text}>Adresse : {props.adresse}</span></p>
      <p className={styles.textinfo}><FontAwesomeIcon icon={faGreaterThan} className={styles.icon} /> <span className={styles.text}>Pays : {props.pays}</span></p>
      <p className={styles.textinfo}><FontAwesomeIcon icon={faGreaterThan} className={styles.icon} /> <span className={styles.text}>Âge : {props.age}</span></p>
      <p className={styles.textinfo}><FontAwesomeIcon icon={faGreaterThan} className={styles.icon} /> <span className={styles.text}>Étude : {props.etude}</span></p>
      <p className={styles.textinfo}><FontAwesomeIcon icon={faGreaterThan} className={styles.icon} /> <span className={styles.text}>Email : {props.email}</span></p>
      <p className={styles.textinfo}><FontAwesomeIcon icon={faGreaterThan} className={styles.icon} /> <span className={styles.text}>Statut : {props.status}</span></p>
      </div>
    </div>
  );
}

export default Infos;
