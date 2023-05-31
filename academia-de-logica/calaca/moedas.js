// O problema pode ser descrito da seguinte forma:
// dado um conjunto de denominação de moedas e uma quantia alvo de dinheiro, encontre o número mínimo de moedas necessárias para perfazer essa quantia.
// Por exemplo: se as denominações das moedas forem 1, 5, 10 e 25 centavos, e o valor alvo por 67 centavos, o número mínimo de moedas necessárias para perfazer esse valor é 6 (duas de 25 centavos, uma de 10 centavos, uma de 5 centavos e duas de 1 centavo). 
// Retorne um array como output contendo as moedas.

function encontrarMoedas(valor, moedas){
  const order = moedas.sort((a,b) => {a-b});

  let resultado = [];

  for(let index = 0; index < moedas.length; index++){ 
    while(valor >= moedas[index]){ // o mínimo
      valor -= moedas[index]; 
      resultado.push(moedas[index]);
    }
  }
  return resultado;
};

const valor = 101;
const moedas = [100, 50, 25, 10, 5, 1];
const resultado = encontrarMoedas(valor, moedas);
console.log(resultado);