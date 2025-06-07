console.log("Hola mundo desde DevTree")

import express from "express"

// Crear una instancia del servidor Express

const app = express()

// Routing

app.get('/',(req,res)=>{
    res.send("Hola mundo desde express")
})


// Crear (inicializar) servidor

app.listen(4000,()=>{
    console.log("Servidor Levantado")
})

