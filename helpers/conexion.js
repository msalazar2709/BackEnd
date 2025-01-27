import mongoose  from "mongoose";
export const conexion=async () =>{
   try{
     await mongoose.connect("mongodb+srv://ingzapatap:user123@clusterprograweb.49lr3.mongodb.net/Dastic");
     console.log ("conectado correctamente");

   }
    catch (e){
        console.log(e)
    }

}