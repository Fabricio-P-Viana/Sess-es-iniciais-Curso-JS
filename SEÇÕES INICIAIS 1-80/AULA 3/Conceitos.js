const numero = Number(prompt("Digite o numero: "));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Seu numero +2:  ${numero+2}</p>`;

const array = [1,2,3];

//forma moderna de fazer função - AULA 31 FUNÇOES
const função =(n) =>{ };

//============================================

const pessoa1 = {
    nome: "Fabricio",
    sobrenome:"Viana",
    Idade:'20',
    fala() {
        console.log(`${this.nome} : esta falando oi` )
    }
};

// colchetes == array
// chaves == objeto

pessoa1.nome; // acessando valores

//===========================================

function criarPessoa(nome,sobrenome,idade){
    return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
    };
};
const pessoa2 = criarPessoa("maria","viana","35")