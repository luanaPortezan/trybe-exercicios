// imc = (peso / altura²); ----> altura em metros e peso em kg
// const weight = 49;
// const height = 1.63;

const inputBmi = require('readline-sync');

function calculatorBmi(weight, height) {
  const bmi = weight / (height * height);

  return bmi;
};
// console.log(calculatorBmi(weight, height));


// ------- usando o pacote readline-sync para adicionar inputs de entrada -------

  function questionInput() {
    const weight = inputBmi.questionInt('What’s your weight? ');
    const height = inputBmi.questionInt('What’s your height? ');
    // console.log(`seu peso: ${weight}, sua altura: ${height}`);

    const calculatorInput = calculatorBmi(weight, height); // chama a func anterior para calcular
    console.log(`BMI: ${calculatorInput.toFixed(2)}`);
    // return calculatorInput
}
questionInput();