const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
        }
};
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
        }
};

const pessoaPrototype = {...falar,...comer};

function criaPessoa(nome,sobrenome) {
    
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
const p1 = criaPessoa("Fabricio", "viana");
p1.falar();