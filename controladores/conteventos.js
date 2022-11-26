import {eventos} from '../modelos/eventos.js';

export const regevento = (req,res) => {
    const user1 = eventos(req.body);
    user1
        .save()
        .then((data) => res.json (data))
        .catch((error) => res.json({ message: error }));
};

export const mostrarevento = (req,res) => {
    eventos
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
};

export const mos_un_evento = (req, res) => {
    const { id } = req.params;
    eventos
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};

export const actualizar_evento = (req,res) => {
    const {id} = req.params;
    const { fecha, equipo1, equipo2, marcador1, marcador2, t_evento} = req.body;
    eventos
        .updateOne({ _id: id}, { $set: {fecha, equipo1, equipo2, marcador1, marcador2, t_evento }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
};

export const borrar_evento = (req,res) => {
    const {id} = req.params;
    eventos
        .deleteOne({_id: id})
        .then ((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

export default regevento;