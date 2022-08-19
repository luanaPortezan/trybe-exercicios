// Para fixar:
// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

// Ao chamar a função doingThings:
// doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

// Primeiro Passo
// Vamos criar nossas funções com arrow functions.

// const wakeUp = () => 'Acordando!!';

// const breakfast = () => 'Bora tomar café!!';

// const sleep = () => 'Partiu dormir!!';

// Segundo Passo
// Agora vamos criar nossa HOF, ela receberá por parâmetro uma das funções que criamos e então irá imprimir a mensagem gerada pela HOF. Atribuiremos a execução de nossa callback a uma constante dentro do escopo da HOF e então imprimimos essa constante.

const wakeUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(wakeUp); // Acordando!!
doingThings(breakfast); // Bora tomar café!!
doingThings(sleep); // Partiu dormir!!