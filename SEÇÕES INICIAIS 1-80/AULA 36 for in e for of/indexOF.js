// FOR OFF 

const nome = "Fabricio Viana";

for (let valor of nome){
    console.log(valor); // retorna direto o valor e não o indice
};

const nomes = ["Fabricio", "Pereira", "Viana"];

for (let i of nomes){
    console.log(i); // em lista retorna o valor por indice e não o indice
}

// utilizando a função forEach podemos obter os valores os indices e uma array completa se quisermos
nomes.forEach(function (elemento, indice, array){console.log(elemento,indice, array)});

// For classico - geralmente com iteraveis (arrays ou strings)
// For in - Retorna indice ou chave (strings, arrays ou objetos)
// for of - Retorna o valor em si (iteraveis, arrays ou strings)