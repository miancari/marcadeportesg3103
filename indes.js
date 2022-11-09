import  Express  from "express";
import  cors  from 'cors'

const lib = Express()
lib.use(cors())
lib.use(Express.json())

lib.get('/',(req,res)=>{
    res.send('Bienvenidos GRUPO G31')
})

lib.listen(8000, () => {
    console.log('Servidor Corriendo en http://localhost:8000/')
})