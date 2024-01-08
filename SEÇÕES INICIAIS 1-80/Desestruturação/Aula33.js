
// DESESTRUTURAÇÃO VIA OBJETOS

const pessoa = {
    nome: "Fabricio",
    sobrenome: "Pereira",
    idade: 20,
    endereço: {
        rua: "Avenida Brasil",
        numero: 320
    }
};

console.log(pessoa.nome); // forma tradicional

//       || renomeando   || valores padrões(Caso não exista)
//       VV variaveis    VV
const {nome: n = "não existe", sobrenome, idade} = pessoa; // atribuição via desestruturação
console.log(n, sobrenome, idade);

// objeto dentro de outro
const {endereço:{rua, numero}, endereço} = pessoa;
console.log(rua,numero, endereço);

// resto mesma sintax de array
const {nome: nome2, ...resto} = pessoa;
console.log(resto);
