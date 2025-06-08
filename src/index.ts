import server from "./server"

const port = process.env.PORT || 4000


// Crear (inicializar) servidor

server.listen(port,()=>{
    console.log("Servidor Levantado en el puerto", port)
})

