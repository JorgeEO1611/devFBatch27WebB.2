//Modificando el areglo original

const numeros = [1, 2, 3, 4, 5]

//Cada "foreach", en la funcion que pide como parametro, a su vez, esa funcion puede recibir 3 argumentos: elemento, indice y el rreglo completo

console.log("original", numeros);

numeros.forEach((numeroActual, indice, arregloCompleto) => {
    //console.log(`${indice}.- ${numero} ===== ${arregloCompleto}`);
    arregloCompleto[indice] = numeroActual * 2
});

console.log("original modificado", numeros);