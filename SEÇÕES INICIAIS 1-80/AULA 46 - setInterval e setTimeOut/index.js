function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString("pt-BR",{hour12: false});
}



const timer = setInterval(function(){ // intervalo de execução (tempo é em milisegundos)
    console.log(mostraHora());
},1000);

setTimeout(function(){ // so executa uma vez
    clearInterval(timer); // limpa o setinterval(para)
}, 10000);

setTimeout(() => {
    console.log("Ola mundo");
}, 3000);