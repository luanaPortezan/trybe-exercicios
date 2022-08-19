// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// Solução:
// Primeiro Passo
// Vamos criar uma callback que verifica se os números são os mesmos.

// const numberChecker = (myNumber, number) => myNumber === number;

// Segundo Passo
// Vamos começar a trabalhar em nossa HOF, iniciando pelo gerador do número aleatório.

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = () => {
//   const number = Math.floor((Math.random() * 5) + 1);
// };

// Terceiro Passo
// Vamos utilizar nossa callback, já temos o parâmetro number dentro do escopo da função. Precisamos só dizer à Hof que ela receberá por parâmetro nossa callback e também o número escolhido.

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//     return callback(myNumber, number)
// };

// Quarto Passo
// Nossa função já retorna casos verdadeiros e falsos, vamos atribuir nossas mensagens à esses cenários e retorná-las.

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

// Se você por acaso não comprendeu a sintaxe com ? e : não se preocupe. Este tipo de validação é conhecido como "operador ternário" e é uma alternativa para se realizar uma validação if, else onde ? é equivalente ao if e : ao else. Desta forma, o que está acontecendo é: O retorno da função numberChecker é verdadeiro ? se sim retorne 'Lucky day, you won!', se não :, retorne 'Try Again!'.