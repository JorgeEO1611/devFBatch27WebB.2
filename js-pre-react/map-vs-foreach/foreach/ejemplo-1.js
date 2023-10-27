//Se utiliza para iterar sobre elemntos de un arreglo y ejecutar una funcion para cada elemnto
//No devuelve un nuevo arreglo, trabaja sobre el original

const frutas = ["manzana", "pera", "platano"]

//Ejemplo con funcion de flecha/Arrow Function
frutas.forEach(fruta => {
    console.log(fruta);
});

//Ejemplo con una funcion clasica
frutas.forEach(function (fruta) {
    console.log(fruta);
});