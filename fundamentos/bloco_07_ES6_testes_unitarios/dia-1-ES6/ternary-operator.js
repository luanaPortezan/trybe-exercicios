// Parte IV - ternary operator

// Até o momento você já aprendeu a usar expressões if/else e switch/case pra executar código baseado em certas condições, correto? Mas e se te disséssemos que existe uma sintaxe mais simples para a construção de algumas condicionais no JavaScript e que combina muito bem com as novas alterações do ES6?
// Pois é! Além dos condicionais que você já aprendeu, o JavaScript traz consigo uma ferramenta que permite fazer operações condicionais mais simples, que só tenham duas possibilidades de resposta (x se verdadeiro, y se falso), com uma sintaxe simplificada e legível: o operador ternário. Ele funciona muito bem com as sintaxes simplificadas que você acabou de aprender, como arrow functions, por exemplo! Para entendê-lo melhor, observe a seguinte lógica:

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

// Como você pode ver, a sintaxe do operador ternário é bem simples: x ? y : z.
// O x é uma condição que será avaliada como verdadeira ou falsa;
// O y é o retorno se a condição for verdadeira;
// O z é o retorno se a condição for falsa;
// A vantagem do operador ternário é que ele é fácil de entender quando se pega o jeito e é muito mais sucinto do que escrever um bloco condicional com if/else ou switch, gerando um código mais limpo e simples.
// Por outro lado, é bom saber que o operador ternário não substitui as expressões condicionais tradicionais! Em qualquer situação onde exista mais de uma condição a ser avaliada, gerando três ou mais resultados possíveis, o mais simples será utilizar as opções já aprendidas anteriormente:

// Situação em que é mais simples usar o operador ternário:
const checkIfElse1 = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary1 = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
);

// ------------------------

// Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse2 = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

const checkTernary2 = (fruit === `maçã`) ? `Essa fruta é vermelha`
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código no futuro!

// Se você quiser reforçar ainda mais o conceito sobre operador ternário e ainda receber uma super dica de como realizar apenas uma verificação para casos verdadeiros, assista ao vídeo abaixo 😉:

// No mais, vale dizer que o ternary operator é uma excelente adição à caixa de ferramentas de qualquer pessoa desenvolvedora, basta saber usá-lo para tornar o código mais simples e legível!