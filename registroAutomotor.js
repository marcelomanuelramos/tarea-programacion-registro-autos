"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var fs = require("fs");
var baseDateCars = [];
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.actualizacion = function (baseDateCars) {
        console.log(baseDateCars);
    };
    RegistroAutomotor.prototype.loadCars = function (baseDateCars, newCar) {
        if (baseDateCars.push(newCar)) {
            this.arrayAJason(baseDateCars);
            console.log("The car data has been successfully added.", newCar);
        }
        else {
            console.log("The car data has not been added.");
        }
    };
    RegistroAutomotor.prototype.consultaBaseDeDatos = function (nombre, baseDateCars) {
        var autoEncontrado = baseDateCars.filter(function (baseDateCars) { return baseDateCars.nombre == nombre; });
        if (autoEncontrado) {
            console.log("The car you are looking for is in the database.");
        }
        else {
            console.log("The required data were not found.");
        }
    };
    // modificaArchivo(nombre: string, baseDateCars, date: string) {
    //     let archivoModificado = this.consultaBaseDeDatos(nombre, baseDateCars);
    //     if (archivoModificado) {
    //         archivoModificado.marca = dato;
    //         console.log(`The database has been modified: It can be find as: "${dato}".`);
    //     } else {
    //         console.log(`The database could not be modified`);                            
    //     }
    // }
    RegistroAutomotor.prototype.deleteData = function (nombre, baseDateCars) {
        var archivoEliminado = baseDateCars.filter(function (element) { return element.nombre === nombre; });
        if (archivoEliminado) {
            console.log("The datafile has been deleted");
        }
        else {
            return "The datafile could not be deleted";
        }
    };
    RegistroAutomotor.prototype.arrayAJason = function (baseDateCars) {
        var updateCar = JSON.stringify(baseDateCars);
        fs.writeFileSync('./registro autos.json', updateCar, 'utf-8');
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
