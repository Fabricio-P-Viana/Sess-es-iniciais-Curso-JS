// object.defineProperty - define uma variavel que não pode ser mudada

function Produto(nome,preço,estoque) {
    this.nome = nome;
    this.preço = preço;
    Object.defineProperty(this, "estoque",{ // this , qual chave , modificações
        enumerable: true, // mostra a chave( caso esteja falso object.keys não mostrara a cahve selecionada)
        value: estoque, // é o valor
        writable: false, // posso alterar o valor?
        configurable: true // pode apagar ou modificar a chave ou valor?
        // configuravel? se for true pode fazer outra função de defineProperty()
    });
}

const p1 = new Produto("camiseta",20,3);
console.log(p1);

console.log(Object.keys(p1)); // array das chaves do objeto

//===========================================================================

// object.defineProperties - define varias variaveis imutaveis

function Produto(nome,preço,estoque) {
    Object.defineProperty(this, "estoque",{
        enumerable: true, // mostra a chave( caso esteja falso object.keys não mostrara a cahve selecionada)
        value: estoque, // é o valor
        writable: false, // posso alterar o valor?
        configurable: true // pode apagar ou modificar a chave ou valor?
        // configuravel? se for true pode fazer outra função de defineProperty()
    });

    Object.defineProperties(this,{ 
        nome: {
            enumerable: true, // mostra a chave( caso esteja falso object.keys não mostrara a cahve selecionada)
            value: nome, // é o valor
            writable: true, // posso alterar o valor?
            configurable: true // pode apagar ou modificar a chave ou valor?
            // configuravel? se for true pode fazer outra função de defineProperty()
        },
        preço: {
            enumerable: true, // mostra a chave( caso esteja falso object.keys não mostrara a cahve selecionada)
            value: preço, // é o valor
            writable: true, // posso alterar o valor?
            configurable: true // pode apagar ou modificar a chave ou valor?
            // configuravel? se for true pode fazer outra função de defineProperty()
        },
    });
}