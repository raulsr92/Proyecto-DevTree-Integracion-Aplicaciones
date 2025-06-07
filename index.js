console.log("Hola mundo desde DevTree")

import express from "express"

// Crear una instancia del servidor Express

const app = express()

// Routing

app.get('/',(req,res)=>{
    res.send("Hola mundo desde express")
})

app.get('/ecommerce',(req,res)=>{
    res.send("Hola mundo desde Ecommerce")
})

app.get('/blog',(req,res)=>{
    res.send("Este es el blog")
})

app.get('/contacto',(req,res)=>{
    res.send("Este es la zona para contactos")
})

// Crear (inicializar) servidor

app.listen(4000,()=>{
    console.log("Servidor Levantado")
})

