import {usuarios} from "../datos/usuarios.js";

let usuariosDevolver=usuarios;

export class Usuario{
   
   static register=async (usuario) =>{
        if (!usuario.success) {
            return Error;
        }

        const nuevoUsuario = {
            ...usuario.data
        }
        if (usuariosDevolver.find(usuario => usuario.nick === nuevoUsuario.nick) || 
            usuariosDevolver.find(usuario => usuario.mail === nuevoUsuario.mail))
        {
            return "usuario duplicado";
        }
          
        usuariosDevolver=[...usuariosDevolver,nuevoUsuario];
        return nuevoUsuario;
   }
   
   static login=async(usuario) =>{
      let usuarioRecibido=usuario;

      let usuarioRegistrado=usuariosDevolver.find((usuario) => usuario.nick ==usuarioRecibido.nick);
      
      if (!usuarioRegistrado)
          return "No existe el usuario";      
      let pwd = usuarioRecibido.password.localeCompare(usuarioRegistrado.password);
      
      if (pwd!=0)
        return "Fallo de autenticacion";
      const usuarioFormateado = {
        nick: usuarioRegistrado.nick,
        mail: usuarioRegistrado.mail
      }

      return usuarioFormateado;
   }
}