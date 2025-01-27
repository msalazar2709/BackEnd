import mongoose,{model} from "mongoose";
import  {conexion} from "../helpers/conexion.js";


conexion();
const usuarioSchema = new mongoose.Schema(
    {   
        nick: String,
        password: String,
        mail:String
    },
    {
        versionkey: false
    }

)

const Usuario = model('Usuario',usuarioSchema);

export class UsuarioModel{
    static  register = async (usuario) =>  {
        
        if(!usuario.success){
            return Error;
        }

        const nuevoUsuario={
            ...usuario.data
        }

        const usuarioExiste=await Usuario.findOne({$or: [{nick: nuevoUsuario.nick},{mail: nuevoUsuario.mail}]});
          
        if (usuarioExiste){
            return "Usuario Duplicado"
        }

        try{
            nuevoUsuario.password = nuevoUsuario.password;
            const usuarioGuardar=new Usuario(nuevoUsuario);
            await usuarioGuardar.save();
            return nuevoUsuario;
        }

        catch(e){
            console.log(e);
        }
    }

    static login=async(usuario) =>{
        let usuarioRecibido = usuario;
        try{
            usuarioEncontrado=await Usuario.findOne({nick: usuarioEncontrado.nick});
            if (!usuarioEncontrado)
            {
                return "Usuario no existe"
            }
            let pwd = usuarioRecibido.password.localeCompare(usuarioRegistrado.password);
      
            if (pwd!=0){ 
                return "fallo autentificacion"
            }
            //const token=crearToken (usuarioEncontrado);

            const usuarioFormateado={
                nick: usuarioEncontrado.nick,
                mail: usuarioEncontrado.mail
            }
        return usuarioFormateado;
    }
      catch (e){
         console.log(e);
      }
    }  
}