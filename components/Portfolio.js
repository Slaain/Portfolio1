import React from 'react';
import { Card } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Port.module.css';

const { Meta } = Card;

const PortfolioCard = ({ title, description, image, className, href }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.projectlink}>
      <Card
        hoverable
        className="h-100 d-flex flex-column"
        cover={<img alt={title} src={image} style={{ maxHeight: '200px', objectFit: 'contain' }} />} // Limiter la hauteur de l'image
      >
        <Meta title={title} description={description} />
      </Card>
      </a>
    </div>
  );
};

const Portfolio = ({ id }) => {
  const projects = [
    {
      title: "Projet d'examen 2024 Concepteur développeur d'application",
      description: "Réalisation d'une application mobile en react native, utilisation d'une base de données mongodb et installation de routes et de modele, recuperation des données coté frontend grace a des fetch et a l'installations de hook d'etat et d'effets",
      image: "dcm.jpg"
    },
    {
      title: "Site de vente Shampooing",
      description: "Réalisation d'un site de vente Shampooing en utilisant un CMS et une base de données SQL, tout en modifiant et rajoutant des fonctionnalités sur le thème grâce à JavaScript",
      image: "imphair.png",
      href: "https://imphair.pro/"
    },
    {
      title: "Site de cosmétiques",
      description: "Réalisation d'un site de cosmétiques en utilisant un CMS et une base de données SQL, tout en modifiant et rajoutant des fonctionnalités sur le thème grâce à JavaScript",
      image: "lisscosmetiques.png",
      href: "https://lissagecosmetiques.com/"
    },
    {
      title: "Projet d'examen 2022",
      description: "Réalisation d'un site bibliothèque/forum en utilisant le framework Symphony et une base de données SQL",
      image: "aof.png"
    },
    {
      title: "Site de ventes de vetements",
      description: "Réalisation d'un site de de vetements en utilisant un CMS et une base de données SQL, tout en modifiant et rajoutant des fonctionnalités sur le thème grâce à JavaScript",
      image: "skmode.png",
      href: "https://skmode.fr/"
    },
    {
      title: "Premier portfolio",
      description: "Réalisation d'un Portfolio en Symphony recuperation de messages envoyer grâce a mysql et stockage de données via mariadb",
      image: "port.png"
    }
  ];

  return (
    <div className="container mt-4">
      <div className={styles.txt}>Portfolio</div>
      <div className={styles.txt2} id={id}>Portfolio</div>
      <div className="row">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            href={project.href}
            className="col-md-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
