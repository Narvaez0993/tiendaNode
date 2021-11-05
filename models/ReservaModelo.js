//Importo las utilidades model y Schema de mongoose
const { model, Schema } = require('mongoose')

//Programar mi modelo de datos
const ModeloReserva = Schema({

    nombre_cliente:{
        type:String,
        required:true
    },
    apellido_cliente:{
        type:String,
        required:true
    },
    telefono_cliente:{
        type:String,
        required:true
    },
    fecha_inicio_reserva:{
        type:String,
        required:true
    },
    fecha_final_reserva:{
        type:String,
        required:true
    },
    numero_personas:{
        type:Number,
        required:true
    }

})

module.exports = model('reservas', ModeloReserva)

