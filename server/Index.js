const express = require ('express');
const app= express();
const mysql=require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:'localhost',user:'root', password:'', database:'portafolio'
});

/*Añadir */

app.post('/create', (req,res)=>{
    const nombre=req.body.Nombre;
    const detalles=req.body.Detalles;
    const correo=req.body.Correo;

    db.query('INSERT INTO solicitudes (Nombre, Correo, Detalles) VALUES (?,?,?)', [nombre,correo,detalles],
    (err,result)=>{
        if (err){
            console.log(err);
            res.status(500).send(err);
            return;
        } else {
            console.log("Registro correcto")
        }
    })
})

/*actualizar*/ 

app.put('/update', (req,res)=>{
    const nombre=req.body.Nombre;
    const correo=req.body.Correo;
    const detalles=req.body.Detalles;
    const id=req.body.Id;
    db.query('UPDATE solicitudes SET Nombre=?, Correo=? , Detalles =? WHERE Id = ?', [nombre,correo,detalles,id],
    (err,result)=>{
        if (err){
            console.log(err);
            res.status(500).send(err);
            return;
        } else if (result){
            res.send("Solicitud actualizada")
        }else{
            console.log(result);
        }
    })
})
app.delete('/delete/:id',(req,res)=>{
const id=req.params.id;
db.query('DELETE FROM solicitudes WHERE Id=?',id,
(err,result)=>{
    if(err){
        console.log;
    }else{
        res.send('solicitud eliminada')
    }
}
)});
app.listen(3001,()=>{
    console.log('Corriendo en el puerto 3001');
});
/*Revisar datos */
app.get('/read', (req,res)=>{
    db.query('SELECT * from solicitudes',(err,result)=>{
        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }
        res.send(result)
    })
});
