// função construtora retorna objetos
// construtora -> iniciar com letra maiuscula Pessoa (new)

function Pessoa(nome,sobrenome) {
    // const variavel ou metodo que não esta disponivel para acesso
    
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// sempre usar new em funções construtora
const p1 = new Pessoa("fabricio","viana");
