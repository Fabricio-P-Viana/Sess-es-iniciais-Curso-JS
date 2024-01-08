// new Object -> Object.prototype

const objA = { //  objA -> Object.prototype
    chaveA: "A"
    // __proto__: Object.prototype
};

const objB = { //  objB -> Object.prototype
    chaveB: "B"
    // __proto__: Object.prototype
};

Object.setPrototypeOf(objB, objA); // é possivel alterar quem é o __proto__
// (objeto que ira receber a alteração, objeto que sera definido como proto)
// depois desta alteração a engine do JS vai procurar nesta seguinte ordem
//  objB -> objB.objA -> Object.prototype

console.log(objB.chaveA);

Object.getPrototypeOf(objA); // evite usar __proto__
// mostra todas as funçoes do proto para não alterar

//==========================================================================

function Produto(nome,preço) { // é recomendado colocar metodos fora de funçoes construtoras
    this.nome = nome;           // VVV fazer função no prototype VVV
    this.preço = preço;
};

Produto.prototype.desconto = function (percentual) { // função no protype
    this.preço = this.preço - (this.preço*(percentual/100));
};

Produto.prototype.aumento = function (percentual) { // função no protype
    this.preço = this.preço + (this.preço*(percentual/100));
};

const p1 = new Produto("camiseta",50);
// p1.desconto(100); = 0
// p1.aumento(50); = 75

//====================================================
// setando prototype na instanciação

const p3 = Object.create(Produto.prototype,{
    preço: {
        writable: true,
        configurable: true, // pode ja configurar as chaves e dar valores
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
}); 
p3.aumento(10);
console.log(p3);
// (Object.prototype) = {} pode receber objeto literal 
