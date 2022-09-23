// Constantes de configuración del puerto por el que se ejecutara
//el proyecto
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRoute = require('./routes/user')
// Constantes de configuración de conexión con la base de datos
const mongoose = require('mongoose')
require('dotenv').config()
// Prueba de conexión por el puerto indicado
app.listen(port,()=>console.log('Listening por el puerto', port))
// localhost:3000/
app.get('/',(req,res)=>res.send('Bienvenido al index del proyecto'))

// Método de conexión con la base de datos
mongoose
.connect(process.env.MONGODB_CONNETION_STRING)
.then(() => console.log('Conectados con mongoDB Atlas'))
.catch((error) => console.log(error))
// Middleware: URI de conexión para probar los request(GET, POST,DELETE, PUT)
app.use(express.json())
//localhost:3000/api/users
app.use('/api', userRoute)





/*
const express = require ('express');
const mongoose = require ('mongoose');
const userRoute = require ("./routes/user")
//require('dotenv').config()


 const app = express()
 const port = process.env.PORT || 3000;
 app.listen(port,()=>console.log ('server listening on port',port))

 app.use(express.json())
 app.use("/api", userRoute);

 app.get("/",(req,res)=>{res.send("bienbenido")})


/*
execute_app.listen(port,()=>{console.log ('server listening on port',port)})
execute_app.get('/',(req,res)=>res.send('electiva'))
*/
/*mongoose
    .connect(process.env.MONGODB_CONNECTION_STRONG)
    .then(()=>console.log("Connect with mongodb"))
    .catch((error)=>console.error(error))*/