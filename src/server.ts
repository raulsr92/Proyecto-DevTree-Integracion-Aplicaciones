console.log("Hola mundo desde DevTree")

import express from "express"

import router from "./router"

// Crear una instancia del servidor Express

const app = express()


app.use("/", router)

export default app