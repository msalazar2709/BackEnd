import { validarUsuario } from "../helpers/zodUser.js";
export class UsuarioController{

    constructor(modelo){
        this. modelo=modelo;
    }
    
    register = (request,response) =>{
      const usuario = validarUsuario(request.body);

      const nuevoUsuario=this.modelo.register(usuario);

      if (nuevoUsuario == Error){
        return response.status(400).json('Error en proceso de validacion');
      }
      response.json(nuevoUsuario)
      
    }

    login=async(request,response) =>{
      const datosAuth=request.body;
      const usuario=await this.modelo.login(datosAuth);
      if (usuario){
        response.json(usuario);
      }
      else{
        response.status(400).end();
      }
    }

}