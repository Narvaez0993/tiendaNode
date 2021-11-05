const { Router } = require('express')

//Importo los controladores

//Controlador Reservas
const { registarReserva } = require('../controllers/controladorReservas.js')
const { buscarReserva } = require('../controllers/controladorReservas.js')
const { buscarReservas } = require('../controllers/controladorReservas.js')
const { editarReserva } = require('../controllers/controladorReservas.js')
const { eliminarReserva } = require('../controllers/controladorReservas.js')

//Controlador Habitaciones
const { registarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { buscarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { buscarHabitaciones } = require('../controllers/controladorHabitaciones.js')
const { editarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { eliminarHabitacion } = require('../controllers/controladorHabitaciones.js')

const rutas = Router()

//Rutas del api de las Reservas
rutas.get('/reserva/:id', buscarReserva)
rutas.get('/reservas', buscarReservas)  
rutas.post('/reserva', registarReserva)
rutas.put('/reserva/:id', editarReserva)
rutas.delete('/reserva/:id', eliminarReserva)

//Rutas del api de las Habitaciones
rutas.get('/habitacion/:id', buscarHabitacion)
rutas.get('/habitaciones', buscarHabitaciones)  
rutas.post('/habitacion', registarHabitacion)
rutas.put('/habitacion/:id', editarHabitacion)
rutas.delete('/habitacion/:id', eliminarHabitacion)

module.exports = rutas