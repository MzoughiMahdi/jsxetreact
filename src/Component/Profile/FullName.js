import Accordion from 'react-bootstrap/Accordion';

function FullName() {
  return (
    <>
    <p class="text-center">Center aligned text on all viewport sizes.</p>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Introduction en français</Accordion.Header>
        <Accordion.Body>
        Je suis Mahdi Mzoughi titulaire d'une licence en informatique appliquée à la gestion (promotion 2018) 
        et d'un diplôme national d'ingénierie spécialité Informatique (promotion 2022).
        Ayant effectué des stages au sein de Medianet, j'ai travaillé 
        sur l'analyse, la conception et la réalisation d’une application e-commerce pour les sorties camping avec PHP et MySQL comme base de données et Orange Tunisie, 
        basé sur le développement et la mise en place d’une application mobile pour la supervision et la gestion des activités réseaux et télécommunication.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Introduction in English</Accordion.Header>
        <Accordion.Body>
        I am Mahdi Mzoughi holder of a degree in computer science applied to management (class of 2018)
        and a national diploma in computer science engineering (class of 2022).

       Having completed internships within Medianet, I worked
       on the analysis, design and implementation of an e-commerce application for camping outings with PHP and MySQL as the database and Orange Tunisia,
       based on the development and implementation of a mobile application for the supervision and management of network and telecommunications activities.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default FullName;