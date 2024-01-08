function retornaFucao() {
    const nome = "Fabricio";
    return function () {
        return nome;
    };
}

const funcao = retornaFucao();
console.log(funcao);

// closure = a capacidade de acessar seu escopo e os outros escopos ate o escopo global
