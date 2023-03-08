"use strict";
exports.__esModule = true;
var claseAutos_1 = require("./claseAutos");
var registroAutomotor_js_1 = require("./registroAutomotor.js");
var record = [];
var manage = new registroAutomotor_js_1.RegistroAutomotor;
var nissan = new claseAutos_1.Auto('nissan', 'skyline', 2.0, 'SRE-314', 59768);
var porsche = new claseAutos_1.Auto('porsche', 'carrera gt', 3.0, 'KBU-991', 32489);
var Ford = new claseAutos_1.Auto('ford', 'scort', 1.6, 'DAZ-897', 29138);
var chevrolet = new claseAutos_1.Auto('chevrolet', 'astra', 2.3, 'UPW-554', 76895);
var hyundai = new claseAutos_1.Auto('Hyundai', 'tucson', 1.4, 'BFC-869', 21460);
var bmw = new claseAutos_1.Auto('bmw', 'serie 1', 3.0, 'MZG-181', 34906);
// añadir autos:
manage.loadCars(record, nissan);
manage.loadCars(record, porsche);
manage.loadCars(record, Ford);
manage.loadCars(record, chevrolet);
manage.loadCars(record, hyundai);
manage.loadCars(record, bmw);
// Consultar Datos:
manage.consultaBaseDeDatos('porsche', record);
manage.consultaBaseDeDatos('chevrolet', record);
// // // Modifica Datos de Autos:
// manage.modificaArchivo('chevrolet', registro, 'goat');
// manage.modificaArchivo('ford', registro, 'torta');
// borrar datos: 
manage.deleteData('bmw', record);
manage.deleteData('hyundai', record);
console.log(record);
