import {Router} from "express"

const router = Router()

// Routing

router.get('/',(req,res)=>{
    res.send("Hola mundo desde express en el 2025")
})

router.get('/ecommerce',(req,res)=>{
    res.send("Hola mundo desde Ecommerce")
})

router.get('/blog',(req,res)=>{
    res.send("Este es el blog")
})

router.get('/contacto',(req,res)=>{
    res.send("Este es la zona para contactos")
})

export default router