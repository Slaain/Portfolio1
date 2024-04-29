import styles from '../styles/Menu.module.css';

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (

    <Navbar className={`${styles.main} custom-navbar`}>
        <Container className={styles.men} >
          <div  className={styles.man} style={{ color: 'whitesmoke' }}>
          <Navbar.Brand href="#home" ></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#features">CV</Nav.Link>
            <Nav.Link href="#features">SKILLS</Nav.Link>
            <Nav.Link href="#features">A PROPOS</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
          </div>
        </Container>
        </Navbar>
    )}

    
export default Menu;