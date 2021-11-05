//Importo las utilidades model y Schema de mongoose
const { model, Schema } = require('mongoose')

//Programar mi modelo de datos
const ModeloHabitacion = Schema({

    nombre_habitacion:{
        type:String,
        required:true
    },
    fotografia_habitacion:{
        type:String,
        required:true
    },
    descripcion_habitacion:{
        type:String,
        required:true
    },
    precio_adulto_noche:{
        type:Number,
        required:true
    },
    precio_nino_noche:{
        type:Number,
        required:true
    }

})

module.exports = model('habitaciones', ModeloHabitacion)