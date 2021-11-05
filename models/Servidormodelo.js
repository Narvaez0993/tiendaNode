const express = require("express");

const {conectarBD} = require('../database/conexion.js')

const rutas = require('../routes/rutas.js')

const cors = require('cors')

class ServidorModelo{

  constructor(){
    this.app = express();
    this.despertarBD();
    this.llamarAuxiliares();
    this.enrutarPeticiones();
  }

  despertarServidor(){
    this.app.listen(process.env.PORT,function(){
      console.log("Servidor encendido..."+process.env.PORT);
    })
  }

  enrutarPeticiones(){

    this.app.use('/',rutas)

  }

  despertarBD(){

    conectarBD()

  }

  //midlewares
  llamarAuxiliares(){
    this.app.use(express.json())
    this.app.use(cors())
  }

}

module.exports = ServidorModelo