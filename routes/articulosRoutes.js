import {Router} from "express";
import { ArticuloController } from "../controllers/ArticuloController.js";

export const EnrutadorArticulo =(modelo) =>{

// crear un objeto ArticuloController(modelo)
const controlador=new ArticuloController(modelo);
const articuloRouter=Router();


articuloRouter.get('/',controlador.getAll)

articuloRouter.get('/:id',controlador.getOneByID)

articuloRouter.delete('/:id',controlador.delete)
  
articuloRouter.post('/',controlador.create)

articuloRouter.put('/:id',controlador.update)

return articuloRouter;
}