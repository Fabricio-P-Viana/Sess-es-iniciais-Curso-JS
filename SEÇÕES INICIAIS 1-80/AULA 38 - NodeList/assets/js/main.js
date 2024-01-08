const paragrafos = document.querySelector(".paragrafos");

const ps = paragrafos.querySelectorAll("p"); // seleciona todos os paragrafos e cria uma NODELIST

const estiloBody = getComputedStyle(document.body); // pega estilos de css no elemento selecionado(body)
const backgroudColorBody = estiloBody.backgroundColor; // selecionando a cor do background

for (let p of ps){ // passando por todos os paragrafos
    p.style.backgroundColor = backgroudColorBody; // mudando as cores dos paragrafos
    p.style.color = "White"; // texto em cor branca
}