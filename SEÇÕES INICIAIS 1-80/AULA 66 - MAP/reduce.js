
// retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor,indice, array) { // acumulador, valor,indice, array
    return  acumulador += valor; // precisa retornar algo 
}, 0);// <--- valor inicial do acumulador(opcional)

console.log(total); // somando todos os numeros

// filter retorna um array com pares(filter)
const pares = numeros.reduce(function (acumulador,valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador; // precisa retornar algo 
}, []);// <--- valor inicial pode ser um array
console.log(pares); // todos os valores pares em um array(filtrados)

// como achar o mais velho
const maisVelha = pessoas.reduce(function (acumulador,valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
