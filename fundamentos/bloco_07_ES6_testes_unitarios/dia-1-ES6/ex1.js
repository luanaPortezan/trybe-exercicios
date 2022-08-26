// Parte I

// Agora você vai fazer alguns exercícios de fixação.
// 🚀 Se liga nesse foguete!

// Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀
// Dica: Para a resolução dos exercícios você deverá aplicar conceitos sobre arrays, principalmente utilizar o for.
// 🚀 Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.
// Copie o código abaixo:

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }
// testingScope(true);

const testingScope1 = escopo => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope1(true);


// 🚀 Crie uma função que retorne um array em ordem crescente.

    // const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    // const sortOddsAndEvens = () => {

    // // Seu código aqui.

    // };

    // console.log(oddsAndEvens); // será necessário alterar essa linha 😉
    
    // const sortOddsAndEvens = (array) => {
    //   for (let index = 1; index < array.length; index += 1) {
    //     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    //       if (array[index] < array[secondIndex]) {
    //           let position = array[index];
    //           array[index] = array[secondIndex];
    //           array[secondIndex] = position;
    //         }
    //       }
    //     }
      
    //     return array;
    //   };
      
    //   console.log(sortOddsAndEvens(array));

    //   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);
      
// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.