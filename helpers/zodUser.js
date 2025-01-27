import zod from 'zod';
const usuarioSchema=zod.object({
    id: zod.number(),
    nick: zod.string(),
    password: zod.string(),
    mail: zod.string(),
})

export const validarUsuario =(usuario)=>{
   return usuarioSchema.safeParse(usuario);
}
