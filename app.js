require('dotenv').config()

const ServidorModelo = require('./models/Servidormodelo.js')

const servidorReservas = new ServidorModelo();

servidorReservas.despertarServidor()