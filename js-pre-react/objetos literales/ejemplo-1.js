//La desestructuracion de objetos literales en JS, te permite extraer propiedades de un objeto y asiganarlas variables/ constantes individuales de manera mas conveniente.

const persona = {
    nombre: "Cinthya",
    edad: 20,
    ciudad: "La mejor ciudad"
}

//Desestructuracion
let {nombre, edad, ciudad} = persona

console.log(ciudad);