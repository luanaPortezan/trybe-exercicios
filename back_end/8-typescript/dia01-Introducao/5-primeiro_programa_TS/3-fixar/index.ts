import * as Fx from './fixar';

console.log("A ÁREA DE UM:");

console.log(`- Losango com diagonais iguais a 32cm e 18cm: ${Fx.getLosangoArea(32, 18)}cm²`);
console.log(`- Losango com diagonais iguais a 200cm e 50cm: ${Fx.getLosangoArea(200, 50)}cm²`);
console.log(`- Losango com diagonais iguais a 75cm e 25cm: ${Fx.getLosangoArea(75, 25)}cm²`);

console.log(`- Trapézio com base maior igual a 100cm, base menor igual a 70cm e altura igual a 50cm: ${Fx.getTrapezioArea(100, 70, 50)}cm²`);
console.log(`- Trapézio com base maior igual a 75cm, base menor igual a 50cm e altura igual a 35cm: ${Fx.getTrapezioArea(75, 50, 35)}cm²`);
console.log(`- Trapézio com base maior igual a 150cm, base menor igual a 120cm e altura igual a 80cm: ${Fx.getTrapezioArea(150, 120, 80)}cm²`);

console.log(`- Círculo de raio 10cm: ${Fx.getCirculoArea(10)}cm²`);
console.log(`- Círculo de raio 5cm: ${Fx.getCirculoArea(5)}cm²`);
console.log(`- Círculo de raio 100cm: ${Fx.getCirculoArea(100)}cm²`);