import {Request, Response} from "express"
import UserModel from "../models/User"


export const createAccount = async (req:Request,res:Response)=>{
    //Forma 1
    /* await UserModel.create(req.body)*/

    //Forma 2: Instanciando el modelo
    
    try {
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).json({ error: "Faltan datos requeridos" })
        }
        const user = new UserModel(req.body)
        await user.save()

        res.status(201).json({ mensaje:"Usuario registrado exitosamente"})

    } catch (error) {
         console.error("Error al registrar usuario:", error);
         if (error.name === "ValidationError") {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        return res.status(500).json({ error: "Error interno del servidor" })
      }

}