import {Auto} from './claseAutos';
import * as fs from 'fs';

const baseDateCars: string [] = [];

export class RegistroAutomotor{
    actualizacion(baseDateCars: Auto) {
        console.log(baseDateCars);       
    } 

    loadCars(baseDateCars, newCar: Auto) {
        if(baseDateCars.push(newCar)) {
            this.arrayAJason(baseDateCars)
            console.log(`The car data has been successfully added.`, newCar);
        } else {
            console.log(`The car data has not been added.`);
        }
    }

    consultaBaseDeDatos(nombre: string, baseDateCars) {
        const autoEncontrado = baseDateCars.filter(baseDateCars => baseDateCars.nombre == nombre)
        if (autoEncontrado) {
            console.log(`The car you are looking for is in the database.`);
            } else {
            console.log(`The required data were not found.`);
        }
    }

    // modificaArchivo(nombre: string, baseDateCars, date: string) {
    //     let archivoModificado = this.consultaBaseDeDatos(nombre, baseDateCars);
    //     if (archivoModificado) {
    //         archivoModificado.marca = dato;
    //         console.log(`The database has been modified: It can be find as: "${dato}".`);
    //     } else {
    //         console.log(`The database could not be modified`);                            
    //     }
    // }

   deleteData(nombre: string, baseDateCars) {
        const archivoEliminado = baseDateCars.filter(element => element.nombre === nombre);
        if(archivoEliminado){  
            console.log(`The datafile has been deleted`);
            } else {
                return `The datafile could not be deleted`;
            }
        }

    arrayAJason(baseDateCars:Auto[]) {
        const updateCar= JSON.stringify(baseDateCars);
        fs.writeFileSync('./registro autos.json', updateCar, 'utf-8')
        }
    }
    