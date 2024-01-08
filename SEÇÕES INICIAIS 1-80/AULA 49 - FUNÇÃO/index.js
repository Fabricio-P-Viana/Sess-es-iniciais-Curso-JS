// declaração de função (function hoisting)

falaOi(); // funciona em qualquer posição embaixo ou em cima da declaração da função

function falaOi() {
    console.log("oie");
};

// first-class objects (objeto de primeira classe)
// function expression
// podemos tratar uma função como um dado
const souUmDado = function () { // variavel recebe função
    console.log("sou um dado.");
};

function executaFunção(funcao){ // função com parametro
    funcao();
};
executaFunção(souUmDado);

// Arrow function
const funcaoArrow = () =>{
    console.log("sou uma arrow function");
};
funcaoArrow();

// dentro de um objeto posso ter uma função
const obj = {
    falar(){
        console.log("Estou falando..");
    }
};
obj.falar();