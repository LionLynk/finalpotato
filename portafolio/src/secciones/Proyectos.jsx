import React from "react";
import Card from 'react-bootstrap/Card';
import '../css/proyectos.css'
import '../css/navbar.css';
/*Imagenes  */
import Lionization from '../img/lionization.jpg';
import photoshop from '../img/photoshop.jpg';
import blender from '../img/blender.png';
/*Imagenes */
/*videos */
import partitura from '../videos/partitura.mp4';
/*videos */
function Proyectos(){
    return(
<div className="proyectos-contenedor">
<Card className="card">
        <Card.Img variant="top" src={Lionization} className="img-cards" />
        <Card.Body>
          <Card.Text className="texto-cards">
            Pagina web realizada para la empresa <strong>LIONIZATION</strong>, 
            consistiendo en una pagina en la que puedes realizar solicitudes 
            de exhibicion de arte y observarlas en la seccion principal del sitio.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={photoshop} className="img-cards" />
        <Card.Body>
          <Card.Text className="texto-cards">
            Imagen/pantalla de carga realizada mediante el software <strong>Photoshop</strong>, 
            como proyecto para un videojuego con tematica de graffiti y patinaje.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={blender} className="img-cards" />
        <Card.Body>
          <Card.Text className="texto-cards">
            Modelo 3D realizado mediante el software <strong>Blender</strong>, 
            consistiendo en un escudo metalico con textura de daño, basado en el escudo hyliano de la saga
            de videojuegos "The Legend Of Zelda".
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="video">
<iframe title="Partitura" src={partitura} width={1320} height={300}></iframe>
<center>
<p className="texto-cards">Animacion realizada mediante el software de edicion <strong>After Effects</strong> con la finalidad de agregarlo a una aplicacion de realidad aumentada.</p>
</center>
</div>

</div>
);}

export default Proyectos;