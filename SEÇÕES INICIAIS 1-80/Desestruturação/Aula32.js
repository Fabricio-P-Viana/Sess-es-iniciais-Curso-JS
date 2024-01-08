
// DESESTRUTURAÇÃO VIA ARRAYs

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [um, dois,     , quatro, ...resto] = numeros; // pegando valores e declarando em variaveis
// ...rest = pega tudo oq sobrou de um array ou ...spread espalha valores
// caso deixe um espaço em branco ele pula o valor como por exemplo o terceiro numero foi pulado
console.log( um, dois, quatro);
console.log(resto); 



// array list multidimencional
const num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// primeira chaves baseado na primeira camada da array mult dimensional
// segunda chave é a segunda camada

const [ ,[ , ,seis]] = num;
console.log(seis);