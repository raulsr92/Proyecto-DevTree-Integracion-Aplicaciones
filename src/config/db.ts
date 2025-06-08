import mongoose from "mongoose"

console.log(process.env.MONGO_URI)

// Conexión

export const connectDB = async()=>{

    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)

        console.log(connection);
        console.log("MongoDB Conectado")
        console.log(connection.host, connection.port);

    } catch (error) {

        console.log(error.message)
        
    }

}