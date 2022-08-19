// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
//      O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

// Solução:
// Primeiro Passo
// Faremos uma fórmula básica para o dano do dragão. Precisamos multiplicar um número aleatório pelo seu atributo strength para calcular o valor máximo. Vamos definir os dois valores de dano mínimo e máximo.

// const dragonAttack = (dragon) => {
//   const minDmg = 15;
//   const maxDmg = Math.floor(Math.random() * dragon.strength);
// };

// Segundo Passo
// Vamos adicionar nosso retorno. Caso nossa multiplicação seja menor do que 15, devemos retornar 15, senão retornamos o valor da multiplicação.
const dragonAttack = (dragon) => { const minDmg = 15; const maxDmg = Math.floor(Math.random() * dragon.strength);
const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
return dragonDmg; };


// 2 - Crie uma função que retorna o dano causado pelo warrior.
//      O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

// Primeiro Passo
// Vamos definir os valores de dano máximo e mínimo.

// const warriorAttack = (warrior) => {
//   const minDmg = warrior.strength;
//   const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));
// };

// Segundo Passo
// Se o valor da multiplicação for menor que o dano mínimo retornamos o dano mínimo, senão retornamos o dano máximo.

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));
  const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return warriorDmg;
};


// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//      O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//      A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

// Solução:
// Primeiro Passo
// Vamos começar definindo minDmg, maxDmg, mageMana e o resultado caso o mago não tenha 15 de mana.

// const mageAttack = (mage) => {
//   const mageMana = mage.mana;
//   const minDmg = mage.intelligence;
//   const maxDmg = minDmg * 2;
//   const turnStats = {
//     manaSpent: 0,
//     damageDealt: 'Not enough mana...',
//   };
//   return turnStats;
// };

// Segundo Passo
// Agora vamos criar o caso de dano se o mago tiver mana o suficiente. A lógica para aplicar o dano é a mesma dos outros personagens até então.

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    mageDmg = minDmg < maxDmg ? maxDmg : minDmg
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

