// construtora -> molde
function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomecompleto = () =>  "EU SOBREESCREVO O PROTOTYPE" ; // se existirem duas funções com o mesmo 
    //nome o quanto mais perto do do objeto até o topo
}

// instancia
const pessoa1 = new Pessoa("Fabricio","Pereira"); // <- pessoa = função construtora
const pessoa2 = new Pessoa("Vitor","Pereira");

// 

console.log(pessoa1,pessoa2);

/*
JavaScript é baseado em prototipos para passar propriedades e metodos de um objetivo
para o outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde
para futuras produções.
todos os objetos tem sua referencia interna para um prototipo(__proto__)
que vem da propriedade prototype da função construtora que foi usada para cria-lo.

Pessoa.prototype === pessoa1.__proto__;

quando tentamos acessar um membro no proprio objeto, primeiro o motor do JS vai tentar
encotrar este membro no proprio objeto e depois a cadeia de prototipos é usada até o topo (null)
até encotrar(ou não) tal membro.

cadeia de busca = pessoa1 -> Pessoa.prototype -> Object.prototype
                    1            2                  3
*/

Pessoa.prototype.estouAqui = "eu sou uma função"; // cria uma função dentro do __proto__, isso ajuda 
// em performance criando uma função para todas instancias


Pessoa.prototype.nomecompleto = () => this.nome + " " + this.sobrenome; // função global