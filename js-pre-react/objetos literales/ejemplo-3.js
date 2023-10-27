//Definir valores por defecto

const persona = {
    nombre: undefined,
    edad: 20,
    ciudad: "La mejor ciudad"
}

let {edad = 30, nombre = "Fulanito"} = persona

console.log(nombre);