import usuarios from "../modelos/usuarios.js";
//const User = require('../models/user.js')

export const login = (req,res) => {
    if(!req.body.correo) return res.status(200).send({ success: false, error: 'No hay Correo en el body'});
    if(!req.body.password) return res.status(200).send({ success: false, error: 'No hay Password en el body'});

    try{
        user.login(req.body.password, req.body.correo)
        .then(data => {
            res.status(200).send({ success: true, data});

        }).catch(err => res.status(200).send ({success: true, error: err.message}))

    }catch(err) {
        res.status(400).send({ success: false, error: err.message});
    }

}

export default login;