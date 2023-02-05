// src/server.js

const app = require('./app'); // para iniciar o express executando a função app.listen()
const connection = require('./db/connection');

const PORT = 3360;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  // const [result] = await connection.execute('SELECT * FROM people;');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }
});

// Dentro da função app.listen() foi adicionado um trecho de código que executa a função connection.execute(), que recebe como parâmetro uma consulta SQL SELECT 1. Essa função realiza uma conexão com o MySQL, executa o SQL passado como parâmetro e recebe uma resposta que é armazenada na constante result (note que o processo de desestruturação de variáveis está sendo utilizado! 😎).

// Depois é verificado com um if se o objeto result contém alguma coisa e, em caso de positivo, é impresso no console a mensagem MySQL connection OK. Se você for no console e executar o comando npm start, o express será iniciado e apresentará a seguinte saída:

