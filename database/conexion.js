const mongoose = require('mongoose');

async function conectarBD(){

    try{

        await mongoose.connect(process.env.BASEDATOS);
        console.log("Exito, conectandonos a la bd..");

    }catch(error){

        console.log("Fallamos al conectar"+error)

    }

}

module.exports = {conectarBD}