const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function CriaHoraSegundos(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString("pt-BR",{
        hour12: false,
        timeZone: "UTC"
    });
}

function iniciarRelogio(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = CriaHoraSegundos(segundos);
    }, 1000);
};

document.addEventListener("click", function(e){ // para não precisar buscar cada evento individualmente podemos
// capturar todos os eventos usando document e e.target para saber qual o evento ocorreu e IF para os eventos
// que queremos fazer funçoes
    const el = e.target;

    if(el.classList.contains("zerar")){
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        relogio.classList.remove("pausado");
        segundos = 0;
    }

    if(el.classList.contains("iniciar")){ // formato para verificar se o evento é igual a "iniciar"
        relogio.classList.remove("pausado");
        clearInterval(timer);
        iniciarRelogio();
    }

    if(el.classList.contains("pausar")){
        relogio.classList.add("pausado");
        clearInterval(timer);
    }
});

