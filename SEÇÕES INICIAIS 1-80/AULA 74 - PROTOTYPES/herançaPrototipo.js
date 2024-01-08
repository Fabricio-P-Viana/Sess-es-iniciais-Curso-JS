// Produto -> aumento, desconto
// camiseta, caneca
// produto - todos são produtos
// camiseta = cor, caneca = material

function Produto(nome, preço) {
    this.nome = nome;
    this.preço = preço;
}

Produto.prototype.aumento = function (quantia) {
    this.preço += quantia;
};

Produto.prototype.aumento = function (quantia) {
    this.preço -= quantia;
};

function Camiseta(nome, preço, cor) {
    Produto.call(this,nome, preço); // linkando com a produto
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
// definindo o prototype da Camiseta para o prototype de Produto
Camiseta.prototype.constructor = Camiseta; 
// o construtor mudou para o Produto para mudar de volta para o construtor desejado usar esta função

//=========================================================================

function Caneca(nome,preço, material, estoque) {
    Produto.call(this,nome, preço);
    this.material = material;
    
    Object.defineProperty(this,"estoque",{
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== "number") return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca; 


const caneca = new Caneca("caneca",13,"plastico",5);