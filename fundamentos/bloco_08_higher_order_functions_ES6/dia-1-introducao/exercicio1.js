// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

// const newEmployees = () => {
//   const employees = {
//     id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// Primeiro Passo
// Começamos criando nossa função. Sabemos que recebemos o nome completo por parâmetro e que ele deve ser parte do nosso retorno. Vamos começar por aí.

// const employeeGenerator = (fullName) => {
//   return { fullName };
// };

// Segundo Passo
// Podemos agora nos preocupar com o email. O enunciado diz que ele deve ser gerado a partir do nome passado como parâmetro. Vamos separá-lo em itens divididos pelo espaço utilizando o split e então juntá-lo novamente utilizando o caractere "_" utilizando o join. Depois podemos passá-lo no retorno usando template literals e completando o domínio do email.

// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// Terceiro Passo
// Basta agora passarmos nossa função como parâmetro numa HOF que executará essa função para cada chave id presente.

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));