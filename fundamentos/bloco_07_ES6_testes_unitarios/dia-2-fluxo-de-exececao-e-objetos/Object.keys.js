// Objetos: Parte II - Object.keys

// Como você já sabe, objetos são um dos tipos de dados em JavaScript que possuem uma estrutura de chave e valor. Dê uma olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto:

const coolestTvShow1 = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// Com o que você aprendeu até o momento de objetos, você poderia utilizar a estrutura de repetição for...in. Por exemplo:

const coolestTvShow2 = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow2) {
  console.log(property);
// name
// genre
// author
// favoriteCharacter
// quote
// seasons
}



// Mas e se dissermos que há uma maneira mais robusta de trabalhar com objetos e seus valores? O método Object.keys como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array. Cada entrada do array retornado será uma string com o valor de cada chave do objeto. Fantástico não é mesmo? Vamos ver como ficaria nosso exemplo utilizando este método:

const coolestTvShow3 = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// for (const property in coolestTvShow3) {
//   console.log(property);
// }

console.log(Object.keys(coolestTvShow3)); // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

// Agora que você já sabe o que é o Object.keys, que tal dar uma olhadinha na sua documentação? Leia até a seção sobre Polyfill. // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Após a leitura, veja mais um exemplo de aplicação do Object.keys. Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Tente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const student3 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student4 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 3');
listSkills(student3);

console.log('Estudante 4');
listSkills(student4);

// Verifique que usamos o método Object.keys e a estrutura de repetição for...in em conjunto. Além disso, perceba que a mesma função é utilizada para iterar sobre os dois objetos, mesmo o segundo tendo uma chave a mais que o outro.