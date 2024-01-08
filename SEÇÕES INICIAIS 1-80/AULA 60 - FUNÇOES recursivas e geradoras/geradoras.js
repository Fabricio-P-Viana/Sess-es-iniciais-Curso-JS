// retorna em sequencia cada vez que é chamado

function* geradora1() {
    // codigo qualquer
    yield "valor 1";
    // codigo qualquer
    yield "valor 2";
    // codigo qualquer
    yield "valor 3";
}
const g1 = geradora1();
console.log(g1.next()); // { value: 'valor 1', done: false }
console.log(g1.next()); // { value: 'valor 2', done: false }
console.log(g1.next()); // { value: 'valor 3', done: true }
// console.log(g1.next().value); retorna so valor 

//====================================

function* geradora2() { // gerador infinito
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//======================================

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4() {
    yield* geradora3(); // delegando que outra geradora faça parte do trabalho e quando 
    // acabar volta para ca para continuar
    yield 3;
    yield 4;
}
const g4 = geradora4();
for (let valor of g4){
    console.log(valor);
};

// dentro do yield pode ter funçoes
// o return retorna e faz com que as funções geradoras parem por ali eliminando as inferiores dela