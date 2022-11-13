import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

 
export const bd = mongoose.connect(process.env.URI_BD).then(() => {;
console.log("✈Prueba de conexion con exito a la base de datos: 😀")
}).catch((error) => console.error("Conexion fallida a la base da dotos mangobd", error));

export default bd;
