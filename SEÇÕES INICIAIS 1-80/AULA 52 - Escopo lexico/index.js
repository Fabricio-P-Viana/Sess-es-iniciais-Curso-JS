// escopo lexico busca pela indetação até a indentação global

const nome = "fabricio";

function falaNome() {
    console.log(nome);
}
falaNome();

function usaFalanome() {
    falaNome();
}
usaFalanome();