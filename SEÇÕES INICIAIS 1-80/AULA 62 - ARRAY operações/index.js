const nomes = ["eduardo","maria","joana","gabriel","julia"];

// nome.splice(indice, delete, elem1, elem2)
// pop com splice
const removidos = nomes.splice(-2, 1, "Luiz"); // remove o ultimo elemento , e com a terceira adição o valor selecionado e substituido pelo valor do terceiro
// Number.MAX_VALUE valor maximo pode ser usado como delete para excluir todos os numeros apartir do incide emdiante

// shift
const removidos2 = nomes.splice(0,1); // remove o primeiro valor

//push
nomes.slice(nomes.length, 1, "Luiz"); // adiciona no final

// unshift
nomes.slice(0,0,"luiz", "otavio"); // adiciona no começo
