
function random(min,max){
    const r = Math.random()*(max-min)+min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min,max);

do{ // executa primeiro
    rand = random(min,max);
    console.log(rand);
} while(rand !== 10); // depois ve se a condição é verdadeira