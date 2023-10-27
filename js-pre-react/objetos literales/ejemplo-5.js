//Desestructuracion de objetos como parametros de funciones 

function imprimirInformacion({nombre, edad}) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const persona = {
    nombre: "Enrique",
    edad: 20,
    ciudad: "Ragnarok"
}

imprimirInformacion(persona)

//En este caso estamos pasando un objeto como argumento a la funcion "imprimirinformacion", y luego desetructuramos el objeto directamente en los parmetros de la funcion para acceder a las propiedades dentro de la funcion