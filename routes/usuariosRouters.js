import {Router} from "express";
import {UsuarioController} from "../controllers/UsuarioController.js"

export const EnrutadorUsuario=(modelo)=>{
    
    const controlador = new UsuarioController(modelo);

    const usuarioRouter= Router();
    
    usuarioRouter.post('/',controlador.register);

    usuarioRouter.post("/login",controlador.login);

    return usuarioRouter;
}