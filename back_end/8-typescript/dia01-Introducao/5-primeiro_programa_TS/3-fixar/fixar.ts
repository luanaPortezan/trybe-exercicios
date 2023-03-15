// 1 - Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. A = (D * d) / 2
// Calcule a área de um losango que tem D = 32cm e d = 18cm;
// Calcule a área de um losango que tem D = 200cm e d = 50cm;
// Calcule a área de um losango que tem D = 75cm e d = 25cm.

export function getLosangoArea(diagonalMaior: number, diagonalMenor: number): number {
  return (diagonalMaior * diagonalMenor) / 2
 };
 
 // 2 - Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. A = [(B + b) * h] / 2
 // Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm;
 // Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm;
 // Calcule a área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm.
 
 export function getTrapezioArea(B: number, b: number, h: number): number {
  return ((B + b) * h) / 2
}

 // 3 - Crie uma nova função para calcular a área de um círculo. A área do círculo de raio r é calculada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14). A = ℼ * r². Dica: você pode acessar o valor de ℼ utilizando o módulo nativo Math.PI.
 // Calcule a área de um círculo de raio igual 25cm;
 // Calcule a área de um círculo de raio igual 100cm;
 // Calcule a área de um círculo de raio igual 12,5cm.

 export function getCirculoArea(radius: number): number {
  return Math.PI * radius ** 2;
}