// return - retorna um valor

function soma(a,b) {
    return a+b;
}
soma();

function falaFrase(comeco) {
    function falaResto(resto) {
       return comeco+" "+resto; 
    }
    return falaResto;
}

const fala = falaFrase("Ola");
const resto = fala("Mundo");
console.log(resto);


