// Parte II

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.



// 1-  Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Com base nessas informações:
// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
// Dentro da função crie uma variável result.
// Crie a lógica para retornar o fatorial de N!.
// Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).
// Dica: Armazene a chamada da função em uma varíavel para imprimir no terminal seu resultado.

const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
};

const print = factorial(number); //Lembre-se de alterar o valor de number!

console.log(`Esse é o fatorial ${print}`);

// Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const factorial1 = number => {
  // if(number > 1){
  //   return number * factorial1(number - 1);
  // }else{
  //   return 1;
  // }
  number > 1 ? number * factorial1(number - 1) : 1;
}

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
  console.log(factorial(4));

// 2- Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
// Exemplo:

      longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// Dica: Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().



// 🚀 3 - Crie uma página HTML que possua um contador de cliques.
// Além da estrutura básica do HTML, sua página deve possuir:
// Uma tag que receberá o valor atualizado da quantidade de clicks do botão.
// Um botão com o texto click aqui!, que receberá um event listener do tipo click;
// Na estrutura do script (dentro do HTML ou em um arquivo de JavaScript ):
// Crie uma variável clickCount que irá acumular o número de clicks do botão;
// Crie a lógica do evento, para que a cada click no botão seja adicionado o valor de 1. Exemplo: Caso não tenha sido realizado nenhum click, o valor renderizado será de 0. Caso o botão seja clicado 5 vezes o valor renderizado no HTML será de 5.
// Dica: Nesse exercício utilize document. getElementById para retornar o elemento do DOM que deseja.



// 🚀 4 - Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals

// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'
// Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// O nome da função deverá ser minhasSkills;
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.

// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS
