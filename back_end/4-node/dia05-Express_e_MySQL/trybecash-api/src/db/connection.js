// src/db/connection.js ----> será responsável por realizar a conexão com o servidor MySQL utilizando a biblioteca mysql2

const mysql = require('mysql2/promise'); // importando a biblioteca mysql2 com o recurso de promises. Isso permitirá utilizar o MySQL de forma assíncrona com async/await

const connection = mysql.createPool({ // pool de conexões é um repositório que contém um conjunto de conexões estabelecidas previamente com o banco de dados
  host: 'database', // host: 'localhost',
  port: 3306, // port: 33060,
  user: 'root',
  password: 'root',
  database: 'trybecashdb',
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0,
});

module.exports = connection;

//waitForConnections:
// Descrição: determina qual será a ação da pool de conexões quando nenhuma conexão estiver disponível na pool e quando o limite de criação de novas conexões tiver sido alcançado
// Observações: Se o valor for true, será criada uma fila de espera por conexões, caso contrário a pool retornará uma callback com um erro. Caso este parâmetro seja omitido, o valor padrão será true

// connectionLimit:
// Descrição: O número máximo de requisições de conexão que a pool criará de uma vez
// Observações: Caso este parâmetro seja omitido, o valor padrão será 10

//queueLimit
// Descrição: O número máximo de requisições de conexão que a pool irá enfileirar antes de retornar um erro
// Observações: Se o valor deste parâmetro for igual a 0 significa que não existe limite. Caso este parâmetro seja omitido, o valor padrão será 0