// Pegando o formulario que sera tratado
const form = document.querySelector("#form");

// capturando evento e evitando de o formulario ser enviado
form.addEventListener("submit",function(e){ 

// primeiro item é qual evento ele quer capturar e segundo é a função que sera executado caso esse evento ocorra

    e.preventDefault(); // função espeficica para previnir

    const inputPeso = e.target.querySelector("#peso"); // target pega o elemento que esta recebendo este evento
    const inputAltura = e.target.querySelector("#altura"); // target pega o elemento que esta recebendo este evento

    const peso = Number(inputPeso.value) // definindo a variavel como numero
    const altura = Number(inputAltura.value) // definindo a variavel como numero

    if (!peso){
        setResultado("Peso invalido", false); // validando valores
        return;
    } 
    if (!altura){
        setResultado("Altura invalido", false); // validando valores
        return;
    } 
    
    const imc = getImc(peso,altura); // função calcula imc
    const NivelImc = getNivelImc(imc); // função verifica nivel do imc

    const msg = `Seu IMC é: ${imc} (${NivelImc})`; // usando crase é possivel fazer referencia a variaveis (${})

    setResultado(msg, true); // definindo mensagem e cor de fundo
});


function criaP(){
    const p = document.createElement("p"); // criando um novo elemento HTML
    return p
}

function setResultado(msg, isValid){
    const resultado = document.querySelector("#resultado"); // indicando onde no HTML se localiza o resultado
    resultado.innerHTML = "";

    const p = criaP(); // criando um novo elemento HTML

    if (isValid) { // validando a cor de traz do resultado e dewfinindo sua classe
        p.classList.add("paragrafo-resultado"); // verde se der certo
    } else{
        p.classList.add("paragrafo-erro"); // vermelho para se der errado
    }

    p.innerHTML = msg; // definindo seu valor
    resultado.appendChild(p); //adicionando o paragrafo dentro do id = resultado

};

function getImc(peso,altura){
    const imc = peso / altura**2;
    return imc.toFixed(2); // definido duas casas decimais
}

function getNivelImc(imc){
    const nivel = ["Abaixo do peso","peso normal","sobrePeso","Obesidade grau 1","Obesidade grau 2","Obesidade grau 3"];

    if (imc >= 39.9) return nivel[5]; // em IFs pequenos podemos deixar de usar as chaves
    if (imc >= 34.9) return nivel[4]; // logica reversa evita usar (else if)
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc <  18.5) return nivel[0];
}

