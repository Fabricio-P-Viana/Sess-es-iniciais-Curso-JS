// filter -> sempre retorna array, com a mesma quantidade de elementos ou menor
// 

// retore os numeros maiores que 10
// filter so tem para array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//function callBackFilter(valor) {
//    return valor > 10; // filter recebe valores boolean
//}

// filter( valor, indice, array)

const numerosFiltrados =  numeros.filter(valor => valor > 10); // filter recebe valores boolean
console.log(numerosFiltrados);


//=====================================

const pessoas = [
    {nome: "luiz", idade: 62 },
    {nome: "Maria", idade: 23 },
    {nome: "Eduardo", idade: 55 },
    {nome: "leticia", idade: 19 },
    {nome: "Rosana", idade: 32 },
    {nome: "Wallace", idade: 47 },
];
// retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
console.log(pessoasComNomeGrande);

// retorne as pessoas com mais de 50 anos
const pessoasVelhas = pessoas.filter(valor => valor.idade > 50);
console.log(pessoasVelhas);

// retorne as pessoas que terminam com a letra A
const pessoasA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith("a")); // endsWith termina com....
console.log(pessoasA);