let lines = gets().split("\n");

let line = lines.shift().split(' ');
//escreva aqui o seu código
let p1 = parseInt(line[0]);
let p2 = parseInt(line[1]);
let p3 = parseInt(line[2]);
let p4 = parseInt(line[3]);

let result = p1 + p2 + p3 + p4 - 3

console.log(result)