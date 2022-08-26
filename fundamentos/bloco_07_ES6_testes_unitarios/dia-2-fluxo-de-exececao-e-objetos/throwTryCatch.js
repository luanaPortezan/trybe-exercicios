// Throw e Try/Catch

// Para começar, relembre o conteúdo da aula anterior com este exemplo de arrow function:

const sum1 = (value1, value2) => value1 + value2;

// A função acima é bastante simples: recebe dois parâmetros e retorna a soma entre eles. Copie o código e chame a função com dois parâmetros numéricos (por exemplo, 2 e 3). Não esqueça do console.log para que seja possível ver o retorno.

const sum2 = (value1, value2) => value1 + value2;
console.log(sum2(2, 3));

// Tudo funciona perfeitamente quando você tem o controle do código, certo? Mas digamos que você está desenvolvendo uma aplicação onde uma pessoa irá fornecer os valores. Sabemos que pessoas cometem erros e podem, por exemplo, tentar somar o número 2 com a string '3'. O que aconteceria nesse caso?

const sum3 = (value1, value2) => value1 + value2;
console.log(sum3(2, '3')); // resultado: 23

// 2 + '3' = 23?? Uma interação bastante inusitada, concorda? O que aconteceu foi que a sua função, ao perceber que estava fazendo uma operação com parâmetros de tipos distintos, tentou adaptá-los para que o código não quebrasse - no caso, o primeiro parâmetro foi convertido para uma string, e a operação realizada foi uma concatenação de strings através do sinal de +.
// Esse comportamento ocorre porque considera-se o JavaScript como uma linguagem dinâmica. Ou seja, quando se declara uma variável, não é necessário atrelar ela a nenhum tipo, o que permite inclusive que ela mude de tipo ao longo da execução do código.
// Por mais que esse aspecto traga alguma flexibilidade, ele também produz comportamentos inesperados que podem ser difíceis de identificar. Por isso, você enquanto boa pessoa programadora deve ser capaz de prever esses comportamentos e evitar que eles ocorram. 😉
// Vamos adicionar uma condicional que impede a pessoa usuária de quebrar a sua calculadora.

const sum4 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};
console.log(sum4(2, '3'));

// seu código avisa para a pessoa usuária que a função sum só aceita números. Aparentemente está tudo funcionando como deveria, mas essa ainda não é a melhor forma de se tratar um erro em JavaScript. Na prática, a função sum está retornando uma string, e essa não é o objetivo de uma função que soma dois números, certo? Você precisa indicar de alguma forma que ocorreu um erro.
// Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw:

const sum5 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};
console.log(sum5(2, '3'));

// Percebeu a diferença? Agora a execução da função sum foi interrompida e temos uma mensagem de erro no console, bem como uma indicação da linha onde esse erro ocorre.

// Mas vamos detalhar por partes o que foi feito:
// - A palavra reservada throw serve para lançar uma exceção criada por você. No caso, definimos que não seria aceito um parâmetro que não fosse do tipo number, então criamos esse "erro customizado". Caso contrário, a função sum apresentaria um comportamento incorreto. Se quiser saber mais detalhes, consulte a documentação.
// - O operador new serve para criar um objeto personalizado ou nativo do JavaScript. Mais sobre o new aqui.
// - A palavra Error é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new, você cria uma cópia deste objeto, que será lançada como uma exceção no seu código. Veja mais sobre Error na documentação oficial.
// Você programou o código para lançar uma exceção caso aconteça um erro, mas o fluxo do código ainda pode ser melhorado. Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch. Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.
// Aproveitando a ocasião, seria uma ótima ideia refatorar a função sum para que ela não tenha funcionalidades demais.

function verifyIsNumber(value1, value2) {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
}

const sum6 = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};

console.log(sum6(2, '3'));

// Agora sim! Você criou um fluxo para quando nosso código é executado com sucesso, representado pelo bloco try, que tenta fazer a soma de dois valores. Esse bloco chama a função recém-criada verifyIsNumber, que verifica se os parâmetros passados são números. Quando se depara com um valor que não é um número, o código lança um erro com o throw, que é capturado pelo catch no fluxo de exceção, através da variável error (aqui podemos usar qualquer nome). Dentro do catch retornamos a chave error.message, uma propriedade do objeto nativo Error que contém a mensagem de erro criada anteriormente.
// Como sempre, dê uma olhada na documentação oficial para aprofundar seus conhecimentos.
// Para reforçar ainda mais o conceito de try/catch, assista o vídeo a seguir:

// exemplo da Tamara:

const verificaValores = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Erro! Os valores precisam ser numéricos')
  }
}

const soma = (a, b) => {
  try {
    verificaValores(a, b);
    return a + b;
  }
  catch (erro) {
    return erro.message;
  }
}

console.log(soma (7, '6'));