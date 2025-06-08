import {Router} from "express"
import UserModel from "./models/User"
const router = Router()

// Routing

//----Autenticacion

/*
router.post('/auth/register', (req,res)=>{
    //console.log("Desde register consola")
    //res.send("Desde registro si")
    console.log("Obteniendo data de request")
    console.log(req.body)
    res.send(req.body)
})*/

router.post('/auth/register', async (req,res)=>{
    //Forma 1
    /* await UserModel.create(req.body)*/

    //Forma 2: Instanciando el modelo

    const user = new UserModel(req.body)

    await user.save()

    res.send("Usuario registrado exitosamente")
})


/*
router.get('/',(req,res)=>{
    res.send("Hola mundo desde express en el 2025")
})

router.get('/ecommerce',(req,res)=>{
    res.send("Hola mundo desde Ecommerce")
})
*/


export default router