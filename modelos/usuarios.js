import mongoose from "mongoose";
import * as bcrypt from 'bcrypt';
import bcryptjs from 'bcryptjs';
import {bd} from '../bdmongo.js';
import Valido from "../validacion/validarcorreo.js";

const usuariosSchema = new mongoose.Schema (
    {
        nom_usuario: {
            type: String,
            require: true
        },
        contraseña: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require: true,
            lowercase: true,
            unique: true
        },
        emailVerified: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

usuariosSchema.methods.comparePassword = async function (contraseña) {
    return await  bcrypt.compareSync(contraseña, usuarios.contraseña);
};

//Encriptar contraseña

usuariosSchema.pre('save', function(next){
    const user = this
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(user.contraseña, salt);
    user.contraseña = hash;
    next()
});

usuariosSchema.statics.login = login;

function login(correo,contraseña) {
    console.log("El correo es:", correo);
    console.log("La contraseña es: ", contraseña);
    if(!Valido(correo)) {throw new Error('El correo es invalido');}

    else { return this.findOne({correo})
            .then(usuarios => {
                console.log(usuarios)
                if(!usuarios){
                    throw new error ('El correo no corresponde');
                }
                console.log('El valor de la contraseña es :', contraseña);
                const isMatch = bcrypt.compareSync(contraseña, usuarios.contraseña);
                console.log('El valor de la comparación del password es:',isMatch);
                if (isMatch) {return true}
                else{return false};
            })
            
            }
    
}

export const usuarios = mongoose.model('usuarios',usuariosSchema);
export default usuarios;