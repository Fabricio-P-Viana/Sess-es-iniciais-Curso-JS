
// FOR IN EM LISTAS
const frutas = ["Pera","Maçã","Uva"];

for (let index in frutas){
    console.log(frutas[index]);
};

// FOR IN EM OBJETOS
const pessoa ={
    nome: "Fabricio",
    sobrenome: "Viana",
    idade: 20
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
};

