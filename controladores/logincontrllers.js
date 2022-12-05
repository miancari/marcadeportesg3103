import bcrypt from 'bcrypt'
import usuarios from "../modelos/usuarios.js";
import { generateToken } from '../configs/funcionestoken.js';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken'
//const User = require('../models/user.js')

export const login = async (req,res) => {
    
    try{
      const {correo, contraseña} = req.body;

      let user = await usuarios.findOne({correo});
      if (!user)
          return res.status(403).json({error: "El correo no existe"});  
      const respuestaPassword = await usuarios.login(correo, contraseña);
      //const respuestapassword = await user.comparepassword(password);
            if(respuestaPassword) {
                //aca generamos un token
                const token = generateToken(usuarios._id);
                return res.json({token});
                //return res.status(403).json({error: "El correo y el password son correctos"});

                //aca configuramos el token en una cookie
                res.cookie("token", token)
            } else {
        return res.status(200).json({error: "El correo existe pero el password es incorrecto"});
      }
    }catch(error) {
        console.log(error);
        return res.status(500).json({error: "Error de servidor"})
    }
       
}

export const loginjwt = async (req,res) => {
  if ((req.body.correo == 'admin') && (req.body.contraseña == '123456')){
    const id = '63703e1f4bd191c9b4c6d816';
     const payload = {
         //{userid: usuario._id } se reemplaza por payload
         userid: id
     };
    const token =  jwt.sign(payload, process.env.JWTPRIVATEKEY, {
     expiresIn: '7d',
 }, function(err, token) {
     console.log(token);
     res.json(token);
 } );
 
    res.json({
         message: '😎Autenticación  Exitosa🚀🚁🚀',
         token: token
     })
     return token;
  }else { 
     res.json({
         message: '😮Usuario y/o password son incorrectos.🤔'
     }
     )
    
  }
 
 }
 

export default login;