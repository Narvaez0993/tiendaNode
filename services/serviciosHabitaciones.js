const ModeloHabitacion = require('../models/HabitacionModelo.js')

async function insertarHabitacion(datosHabitacion){

    let insertarhabitacion = new ModeloHabitacion(datosHabitacion)

    return await insertarhabitacion.save()

}

async function traerHabitacion(id){

    let habitacion = await ModeloHabitacion.findById(id)
    return habitacion
 
 }

//Servicio para buscar todos los documentos de las habitaciones
async function traerHabitaciones(){

    let habitaciones = await ModeloHabitacion.find()
    return habitaciones

}

//Servicio para editar un documento de la Habitacion
async function modificarHabitacion(id, datos){

    return await ModeloHabitacion.findByIdAndUpdate(id, datos)

}

//Servicio para eliminar un documento de la Habitacion
async function borrarHabitacion(id){

    return await ModeloHabitacion.findByIdAndDelete(id)

}

module.exports = { 
insertarHabitacion,
traerHabitacion,
traerHabitaciones,
modificarHabitacion,
borrarHabitacion
}