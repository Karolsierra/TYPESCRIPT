"use strict";
//Definir variables del tipo de dato:
function mostrarEstudiante(estudiante) {
    var _a;
    //Informacion del estudiante
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Apellido: ${estudiante.apellido}`);
    console.log(`Edad: ${estudiante.edad}`);
    console.log("DIRECCIONES");
    (_a = estudiante.addresses) === null || _a === void 0 ? void 0 : _a.forEach((direccion) => {
        console.log(`Calle: ${direccion.street}`);
        console.log(`Numero: ${direccion.numero}`);
        console.log(`Ciudad: ${direccion.city}`);
        console.log("----------------------");
    });
}
