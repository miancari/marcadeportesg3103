import  express  from "express";
import  cors  from 'cors'
import  router from "./routes/rutas.js"
import cookieParser from "cookie-parser";

const lib = express()
lib.use(cors())
lib.use(express.json())
//cookies
lib.use(cookieParser());
lib.use('/usuarios',router)



lib.listen(8000, () => {
    console.log('Servidor Corriendo en http://localhost:8000/')
})