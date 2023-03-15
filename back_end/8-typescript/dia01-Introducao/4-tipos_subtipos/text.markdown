------------ Tipos e Subtipos ------------

Vamos falar um pouco mais sobre o grande recurso do TypeScript em relação ao JavaScript: os tipos.

Em TypeScript, todos os tipos são subtipos de um tipo principal chamado any, e este é um tipo que pode representar qualquer valor em JavaScript. Os demais tipos são os tipos primitivos, tipos de objeto ou parâmetros de tipo.

Imagem que demonstra a divisão de tipos na linguagem TypeScript
Imagem que demonstra a divisão de tipos na linguagem TypeScript
Tipos primitivos:
Hoje nós vamos focar em alguns dos tipos primitivos, que são os tipos boolean, number, string, void, null e undefined.

boolean: recebe verdadeiro (true) ou falso (false)

Copiar
let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é booleano e o valor é true
let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é booleano e o valor é false
number: recebe valores numéricos e, assim como no JavaScript, todos são valores de ponto flutuante.

Copiar
// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x: number;

let y: number = 0;
let z: number = 123.456;
string: recebe uma sequência de caracteres armazenados como unidades de código UTF-16 Unicode.

Copiar
let s: string;
let empty: string = "";
let abc: string = 'abc';
void: existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado.

Copiar
function sayHelloWorld(): void {
  console.log("Hello World!");
}
null e undefined: são subtipos de todos os outros tipos.

Copiar
let nullValue = null;
let undefinedValue = undefined;


------------ Exemplo de declaração de variáveis utilizando inferência de tipo ------------


Como visto anteriormente, podemos utilizar a inferência de tipo no TypeScript. É possível declarar uma variável sem especificarmos explicitamente o tipo e o compilador fará a inferência do tipo por meio do valor definido para a variável. Vamos verificar isso no site do Playground TypeScript. Após digitar o código abaixo, clique no botão Run e, ao término da execução, será exibido o resultado na guia Logs.

Copiar
let flag = true; // o compilador irá inferir o tipo boolean
console.log('O tipo de "flag" é:', typeof flag);

const numberPI = 3.1416; // o compilador irá inferir o tipo number
console.log('O tipo de "numberPI" é:', typeof numberPI);

let message = "Hello World!"; // o compilador irá inferir o tipo string
console.log('O tipo de "message" é:', typeof message);
A imagem abaixo apresenta o resultado esperado.

Verificação de tipos no site TypeScript Playground
Verificação de tipos no site TypeScript Playground