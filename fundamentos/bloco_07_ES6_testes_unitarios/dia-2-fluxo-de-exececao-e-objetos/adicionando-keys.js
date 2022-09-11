// Objetos: Parte I - Adicionando novas chaves (keys)

// Para começar, veja o exemplo abaixo de um objeto que contém as informações de um cliente de uma loja:

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// Imagine um cenário em que você precisa completar as informações do cliente adicionando uma nova propriedade para armazenar seu sobrenome. Uma das formas já vistas até então é reescrever o objeto, dessa vez já com a nova propriedade lastName.

const customer2 = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};

// Existem também outras formas de adicionar essa propriedade de maneira muito mais simples e prática, sem a necessidade de reescrever o objeto e suas propriedades. Veja o exemplo abaixo:

const customer3 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer3);

customer3.lastName = 'Faria';
console.log(customer3);

const customer4 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer4);
customer4['lastName'] = 'Silva';
console.log(customer4);

// No exemplo acima, ao invés de reescrever o objeto inteiro, apenas adicionamos a nova propriedade. Para isso, basta seguir a sintaxe abaixo:

// - objeto.nomeDaPropriedade.
// - objeto[variavelQueContemONomeDaPropriedade].

// Agora, suponha que seja necessário adicionar algumas novas propriedades ao objeto, como a naturalidade, a data de nascimento e o estado civil.
// Essas novas propriedades serão adicionadas de acordo com o valor de algumas variáveis.

const customer5 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer5[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer5.firstName} ${customer5.lastName}`;
customer5[newKey] = fullName;
console.log(customer5);

// No exemplo acima, você viu que há diferentes formas de associar chaves e valores a um objeto.
// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
