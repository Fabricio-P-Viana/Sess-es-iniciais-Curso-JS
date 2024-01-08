
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = getMesTexto(data.getMonth()); // começa em 0 os meses
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const diaSemana = getDiaSemanaTexto(data.getDay());

    return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
}

function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
    return diasSemana[diaSemana];
}

function getMesTexto(mes){
    const mesesAno = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return mesesAno[mes];
}

function criaP(){
    const p = document.createElement("p"); // criando um novo elemento HTML
    return p
}

function setResultado(msg){
    const resultado = document.querySelector("#resultado"); // indicando onde no HTML se localiza o resultado
    resultado.innerHTML = "";

    const p = criaP(); // criando um novo elemento HTML

    p.innerHTML = msg; // definindo seu valor
    resultado.appendChild(p); //adicionando o paragrafo dentro do id = resultado

}

const dataAtual = Date.now();
const data = new Date(dataAtual);
const msg = formataData(data);
setResultado(msg);


//melhor solução
//const h1 = document.QuerySelector(".container h1");
//const data = new Date();
//h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: "full", timeStyle: "short"});
