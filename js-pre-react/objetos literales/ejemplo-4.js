//Desestructuracion anidada

const persona = {
    nombre: undefined,
    edad: 20,
    ciudad: "La mejor ciudad",
    direccion: {
        calle: "123 calle principal",
        colonia: "colonia bonita"
    }
}

//Desestructuracion anidada
const { nombre = "Luna", direccion: { calle, colonia } } = persona

console.log(colonia);