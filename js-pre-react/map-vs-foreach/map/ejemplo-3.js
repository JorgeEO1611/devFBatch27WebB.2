//Crear un arreglo de las longitudes de las palabras de otro arreglo
const palabras = ["Linterna", "Llanta", "espada", "vaca"]

// Salida esperada \ Expected output

const longitudes = palabras.map(palabra => {
    return palabra.length
})

console.log("palabras:", palabras);
console.log("longitudes", longitudes);