console.log("Hola mundo desde DevTree")

import express from "express"

import router from "./router"
import "dotenv/config"
import {connectDB} from "./config/db"

// Crear una instancia del servidor Express

const app = express()

//Habilitar la lectura de datos

app.use(express.json())

// Prender la conexión

connectDB();

//Endpoint principal
app.use("/", router)

export default app