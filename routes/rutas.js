import express  from "express";
import mongoose from "mongoose";
import { regevento, mostrarevento, mos_un_evento, actualizar_evento, borrar_evento } from "../controladores/conteventos.js";
import { regusuario, mostrarusuario, mos_un_usuario, actualizar_usuario, borrar_usuario} from "../controladores/contusuarios.js";
import { bd } from "../bdmongo.js";
import login from "../controladores/logincontrllers.js";
export const router = express.Router();

//Rutas modulo eventos

router.post("/regevento", regevento);
router.get('/mos_evento', mostrarevento);
router.get('/mos_evento/:id', mos_un_evento);
router.put('/act_evento/:id', actualizar_evento);
router.delete('/borr_evento/:id', borrar_evento);
router.post('/login', login);

//Rutas modulo usuarios

router.post('/regusuario', regusuario);
router.get('/mos_usuario', mostrarusuario);
router.get('/muser/:id', mos_un_usuario);
router.put('/act_usuario/:id', actualizar_usuario);
router.delete('/borr_usuario/:id', borrar_usuario)


export default router;
