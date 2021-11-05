//El controlador se encargara de administrar las peticiones y respuesta

const { request, response } = require('express')

//Importando el servicio de Habitaciones
const { insertarHabitacion } = require('../services/serviciosHabitaciones.js')
const { traerHabitacion } = require('../services/serviciosHabitaciones.js')
const { traerHabitaciones } = require('../services/serviciosHabitaciones.js')
const { modificarHabitacion } = require('../services/serviciosHabitaciones.js')
const { borrarHabitacion } = require('../services/serviciosHabitaciones.js')

//Cuales son las operaciones que debe realizar mi Servidor

async function registarHabitacion(peticion=request, respuesta=response){

    //Capturo los datos que llegan en el cuerpo de la petición
    let data = peticion.body;

    try{
        
        await insertarHabitacion(data)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito Registrando Habitacion"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })
}

}

async function buscarHabitacion(peticion=request, respuesta=response){

    //Capturar el id de la habitacion a buscar
    let id = peticion.params.id

    try{
        
        let habitacion = await traerHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            datosH: habitacion
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })
}

}

async function buscarHabitaciones(peticion=request, respuesta=response){

    try{
        
        let habitaciones = await traerHabitaciones()
        respuesta.status(200).json({
            estado:true,
            datosH: habitaciones
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })
}

}

async function editarHabitacion(peticion=request, respuesta=response){

    //Resivir datos del body y el id de los params
    let datos = peticion.body
    let id = peticion.params.id

    try{
        
        await modificarHabitacion(id, datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito editando Habitacion"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })
} 

}

async function eliminarHabitacion(peticion=request, respuesta=response){

    let id = peticion.params.id

    try{
        
        await borrarHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito Eliminando Registro"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })
}   

}


module.exports = {
    registarHabitacion, 
    buscarHabitacion, 
    buscarHabitaciones, 
    editarHabitacion, 
    eliminarHabitacion
}