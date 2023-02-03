// // // console.log('Hello, world!');

// ---------------------------------

// // const readline = require('readline-sync');

// const name = readline.question('Qual seu nome? ');
// const age = readline.questionInt('Qual sua idade? ');

// // console.log('Hello, world!');

// ---------------------------------

const readline = require('readline-sync');

const name = readline.question('What is your name? ');
const age = readline.questionInt('How old are you? '); // a função questionInt converte a resposta para número utilizando o parseInt e retorna um erro caso a pessoa tente inserir algo que não seja um número válido.

console.log(`Hello, ${name}! You are ${age} years old!`);

// ---------------------------------