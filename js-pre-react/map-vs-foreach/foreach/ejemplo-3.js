//Utilizar foreach para realizar una operacion matematica con los valores de un arreglo

const valores = [10, 20, 30, 40, 50]

let suma = 0

valores.forEach(valor => {
    suma += valor
});

console.log(suma);