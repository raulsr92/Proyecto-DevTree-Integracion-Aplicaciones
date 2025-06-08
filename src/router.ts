import {Router} from "express"

const router = Router()

// Routing

//----Autenticacion

router.post('/auth/register', (req,res)=>{
    //console.log("Desde register consola")
    //res.send("Desde registro si")
    console.log("Obteniendo data de request")
    console.log(req.body)
    res.send(req.body)
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