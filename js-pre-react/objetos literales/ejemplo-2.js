//Darle un alias/sobrenombre a las propiedades ue se desestructuran

const persona = {
    nombre: "Cinthya",
    edad: 20,
    ciudad: "La mejor ciudad"
}

//Desestrructurar el "nombre"
let {nombre} = persona

console.log(nombre);