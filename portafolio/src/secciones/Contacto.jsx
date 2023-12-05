import React from "react";
import '../css/contacto.css';
import { useState } from "react";
import Axios from 'axios';
 function Contacto (){
    const [nombre,SetNombre] = useState('');
    const [detalles,SetDetalles] = useState('');
    const [correo,SetCorreo] = useState('');
    
    const add = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/create', {
            Nombre:nombre,  Correo:correo , Detalles:detalles
        }).then(()=>{
            alert('Datos enviados');
        });
    }
    
return(
    <div className="contenedor-formulario">
        <form>
        <center>
<label for={nombre}>Nombre del solicitante</label><br></br>
<input name={nombre}type="text"className="input-form" placeholder="ingresar nombre" onChange={(event)=>{SetNombre(event.target.value)}} ></input><br></br>
<label for={correo}>Correo del solicitante</label><br></br>
<input name={correo} type="text" className="input-form" placeholder="ingresar correo" onChange={(event)=>{SetCorreo(event.target.value)}}></input><br></br>
<label for={detalles}>Detalles del proyecto</label><br></br>
<textarea name={detalles} className="input-form" placeholder="ingresar proyecto" rows={6} onChange={(event)=>{SetDetalles(event.target.value)}}></textarea><br></br>
    </center>
    </form>
    <center>
    <button type="submit" className="btn-envio" onClick={add}>Enviar solicitud</button>
    </center>
    </div>
);
 }
export default Contacto;