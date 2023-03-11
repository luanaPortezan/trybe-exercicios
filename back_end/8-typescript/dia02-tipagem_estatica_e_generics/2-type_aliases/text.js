// Type Aliases
// Type Aliases (apelidos de tipos) são utilizados para declarar a forma de um objeto nomeando o tipo, o que nos permite usar o mesmo tipo mais de uma vez e nos referir a ele através de um único nome. Um type alias é exatamente isso: um nome para qualquer tipo.

// Para criar um type alias utilizamos a seguinte sintaxe:

// Copiar
// type Point = {
//   x: number;
//   y: number;
// };


// function printCoord(pt: Point) {
//   console.log("O valor da coordenada x é: " + pt.x);
//   console.log("O valor da coordenada y é: " + pt.y);
// }

// printCoord({ x: 100, y: 100 });
// //saída:
// //O valor da coordenada x é: 100
// //O valor da coordenada y é: 100
// Podemos dar um nome a qualquer tipo não apenas a um tipo de objeto.

// Exercício Type Aliases
// Crie um type para um objeto que represente um pássaro.
// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
// Crie um type para um objeto que represente um endereço.
// Type Unions
// Type Unions (união de tipos) é uma forma de declarar que um objeto é um tipo formado a partir de dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos. Para isso, é preciso declarar os tipos esperados separados por barra vertical (|) conhecido em inglês como pipe.

// Copiar
// // A função abaixo pode receber tanto um número
// // quanto uma string.
// function imprimirCPF(cpf: number | string){
//   console.log("Seu CPF é: " + cpf);
// }

// imprimirCPF(11111111111);
// // Saída:
// // Seu CPF é: 11111111111
// imprimirCPF('111.111.111-11');
// // Saída:
// // Seu CPF é: 111.111.111-11
// Exercício Type Unions
// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
// Crie um type union que represente as vogais do alfabeto.