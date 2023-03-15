Primeiro programa em TypeScript
Agora, escreveremos nosso primeiro programa utilizando o TypeScript. Criaremos um módulo para calcular as áreas e perímetros de figuras geométricas.

Obs: No final da página, há um vídeo resumindo o que vimos até agora e demonstrando, na prática, algumas funcionalidades.

Configuração
Crie um diretório chamado exercises. Nele, vamos inicializar nosso projeto TypeScript.

Copiar
mkdir exercises && cd exercises
A seguir, vamos inicializar nosso projeto Node, instalar o TypeScript, o módulo npm com a configuração base do TSConfig para o Node 16 (ou superior) e criar nosso tsconfig.json.

Copiar
npm init -y
Copiar
npm install -D typescript@4.4 @tsconfig/node16@1.0
Copiar
touch tsconfig.json
Copiar
// ./tsconfig.json
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
Por fim, vamos instalar o pacote npm com as definições de tipos para o Node.js.

Copiar
npm install -D @types/node@16.11
Em seguida, vamos criar dois arquivos: um chamado index.ts, que usaremos para testar o nosso módulo, e um chamado exercises.ts, onde faremos a implementação do nosso módulo com algumas funções.

Copiar
touch index.ts && touch exercises.ts
Implementação
Agora que já está tudo configurado, iniciaremos a implementação das funções. Primeiro, desenvolveremos uma função para calcular a área de um quadrado. A fórmula para o cálculo é elevar a medida de qualquer um dos lados ao quadrado. A = s²

Área do quadrado
Fórmula da Área de um Quadrado
Copiar
// ./exercises.ts

export function getSquareArea(side: number): number {
  return side ** 2;
}
A segunda função calculará a área de um retângulo. A fórmula para o cálculo é multiplicar a medida da base pela medida da altura. A = b * h

Área do retângulo
Fórmula da Área de um Retângulo
Copiar
// ./exercises.ts

// export function getSquareArea(side: number): number {
//   return side ** 2;
// }

export function getRectangleArea(base: number, height: number): number {
  return base * height;
}
A terceira calculará a área de um triângulo. A fórmula consiste em multiplicar a medida da base pela medida da altura e dividir o resultado pela metade. A = (b * h) / 2

Área do triângulo
Fórmula da Área de um Triângulo
Copiar
// ./exercises.ts

// export function getSquareArea(side: number): number {
//   return side ** 2;
// }

// export function getRectangleArea(base: number, height: number): number {
//   return base * height;
// }

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}
Já a quarta função, será responsável por calcular o perímetro de um polígono. Um polígono é uma forma geométrica fechada que possui lados retos. Por exemplo: triângulos, retângulos, quadrados, trapézios, hexágonos, entre outros. A fórmula para o cálculo consiste em somar a medida de todos os lados. P = a + b + c + d + e + f ...

Perímetro de um polígono
Fórmula do Perímetro de um Polígono
Copiar
// ./exercises.ts

// export function getSquareArea(side: number): number {
//   return side ** 2;
// }

// export function getRectangleArea(base: number, height: number): number {
//   return base * height;
// }

// export function getTriangleArea(base: number, height: number): number {
//   return (base * height) / 2;
// }

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}
Para termos um exemplo com retorno de tipos diferentes. Nossa última função será responsável por verificar se um triângulo é válido com base na medida de seus lados e deve retornar um valor booleano (true ou false). Para que um triângulo exista, um de seus lados deve ser maior que a diferença absoluta entre os outros dois e menor que a soma deles. Caso queira entender melhor, consulte este artigo do Mundo Educação.

Copiar
// ./exercises.ts

// export function getSquareArea(side: number): number {
//   return side ** 2;
// }

// export function getRectangleArea(base: number, height: number): number {
//   return base * height;
// }

// export function getTriangleArea(base: number, height: number): number {
//   return (base * height) / 2;
// }

// export function getPolygonPerimeter(sides: number[]): number {
//   return sides.reduce((acc, side) => acc + side, 0);
// }

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}
Utilizando as funções
Pronto. Agora, vamos fazer algumas chamadas a este módulo no arquivo index.ts.

Copiar
// ./index.ts

import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(30, 30, 30)}`);
Em seguida, vamos compilar o nosso programa:

Copiar
npx tsc
Nossos arquivos JavaScript foram gerados dentro do diretório dist. Agora, basta rodar o nosso programa compilado utilizando o Node.

Copiar
node ./dist/index.js
A saída esperada é:

Copiar
A ÁREA DE UM:
- Quadrado de lado 10cm: 100cm²
- Quadrado de lado 5cm: 25cm²
- Quadrado de lado 100cm: 10000cm²
- Retângulo de base 10cm e altura 25cm: 250cm² 
- Retângulo de base 5cm e altura 30cm: 150cm²
- Retângulo de base 200cm e altura 100cm: 20000cm² 
- Triângulo de base 10cm e altura 25cm: 125cm²
- Triângulo de base 5cm e altura 30cm: 75cm²
- Triângulo de base 100cm e altura 200cm: 10000cm²

O PERÍMETRO DE UM:
- Quadrado de lado 10cm: 40cm
- Retângulo de base 10cm e altura 25cm: 70cm
- Triângulo cujos lados tem 10cm cada: 30cm 

VERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:
- 10cm, 5cm e 3cm: false
- 10cm, 5cm e 3cm: true 
- 10cm, 5cm e 3cm: true 
Antes de continuar para os exercícios, assista o vídeo a seguir.


Para fixar
E agora, o que acha de colocar a mão na massa e incrementar mais esse nosso módulo de cálculo de área de figuras geométricas?

Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. A = (D * d) / 2
Área do Losango
Fórmula da Área de um Losango
Calcule a área de um losango que tem D = 32cm e d = 18cm;
Calcule a área de um losango que tem D = 200cm e d = 50cm;
Calcule a área de um losango que tem D = 75cm e d = 25cm.
Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. A = [(B + b) * h] / 2
Área do Trapézio
Fórmula da Área de um Trapézio
Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm;
Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm;
Calcule a área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm.
Crie uma nova função para calcular a área de um círculo. A área do círculo de raio r é calculada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14). A = ℼ * r². Dica: você pode acessar o valor de ℼ utilizando o módulo nativo Math.PI.
Área do Círculo
Fórmula da Área de um Círculo
Calcule a área de um círculo de raio igual 25cm;
Calcule a área de um círculo de raio igual 100cm;
Calcule a área de um círculo de raio igual 12,5cm.