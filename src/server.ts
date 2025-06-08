console.log("Hola mundo desde DevTree")

import express from "express"

import router from "./router"

// Crear una instancia del servidor Express

const app = express()

//Habilitar la lectura de datos

app.use(express.json())

//Endpoint principal
app.use("/", router)

export default app