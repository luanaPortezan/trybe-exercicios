// imc = (peso / altura²); ----> altura em metros e peso em kg
// const weight = 49;
// const height = 1.63;

const inputBmi = require('readline-sync');

function calculatorBmi(weight, height) {
  // const heightMeter = height /100;
  // const bmi = weight / (heightMeter * heightMeter);

  const bmi = weight / (height * height);
    console.log(`Meu peso: ${weight}, minha altura: ${height}`);
    console.log(bmi)
  return bmi.toFixed(1);
};
// console.log(calculatorBmi(weight, height));

const bmiMaxAndMin = {
  'Underweight': {
    minBmi: 0,
    maxBmi: 18.4,
  },
  'Normal Weight': {
    minBmi: 18.5,
    maxBmi: 24.9,
  },
  'Overweight': {
    minBmi: 25,
    maxBmi: 29.9,
  },
  'Obese Class I': {
    minBmi: 30.0,
    maxBmi: 34.9,
  },
  'Obese Class II': {
    minBmi: 35,
    maxBmi: 39.9,
  },
  'Obese Class III': {
    minBmi: 40,
    maxBmi: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function calcSituation(bmi) { // logica que verifica as chaves e objetos
  const situations = Object.keys(bmiMaxAndMin);

  const findSituation= situations.find((situation) => {
    const { bmiMaximum, bmiMinimum } = bmiMaxAndMin[situation];
    const withinMinimum = bmiMinimum ? bmi > bmiMinimum : true;
    const withinMaximum = bmiMaximum ? bmi < bmiMaximum : true;

    return withinMinimum && withinMaximum;
  });

  return findSituation;
};
  

// ------- usando o pacote readline-sync para adicionar inputs de entrada -------

  function questionInput() {
    const weight = inputBmi.questionFloat('What’s your weight? ');
    const height = inputBmi.questionFloat('What’s your height? ');
    // const height = inputBmi.questionFloat

    const calculatorInput = calculatorBmi(weight, height); // chama a func anterior para calcular

    const situation = calcSituation(); // retorna a func anterior
    // console.log(situation);

      console.log(`BMI: ${calculatorInput}`); // return calculatorInput
      console.log(`Situation: ${situation}`);
}
questionInput();