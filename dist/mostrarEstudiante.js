"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstudiante = (estudiante) => {
    var _a;
    // Información del estudiante
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Apellido: ${estudiante.apellido}`);
    console.log(`Edad: ${estudiante.edad || `NO DEFINIDO`}`);
    console.log("DIRECCIONES");
    // Mostrar direcciones del estudiante
    (_a = estudiante.addresses) === null || _a === void 0 ? void 0 : _a.forEach((direccion) => {
        console.log(`Calle: ${direccion.street}`);
        console.log(`Número: ${direccion.numero}`);
        console.log(`Ciudad: ${direccion.city}`);
        console.log("----------------------");
    });
};
exports.default = mostrarEstudiante;
