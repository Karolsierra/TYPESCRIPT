import { Address, Estudiante } from "./tipos";

const mostrarEstudiante = (estudiante: Estudiante) => {
    // Información del estudiante
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Apellido: ${estudiante.apellido}`);
    console.log(`Edad: ${estudiante.edad || `NO DEFINIDO`}`);
    console.log("DIRECCIONES");

    // Mostrar direcciones del estudiante
    estudiante.addresses?.forEach((direccion: Address) => {
        console.log(`Calle: ${direccion.street}`);
        console.log(`Número: ${direccion.numero}`);
        console.log(`Ciudad: ${direccion.city}`);
        console.log("----------------------");
    });
}

export default mostrarEstudiante;
