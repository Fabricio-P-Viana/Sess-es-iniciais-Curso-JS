// map - altera valores do array
// map vai sempre ter o mesmo tamanho do array usado

// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor* 2);

console.log(numerosEmDobro);

//=====================================

const pessoas = [ 
    {nome: "luiz", idade: 62 },
    {nome: "Maria", idade: 23 },
    {nome: "Eduardo", idade: 55 },
    {nome: "leticia", idade: 19 },
    {nome: "Rosana", idade: 32 },
    {nome: "Wallace", idade: 47 },
];

// retorne apenas uma string com os nomes
const NomesString = pessoas.map(obj => obj.nome);
console.log(NomesString);

// remova os nomes do objeto
const idadeString = pessoas.map(obj => ({idade: obj.idade}));
console.log(idadeString);

// adicione uma chave id para cada objeto
const comIds = pessoas.map(function(obj,indice) { 
    const newObj = {...obj}; // para caso queira pegar uma copia do meu objeto 
    obj.id = indice;
    return obj;
});
console.log(comIds);