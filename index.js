
import express from "express";
import { EnrutadorArticulo } from "./routes/articulosRoutes.js";
import { ArticuloModel } from "./models/Articulo_MDB.js";
import { UsuarioModel } from "./models/Usuario_MDB.js";
import {EnrutadorUsuario} from "./routes/usuariosRouters.js";
import cors from "cors";
const app= express();

app.use(express.json());
app.use(cors())
const PORT=3030;

app.use('/api/articulos',EnrutadorArticulo(ArticuloModel));
app.use('/api/usuarios',EnrutadorUsuario(UsuarioModel));

app.listen(PORT,()=>{
     console.log("Servidor a la espera");
})
