let lines = gets().split("\n");
let line = lines.shift().split(' ');

//continue o seu código aqui
//lados
let n = parseInt(line[0]);
//comprimento
let l = parseInt(line[1]);
//perímetro
let perimetro = n * l;
console.log(perimetro);