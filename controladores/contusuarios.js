import {usuarios} from '../modelos/usuarios.js';

export const regusuario = (req,res) => {
    const user1 = usuarios(req.body);
    user1
        .save()
        .then((data) => res.json (data))
        .catch((error) => res.json({ message: error }));
};

export const mostrarusuario = (req,res) => {

    usuarios
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
}

export const mos_un_usuario = (req, res) => {
    const { id } = req.params;
    usuarios
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};

export const borrar_usuario = (req,res) => {
    const {id} = req.params;
    usuarios
        .deleteOne({_id: id})
        .then ((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

export const actualizar_usuario = (req,res) => {
    const {id} = req.params;
    const { nom_usuario, contraseña, correo} = req.body;
    usuarios
        .updateOne({ _id: id}, { $set: {nom_usuario, contraseña, correo }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
};

export default regusuario;