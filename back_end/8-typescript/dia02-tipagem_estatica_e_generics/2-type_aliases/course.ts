type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
  console.log("O valor da coordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da coordenada x é: 100
//O valor da coordenada y é: 100

// Exercício Type Aliases
// Crie um type para um objeto que represente um pássaro.
// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
// Crie um type para um objeto que represente um endereço.

type Bird = {
  assas: 'string';
  bico: 'string';
};