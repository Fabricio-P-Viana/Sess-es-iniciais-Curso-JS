const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2, [7,8,9], "Fabricio"); // CONCAT
console.log(a3);

// spread
const a4 = [...a1,...a2,"Fabricio", ...[7,8,9]]; // rest 
console.log(a4);
// funciona para objetos tambem