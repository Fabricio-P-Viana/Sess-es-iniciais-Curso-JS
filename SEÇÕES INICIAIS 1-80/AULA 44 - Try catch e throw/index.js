
function soma(x,y){
    if (typeof x !== "number" || typeof y !== "number"){
        throw new Error("x e y precisam ser numeros"); // definindo o erro
    }
    return x+y;
}

try{
    console.log(soma("1",2));
} catch(e){
    //console.log(e); // pegando o erro

}
// ============================================

try{
    // é usado quando não há erros

} catch(e){
    // é executado quando há erros

} finally {
    // sempre executado

}