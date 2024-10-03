import mostrarEstudiante from "./mostrarEstudiante";
import { Address, Estudiante } from "./tipos";

// Definir estudiantes
const e1: Estudiante = {
    nombre: "Karol",
    apellido: "Sierra",
    edad: 20,
    addresses: [
        { street: "Siempre viva", numero: 34, city: "Bogota" },
        { street: "Siempre viva", numero: 23, city: "Bogota" },
    ]
};

const e2: Estudiante = {
    nombre: "Stiven",
    apellido: "Ruiz",
    edad: 17,
    addresses: [
        { street: "Terreros", numero: 19, city: "Soacha" },
        { street: "Suba Compartir", numero: 29, city: "Bogota" },
        { street: "Calle 57", numero: 12, city: "Chapinero" },
    ]
};

// Llamar al método "mostrarEstudiante" para mostrar la info del Estudiante
// mostrarEstudiante(e1);

// // Información del estudiante
// console.log(`Nombre: ${e1.nombre}`);
// console.log(`Apellido: ${e1.apellido}`);
// console.log(`Edad: ${e1.edad}`);
// e1.addresses?.forEach((direccion: Address) => {
//     console.log(`Calle: ${direccion.street}`);
//     console.log(`Número: ${direccion.numero}`);
//     console.log(`Ciudad: ${direccion.city}`);
//     console.log("----------------------");
// });

// CREAR ARREGLO PARA ALMACENAR ESTUDIANTES:

//Crear arreglo para almacenar estudiantes

// Declarar un arreglo que puede contener números, cadenas o objetos de tipo Estudiante
let arregloEstudiantes: (number | string | Estudiante ) [] = [];
//agregar primeros elementos
arregloEstudiantes.push(2)   // Agrega un número
arregloEstudiantes.push("Sofia")   // Agrega un número
arregloEstudiantes.push("Laura")  // Agrega otra cadena
arregloEstudiantes.push(3);         // Agrega otro número

// Función para agregar un estudiante
const addEstudiante = (e: Estudiante) => {
    arregloEstudiantes.push(e)       // Añade el estudiante al arreglo
}

 //crear un arreglo en la condicion if para determinar 
    //si en el elmento existe un objeto en tipo estudiante


// Iterar sobre cada elemento del arreglo
arregloEstudiantes.forEach((elemento) => {
     // Verificar si el elemento es un objeto y contiene la propiedad 'nombre'
    if (typeof elemento === 'object' && elemento !== null && 'nombre' in elemento) {
        mostrarEstudiante(elemento); // Si es un estudiante, mostrar su información
    }
});

// Agregar estudiantes al arreglo
addEstudiante(e1); // Agrega el estudiante e1
addEstudiante(e2); // Agrega el estudiante e2

// Mostrar información de los estudiantes de nuevo (aunque ya se mostró antes en el forEach)
mostrarEstudiante(e1);  // Mostrar información del estudiante e1
mostrarEstudiante(e2);  // Mostrar información del estudiante e2

//console.log (arregloEstudiantes);

//// Método para agregar un estudiante al principio del arreglo:
//function addEstudianteAlPrincipio(e: Estudiante) {
//    arregloEstudiantes.unshift(e); // Agrega el estudiante al inicio del arreglo
//}
//
//// Método para encontrar un estudiante por nombre y actualizar su apellido:
//function actualizarApellidoPorNombre(nombre: string, nuevoApellido: string) {
//    const estudiante = arregloEstudiantes.find(e => e.nombre === nombre);
//    if (estudiante) {
//        estudiante.apellido = nuevoApellido;
//        console.log(`Apellido de ${nombre} actualizado a ${nuevoApellido}.`);
//    } else {
//        console.log(`Estudiante con nombre ${nombre} no encontrado.`);
//    }
//}
//
//// Método para encontrar estudiantes que vivan en Bogotá y actualizar su edad a 18
//function actualizarEdadenBogota() {
//    //Aquí utilizamos el método forEach, que permite iterar sobre cada elemento 
//    //del arreglo arregloEstudiantes. Por cada estudiante en el arreglo, 
//    //se ejecuta la función que sigue.
//    arregloEstudiantes.forEach(estudiante => {
//        const viveEnBogota = estudiante.addresses?.some(address => address.city.toLowerCase() === "bogota");
//        //estudiante.addresses: Este es el arreglo de direcciones 
//        //que pertenece al estudiante actual. Cada estudiante puede tener múltiples direcciones.
//
//        //.some(): Este método se utiliza para comprobar si al menos 
//        //un elemento del arreglo cumple con una condición. 
//        //En este caso, estamos verificando si alguna de las direcciones 
//        //tiene la ciudad "Bogotá".
//        if (viveEnBogota) {
//            estudiante.edad = 18; // Actualiza la edad a 18
//            console.log(`Edad de ${estudiante.nombre} ${estudiante.apellido} actualizada a 18 años.`);
//        }
//    });
//}
//
//// Invocar el método para agregar e1 al arreglo
//addEstudiante(e1);
//console.log(arregloEstudiantes);
//
//// Invocar el método para agregar e2 al principio del arreglo
//addEstudianteAlPrincipio(e2);
//console.log(arregloEstudiantes);
//
//// Ejemplo de uso del método para actualizar el apellido
//actualizarApellidoPorNombre("Karol", "BUITRAGO");
//console.log(arregloEstudiantes);
//
//// Llamar al método para actualizar la edad de estudiantes en Bogotá
//actualizarEdadenBogota();
//console.log(arregloEstudiantes);
//
//
////Metodo para borrar un estudiante por nombre y apellido
//function borrarPorNombreYApellido(
//    nombre: String, 
//    apellido: String
//){
//const longitudOriginal = arregloEstudiantes.length;
//arregloEstudiantes = arregloEstudiantes.filter(e => e.nombre !== nombre || e.apellido !== apellido);
//}
//borrarPorNombreYApellido("Karol", "BUITRAGO")


