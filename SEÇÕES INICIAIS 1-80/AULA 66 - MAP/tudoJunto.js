// map
// filter
// reduce


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// retorne a soma do dobro dos numeros pares da lista de numeros
const numerosPares = numeros
    .filter( valor =>  valor % 2 === 0) // separando os pares
    .map( valor => valor *2) // dobrando os pares
    .reduce( (acumulador,valor) => acumulador + valor); // somando todos

console.log(numerosPares);
