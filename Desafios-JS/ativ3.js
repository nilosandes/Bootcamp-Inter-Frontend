let lines = gets().split("\n");

let n = parseInt(lines.shift());
//escreva o seu código aqui
const citacao = "LIFE IS NOT A PROBLEM TO BE SOLVED"
function contador(n){
  let saida = "";
  for (i = 0; i<citacao.length; i++){
    if(i < n){
      saida = saida + citacao[i];
    }
  }
  console.log(saida);
}
contador(n);