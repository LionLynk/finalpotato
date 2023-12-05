import React from "react";
import '../css/contacto.css';
import '../css/admin.css';

import { useState } from "react";
import Axios from 'axios';

 function Admin (){
    const [nombre,SetNombre] = useState('');
    const [detalles,SetDetalles] = useState('');
    const [correo,SetCorreo] = useState('');
    const [id,SetId]=useState('');
    const [editar,SetEditar]= useState(false);
    
    const add = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/create', {
            Nombre:nombre,  Correo:correo , Detalles:detalles
        }).then(()=>{
            alert('Datos enviados');
        })
    }
    
    const editarDatos = (val) => {
        SetEditar(true);
        SetNombre(val.Nombre);
        SetDetalles(val.Detalles);
        SetCorreo(val.Correo);
        SetId(val.Id);
    } 
    
    const [datos,SetDatos]=useState([]);
    const getDatos = (e) => {
        e.preventDefault();
        Axios.get('http://localhost:3001/read').then((response)=>{
            SetDatos(response.data);
        })
    
    }
    
    const update = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3001/update', {
            Id:id,
            Nombre:nombre,
            Correo:correo,
            Detalles:detalles
        }).then((response)=>{
            getDatos();
            alert('registros actualizados');
        })
    }

    const Limpiar = () =>{
        SetEditar(false);
        SetNombre('');
        SetDetalles('');
        SetCorreo('');
        SetId('');
    }

    const DeleteDatos = (id) =>{
        let confirmacion=window.confirm("¿Estas seguro de eliminar el usuario seleccionado?")
        if (confirmacion){
            Axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
                alert(response.data);
                getDatos();
                Limpiar();
            })
        }
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
{
        editar?
        <div className="actualizardiv">
        <center><button className="btn-envio" type="submit" onClick={update}>Actualizar</button></center>   
        <br></br> 
        <center><button className="btn-cancelar" type="submit" onClick={Limpiar}>Cancelar</button></center>   
         </div>:
         <div className="enviardiv"><center><button className="btn-envio" type="submit" onClick={add}>Enviar</button></center>   
         <br></br></div>
}
<br></br> 
       <center><button className="btn-envio" type="submit" onClick={getDatos}>Obtener datos</button></center>   
    </center>
    </form>
    <br></br>
    <center>
    <div>
        <table>
       <tbody>
		<tr>
			<td>Nombre</td>
			<td>Correo</td>
			<td>Detalles</td>
			<td>Editar</td>
            <td>Eliminar</td>
		</tr>
       {
        /*Mapeo de datos */
        datos.map((val,key)=>{
            
            return <tr key={val.Id}>
			<td>{val.Nombre}</td>
			<td>{val.Correo}</td>
			<td>{val.Detalles}</td>
			<td><button onClick={()=>{editarDatos(val);}} className="btn-tabla">Editar</button></td>
            <td><button onClick={()=>{DeleteDatos(val.Id);}} className="btn-tabla">Eliminar</button></td>
		           </tr>

          })

       }
       </tbody>
       </table>
       </div>
       </center>
    </div>
);
 }
export default Admin;