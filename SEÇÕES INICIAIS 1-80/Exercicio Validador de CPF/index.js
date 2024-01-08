
let multiplcador = 10;
let cpf = "520.016.558-00";
let cpfLimpo = cpf.replace(/\D+/g,"");
cpfArray = Array.from(cpfLimpo).splice(0,9);
// primeiro digito

let primeiroNum = cpfArray.reduce((ac,val) => {
    ac = ac + Number(val)*multiplcador;
    multiplcador-=1;
    return ac;
},0);
/*
X 10    9   8   7   6    5   4    3    2     
  5     2   0   0   1    6   5    5    8
  50 + 18 + 0 + 0 + 6 + 30 + 20 + 15 + 18 = 155

*/
// 11 -(PrimeiroNum % 11) == Primeiro digito depois do - 
let valorPrimeiroDigito = 11-(primeiroNum % 11) > 9 ? 0 : 11-(primeiroNum % 11);

cpfArray.push(`${valorPrimeiroDigito}`);
multiplcador = 11;

let segundoNum = cpfArray.reduce((ac,val) =>{
  ac = ac + Number(val)*multiplcador;
    multiplcador-=1;
    return ac;
},0);
/*
X 11   10    9   8   7    6    5   4    3    2     
  5    2     0   0   1    6   5    5    8    0
  55 + 20  + 0 + 0 + 7 + 36 + 25 + 20 + 24 + 0 =

*/
// 11 -(segundoNum % 11) == Segundo digito depois do - 
let valorSegundoDigito = 11-(segundoNum % 11) > 9 ? 0 : 11-(segundoNum % 11);
cpfArray.push(`${valorSegundoDigito}`);
let validadorCpf = cpfArray.join("") ===  cpfLimpo ? console.log("o CPF é Valido") : console.log("o CPF não é Valido");