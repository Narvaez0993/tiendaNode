//Importo el modelo de datos

const ModeloReserva = require('../models/ReservaModelo.js')

//Servicio para agregar un documento a la bd

async function insertarReserva(datosReserva){

    let reservaAInsertar = new ModeloReserva(datosReserva)

    return await reservaAInsertar.save()

}

//Servicio para buscar una Reserva en la bd
async function traerReserva(id){

   let reserva = await ModeloReserva.findById(id)
   return reserva

}

//Servicio para buscar todos los documentos de las Reservas
async function traerReservas(){
    let reservas = await ModeloReserva.find()
    return reservas

}

//Servicio para editar un documento de la Reserva
async function modificarReserva(id, datos){

    return await ModeloReserva.findByIdAndUpdate(id, datos)


}

//Servicio para eliminar un documento de la Reserva
async function borrarReserva(id){

    return await ModeloReserva.findByIdAndDelete(id)

}

module.exports = { 
insertarReserva,
traerReserva,
traerReservas,
modificarReserva,
borrarReserva
}