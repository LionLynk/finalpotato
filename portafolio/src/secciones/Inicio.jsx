import React from "react";
import '../css/Inicio.css';
import imgmia from '../img/imgmiachida.jpg';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Inicio(){
    return(
        <>
        <center>
      <div className='contenedor-introduccion'>
      <div className='texto-introduccion'>
    <p className='texto-int'> Soy estudiante de la Universidad Tecnologica de Paquime, 
    en la carrera "Tecnologias de la informacion y comunicacion". Me especializo en la realizacion
    de modelos 3D mediante el software blender.
    </p>
      </div>
      <div className='imagen-leo'>
      <img src={imgmia} alt='Imagen...' className='imgleo'></img>
      </div>
      <br></br>
      </div>
      <div className="contenedor-redes">
      <p className="texto-redes">
      REDES SOCIALES
      </p>
      <div className="iconos">
      <a href="https://www.youtube.com/channel/UCG2Z-yPSnnx9rvgts06QfhQ"><FaYoutube size={126} color="seagreen" /></a>
      <a href="https://www.instagram.com/lionlynk/"><FaInstagram size={126} color="seagreen" /></a>
      <a href="https://github.com/LionLynk/Portafolio"><FaGithub size={126} color="seagreen" /></a>
      </div>
      </div>
      </center>
      </>
    );
}

export default Inicio;