// Parte III - arrow functions

// Você já está craque em declarar funções em JavaScript utilizando a seguinte sintaxe:

const printName = function () {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

// A expressão acima está correta. Mas como você verá nos exemplos a seguir, é possível deixá-la ainda mais direta e léxica. Você aprenderá com alguns exemplos as vantagens de usarmos mais essa novidade do Javascript ES6 - arrow functions. Uma das aplicações para arrow functions é em funções anônimas. Em Javascript, é muito comum não precisarmos nomear funções, como mostrado no exemplo acima. Isso pode acontecer quando criamos funções que não serão reutilizadas, ou que serão passadas como argumento para uma outra função. Chamamos funções sem um nome específico de funções anônimas.
// Primeiramente, assista ao vídeo a seguir.

// arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function:

const printMyName = () => {
  const myName = 'Luana';
  return myName;
};

console.log(printMyName());

// Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:

const printYourName = () => 'Lua';
console.log(printYourName());

// Mas lembre-se que podemos omitir os parênteses apenas em um cenário:
// Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));