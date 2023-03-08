import {Auto} from "./claseAutos";
import { RegistroAutomotor } from "./registroAutomotor.js";
import * as fs from "fs";

let record: [] = [];
const manage = new RegistroAutomotor;

const nissan: Auto = new Auto('nissan', 'skyline', 2.0, 'SRE-314', 59768);
const porsche: Auto = new Auto ('porsche', 'carrera gt', 3.0, 'KBU-991', 32489);
const Ford: Auto = new Auto ('ford', 'scort', 1.6, 'DAZ-897', 29138);
const chevrolet: Auto = new Auto ('chevrolet', 'astra', 2.3, 'UPW-554',76895);
const hyundai: Auto = new Auto ('Hyundai', 'tucson', 1.4, 'BFC-869',21460);
const bmw: Auto = new Auto ('bmw', 'serie 1', 3.0, 'MZG-181',34906);

// añadir autos:
manage.loadCars(record, nissan);
manage.loadCars(record, porsche);
manage.loadCars(record, Ford)
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