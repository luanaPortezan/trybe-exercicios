// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por definição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:


// const gameActions = {
//   // Crie as HOFs neste objeto.
// };

// // 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

// Solução:
// Devemos criar um objeto game actions que terá o turno do guerreiro com uma função. O parâmetro passado deverá ser nossa callback de dano do guerreiro. Dentro dela, executamos a função passando um objeto que representa o guerreiro. Subtraímos de dragon.healthPoints o resultado de warriorAttack. Por fim vamos atribuir o dano à uma chave de dano do warrior. Assim podemos trabalhar com estatísticas do turno depois.

// const gameActions = {
//   warriorTurn: (warriorAttack) => {
//     const warriorDamage = warriorAttack(warrior);
//     dragon.healthPoints -= warriorDamage;
//     warrior.damage = warriorDamage;
//   },
// };

// gameActions.warriorTurn(warriorAttack);

// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// Solução:
// Seguindo o mesmo padrão da chave que criamos para o turno do guerreiro. A única diferença é que devemos subtrair a mana gasta do total da mana do mago.

// const gameActions = {
//   warriorTurn: (warriorAttack) => {
//     const warriorDamage = warriorAttack(warrior);
//     warrior.damage = warriorDamage;
//     dragon.healthPoints -= warriorDamage;
//   },
//   mageTurn: (mageAttack) => {
//     const mageTurnStats = mageAttack(mage);
//     const mageDamage = mageTurnStats.damageDealt;
//     mage.mana -= mageTurnStats.manaSpent;
//     dragon.healthPoints -= mageDamage;
//     mage.damage = mageDamage;
//   },
// };

// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

// Solução:
// Vamos fazer o mesmo passo que os anteriores. Porém o dragão dá dano em área, acertando tanto o mago quanto o guerreiro.

// const gameActions = {
//   warriorTurn: (warriorAttack) => {
//     const warriorDamage = warriorAttack(warrior);
//     warrior.damage = warriorDamage;
//     dragon.healthPoints -= warriorDamage;
//   },
//   mageTurn: (mageAttack) => {
//     const mageTurnStats = mageAttack(mage);
//     const mageDamage = mageTurnStats.damageDealt;
//     mage.damage = mageDamage;
//     mage.mana -= mageTurnStats.manaSpent;
//     dragon.healthPoints -= mageDamage;
//   },
//   dragonTurn: (dragonAttack) => {
//     const dragonDamage = dragonAttack(dragon);
//     mage.healthPoints -= dragonDamage;
//     warrior.healthPoints -= dragonDamage;
//     dragon.damage = dragonDamage;
//   },
// };

// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.dragonTurn(dragonAttack);

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

// Solução:
// Basta fazer uma callback simples que retorna nosso objeto battleMembers e adicioná-la à gameActions.

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
