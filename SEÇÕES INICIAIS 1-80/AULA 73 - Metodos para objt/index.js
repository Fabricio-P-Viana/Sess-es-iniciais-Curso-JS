/*
Object.values
Object.entries
Object.assign(destino, objetos)
Object.getOwnPropertyDescriptor(o,"prop")
... (spread)

// já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

// copiando objetos
const produto = {nome: "caneca",preco: 1.8};
const outraCoisa = produto; // outra coisa aponta para produto caso alterar as duas mudam
const outraCoisa2 = {...produto}; // produto copiado que se modificado não altera original(spread)

const copia = Object.assign({}, produto); // copia apartir de Object.assign(des, any)

//Object.getOwnPropertyDescriptor(objeto,"chave") retorna as propriedades da chave( em um objeto)

console.log(Object.getOwnPropertyDescriptor(produto,"nome"));

//Object.values e Object.entries
console.log(Object.values(produto)); // mostra somente os valores
console.log(Object.entries(produto)); // mostra os valores e chaves dentro de array multidimencional
// [ [ 'nome', 'caneca' ], [ 'preco', 1.8 ] ]
