// imc = (peso / altura²); ----> altura em metros e peso em kg
// const weight = 49;
// const height = 1.63;

const inputBmi = require('readline-sync');

function calculatorBmi(weight, height) {
  // const heightMeter = height /100;
  // const bmi = weight / (heightMeter * heightMeter);

  const bmi = weight / (height * height);
    console.log(`Meu peso: ${weight}, minha altura: ${height}`);

  return bmi.toFixed(1);
};
// console.log(calculatorBmi(weight, height));


// ------- usando o pacote readline-sync para adicionar inputs de entrada -------

  function questionInput() {
    const weight = inputBmi.questionFloat('What’s your weight? ');
    const height = inputBmi.questionFloat('What’s your height? ');
    // const height = inputBmi.questionFloat

    const calculatorInput = calculatorBmi(weight, height); // chama a func anterior para calcular
      console.log(`BMI: ${calculatorInput}`);
    // return calculatorInput
}
questionInput();