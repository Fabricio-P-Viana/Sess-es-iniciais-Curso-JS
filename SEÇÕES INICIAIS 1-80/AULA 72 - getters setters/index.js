// protegendo minhas informações
// get obtem
function Produto(nome,preço,estoque) {
    this.nome = nome;
    this.preço = preço;


    Object.defineProperty(this, "estoque",{ 
        enumerable: true, 
        //value: estoque, // se for utilizar getters e setters não precisa
        //writable: false, 
        configurable: true,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== "number"){
                console.log("valor invalido"); // validação
                return;
            }
            estoque = valor;
        }
    });
}

const p1 = new Produto("camiseta",20,3);
p1.estoque = 20;
console.log(p1.estoque);

console.log("###################################");

// em factory function

function criaProdutto(nome) {
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}
const p2 = criaProdutto("camiseta");
p2.nome = "qualquer coisa"; // setter 
console.log(p2.nome); // getter