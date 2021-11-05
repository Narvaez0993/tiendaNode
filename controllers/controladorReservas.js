//El controlador se encargara de administrar las peticiones y respuesta

const { request, response } = require('express')

//Importando el servicio de Reservas
const { insertarReserva } = require('../services/serviciosReserva.js')
const { traerReserva } = require('../services/serviciosReserva.js')
const { traerReservas } = require('../services/serviciosReserva.js')
const { modificarReserva } = require('../services/serviciosReserva.js')
const { borrarReserva } = require('../services/serviciosReserva.js')

//Cuales son las operaciones que debe realizar mi Servidor

async function registarReserva(peticion=request, respuesta=response){

    //Capturo los datos que llegan en el cuerpo de la petición
    let datosClienteR = peticion.body;

    //Intentar grabar los datos en bd usando el servicio
    try{
        
        await insertarReserva(datosClienteR)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando reserva"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })

}

}

async function buscarReserva(peticion=request, respuesta=response){

    let id = peticion.params.id

    try{
        
        let reserva = await traerReserva(id)
        respuesta.status(200).json({
            estado:true,
            datosR: reserva
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })
}

}

async function buscarReservas(peticion=request, respuesta=response){

    try{
        
        let reservas = await traerReservas()
        respuesta.status(200).json({
            estado:true,
            datosR: reservas
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })
} 

}

async function editarReserva(peticion=request, respuesta=response){

    //Resivir datos del body y el id de los params
    let datos = peticion.body
    let id = peticion.params.id

    try{
        
        await modificarReserva(id, datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito editando Reserva"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })
}  

}

async function eliminarReserva(peticion=request, respuesta=response){

    let id = peticion.params.id

    try{
        
        await borrarReserva(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito Eliminando Reserva"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss, parece que hubo un error, intentalo de nuevo"+error
    })
} 

}


module.exports = {registarReserva, buscarReserva, buscarReservas, editarReserva, eliminarReserva}