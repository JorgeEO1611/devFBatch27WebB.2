// En JS, las promesas son objetos que representan un valor que puede estar disponible en un tiempo indefinido, por naturaleza, son estructuras asincronas

// 1. Crear la estructura de una promesa
const promesa = new Promise(function (resolve, reject) {
    //Las promesas contienen dos metodos:
    resolve()
    reject()
})

// 2. Consumir la promesa
promesa.then(function (response) {
    // codigo...
    console.log(response);
}).catch(function (error) {
    console.error(error);
})