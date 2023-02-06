// src/app.js
const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();
// app.get('/', (req, res) => res.status(200).json({ message: 'Hello World!' }));
// app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

// app.use()-----> serve para “instalar” algumas coisas que queremos em nossas APIs
app.use(express.json()); // habilita a possibilidade de recebermos dados pelo corpo (body) de nossa requisição



// ----------  Listando times por meio do método GET ---------- 
app.get('/teams', (req, res) => res.status(200).json({ teams }));

// PARA TREINAR!!! Que tal treinar seus conhecimentos e listar um time pelo seu id? Crie um endpoint do tipo GET com a rota /teams/:id.
// app.get('/teams/:id', (req, res) => {
//   const team = teams.find(({ id }) => id === Number(req.params.id));
//   res.status(200).json(team);
// });

// ---------- Cadastrando times por meio do método POST ----------
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

// {
//   "id": 3,
//   "name": "Clube de Regatas do Flamengo",
//   "initials": "FLA"
// }

// ---------- Editando times por meio do método PUT ----------

// método PUT é utilizado quando queremos alterar um recurso. Ele também recebe dados pelo corpo da requisição.
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

// Todo dado que vem por params ou por query (ou seja dados enviados pela URL do navegador) são recebidos como string. Por isso, fizemos um “parser” desse valor para Number (dentro do if). Preste bastante atenção nisso, sem esse parser, o if nunca vai encontrar o id, pois o id 1 é diferente do id ‘1’! Seria como comparar 1 === '1', o retorno seria false.

// desconstruímos essas informações (id e req.params) e criamos a variável updateTeam, na qual vamos armazenar o resultado da busca pelo id que recebemos como parâmetro dentro do array de times. Caso não seja encontrado um time correspondente, devolvemos uma resposta informando isso. // Quando o time é encontrado, alteramos as informações dele no array e o salvamos na variável updateTeam. Ao final, respondemos com o status 200 - ok e o time alterado.


// ---------- Deletando times por meio do método DELETE ----------

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});


module.exports = app;

// a função get é usada toda vez que queremos pedir algum dado.
// 1° parâmetro '/': Aqui é rota que tanto falamos (Chamamos a rota / de rota raiz;)
// 2° parâmetro (req, res) => {}: Este espera uma função de callback. Esta função pode receber de 2 a 4 parâmetros, sendo eles:
// req: Essa é a Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body);
// res: Essa é a Response (ou resposta), é por meio dela que respondemos o que nos é solicitado;
// next: Não vamos trabalhar com ele nesta aula;
// err: Não vamos trabalhar com ele nesta aula.

//res como comentado, responde as requisições. Estas requisições podem ser respondidas de vários jeitos, tais como:
// - Formato text/JSON, como o caso do res.json({ message: 'Olá Mundo!' });
// - Formato text/HTML, como o caso do res.send('<h1>Olá Mundo!</h1>');
// - Redirecionamentos, como o caso do res.redirect('https://www.betrybe.com/');
// - Páginas completas ou partes dela, como o caso do res.render('index.html');
// - Finalizando, como o caso do res.end();

// É de costume enviar um status code, como é demostrado no trecho res.status(200)...
// Os status code mais conhecidos são:
// 100: Respostas de informação
// 200: Resposta de sucesso ---------------------------> const OK = 200
// 201: created
// 300: Resposta de redirecionamento
// 400: Resposta de erro no cliente -------------------> const BAD_REQUEST = 400
// 404: Resposta de página não foi encontrada  --------> const NOT_FOUND = 404
// 500: Resposta de erro no servidor  -----------------> const INTERNAL_SERVER_ERROR = 500

// o GET não é o único método HTTP existente. Na verdade, existem 39 métodos diferentes! Os mais comuns são: GET, PUT, POST, DELETE e PATCH, além do método OPTIONS, utilizado por clientes para entender como deve ser realizada a comunicação com o servidor.

// LINHA INICIAL: O código do status que diz se a requisição foi um sucesso ou não. Nesse caso, deu certo, pois recebemos um código 200, acompanhado de uma pequena mensagem descritiva (método http: GET obter/recuperar / POST inserir / PUT atualização completa / PATH atualização parcial / DELETE excluir)
// LINHA DE CABEÇALHO: Os headers no mesmo esquema da requisição. No caso do exemplo acima, o Content-Type diz para o navegador o que ele precisa fazer. No caso do HTML, ele deve renderizar o documento na página;
// CORPO DA MENSAGEM: Um body ou corpo (da requisição), que envia dados quando necessário, sendo opcional. Por exemplo, caso você submeta um formulário registrando um pedido em uma loja virtual, no corpo da resposta pode ser retornado o número do pedido ou algo do tipo.
// o body e os headers da requisição representam a informação que um cliente está enviando para o servidor;
// o body e os headers da resposta representam a informação que o servidor está devolvendo para o cliente.
