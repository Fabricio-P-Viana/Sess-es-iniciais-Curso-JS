// function tem variavel especial que sustenta todos os argumentos enviados
// arguments é semelhante a um array
function funcao(a,b) { // mesmo sem parametros ele recebe de forma indireta
    let total = 0;
    for (argumento of arguments){
        total += argumento;
    }
    console.log(total,a,b);
}
funcao(1,22,34,5,3);

// definindo valores padrões caso n tenha entrada de todos os parametros

function somar(a = 0,b = 0, c = 0){
    console.log(a + b + c);
}
somar(2, undefined, 4); // se precisar usar o valor padrão preciso enviar undefined

function seuNome({nome,sobrenome,idade}) { // desestruturação objetos e arrays
    console.log(nome,sobrenome,idade);
}
seuNome({
    nome: "Fabricio",
    sobrenome: "Pereira",
    idade: 20
});


const conta = function conta(operador,acumulador, ...numeros) { // rest operador(numeros)
    for(let numero of numeros){
        console.log(numero);
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(operador,acumulador,numeros); 

};
conta("+",0,20,30,40,50);