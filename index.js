import  express  from "express";
import  cors  from 'cors'
import  router from "./routes/rutas.js"

const lib = express()
lib.use(cors())
lib.use(express.json())
lib.use('/',router)

/*lib.get('/',(req,res)=>{
    res.send('Bienvenidos GRUPO G31')
})*/

lib.listen(5000, () => {
    console.log('Servidor Corriendo en http://localhost:5000/')
})