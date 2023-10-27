// Crear una promesa y consumirla parallevarle un helado a un amigo, si la hedaleria esta abaierta

let heladeriaAbierta = true
//Fromas de usar promesas:
// 1. Crear las reglas de la promesa, nos puede tocar hacerlo o no

const traerHelado = new Promise(function (resolve, reject) {
    //Logica de la promesa
    if (heladeriaAbierta) {
        resolve("Ten, te traje un helado porque estaba abaierta la heladeria")
    } else {
        reject("No te traje el helado, porque no estaba abierta la heladeria")
    }
})

// 2. Recibir promesas como respuesta
traerHelado.then(function (response) {
    // codigo...
    console.log(response);
}).catch(function (error) {
    console.error("HELADERIA BONITA: " + error);
})