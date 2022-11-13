import mongoose from "mongoose";
import bcrypt, {hash} from "bcrypt";

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
            unique: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

usuariosSchema.pre('save', function(next) {
    const user = this
    bcrypt.hash(user.contraseña, 10, (error, hash) => {
        user.contraseña = hash
        next()
    })
});

export const usuarios = mongoose.model('usuarios',usuariosSchema);
export default usuarios;