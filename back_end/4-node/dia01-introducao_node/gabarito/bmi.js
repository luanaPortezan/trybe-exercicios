// const weightInKg = 80; // Você pode utilizar o valor que desejar aqui
// const heightInCm = 178; // Você pode utilizar o valor que desejar aqui

const readline = require('readline-sync');

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

// A função main é o ponto de partida do nosso programa
function main() {
  const weight = readline.questionInt('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');

  const bmi = handleBMI(weight, height);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();