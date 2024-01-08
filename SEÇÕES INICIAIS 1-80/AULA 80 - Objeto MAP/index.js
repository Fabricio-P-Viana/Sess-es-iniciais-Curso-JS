const pessoas = [
    {id: 3, nome:"Luiz"},
    {id: 2, nome:"Maria"},
    {id: 1, nome:"Helena"},
]; // estrutura de dados

//const novasPessoas = {};
//for (const pessoa of pessoas){
//    const {id} = pessoa;
//    novasPessoas[id] = {...pessoa};
//}

const novasPessoas = new Map(); // instanciando map
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa}); // para setar a chave e o valor
}

console.log(novasPessoas.get(2)); // pegando valores no map get

for (const [identifier,{id,nome}] of novasPessoas){
    console.log(identifier, id, nome);
}