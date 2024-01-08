const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros){

    if (numero === 2){
        console.log("pulei o numero 2");
        continue; // ela vai para o proximo ciclo sem executar mais nada do ciclo atual
    }
    if (numero === 7){
        console.log("7 encotrado, saindo...");
        break; // sai da estrutura de repetição
    }
    console.log(numero);
}