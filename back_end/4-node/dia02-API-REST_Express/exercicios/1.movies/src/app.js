const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, './movies.json');
const readFile = async () => { // função de leitura do JSON com o modulo fs.
  try {
    const data = await fs.readFile(moviesPath, 'utf-8');
    return JSON.parse(data);
    // console.log(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
}

app.use(express.json());

app.get('/movies/search', async (req, res) => { // Crie um endpoint do tipo GET com a rota /movies/search, que possa listar todos os filmes do JSON.
  try {
    const { q } = req.query; // 2. Desestruture q de req.query 
    const arrayMovies = await readFile(); // 3
    if (q) { // 4 tem obs em baixo
      const filteredMovies = arrayMovies.filter((element) => element.Movie.includes(q)); // 4 tem obs em baixo
      return res.status(200).json(filteredMovies); // 4 tem obs em baixo importante
    }
    res.status(200).end(); // 4 tem obs em baixo
  } catch (error) {
    res.status(500).send({ message: error.message }); // 1
  }
});

// Quarto passo: Use uma condicional para verificar se o q repassado por meio do parâmetro de rota existe. Se existir, filtre a lista com todos os filmes para saber quais deles incluem o conteúdo de q. Caso haja um q, utilizamos o método status enviando o código de resposta HTTP 200 e retornando a atividade filtrada pelo movie em formato json. Caso nenhum termo seja passado em q, devolvemos o status 200, mas sem enviar nada.

app.get('/movies', async (req, res) => { // Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
  try {
    const arrayMovies = await readFile(); // 1
    res.status(200).json(arrayMovies) // 3
  } catch (err) {
    res.status(500).send({ message: err.message }) // 2
  }
});

app.get('/movies/:id', async (req,res) => { // Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.
  try {
    const arrayMovies = await readFile(); // 1.chama a função de leitura do JSON
    const movie = arrayMovies.find(({ id }) => id === Number(req.params.id)); // 3. Use o método find no array de objetos movies, buscando pelo filme cuja propriedade id seja igual ao id recebido como parâmetro de rota na requisição (req), que capturamos por meio do req.params.id.
    res.status(200).json(movie); // 4. utilize o método status para enviar o código de resposta HTTP 200 e retornar a atividade em formato json correspondente ao id solicitado pelo cliente como resposta.
  } catch (err) {
    res.status(500).send({ message: err.message }) // 2.devolver um erro interno
  }
});

app.post('/movies', async (req, res) => {
  try {
    const arrayMovies = await readFile(); // 3
    console.log('Movies: ', arrayMovies);
    const { movie , price } = req.body; // 2.Desestruture as informações movie e price do corpo da requisição;

    const maxId = arrayMovies.reduce((maxId, { id }) => Math.max(maxId, id), 1); //4
    console.log('maxId: ', maxId);
    const newMovie = { //4
      id: maxId + 1,
      movie,
      price
    };
    console.log('newMovie: ', newMovie);

    const allMovies = JSON.stringify([...arrayMovies, newMovie]); //4
    console.log('allMovies: ', allMovies);
    await fs.writeFile(moviesPath, allMovies); // 5
    console.log('writeFile realizado com sucesso');
    res.status(201).json(newMovie); // 6
  } catch (err) {
    res.status(500).send({ message: err.message }) // 1
    console.log('Erro: ', err.message);
  }
});
// Quarto passo: (refatorei) Crie um objeto contendo as informações do corpo da requisição e adicione uma chave id. Em seguida, crie uma variável para guardar o que será a lista completa de filmes, ou seja, as informações dos filmes já existentes mais o novo filme que estamos cadastrando, fazendo a conversão (parse) dessas informações de JavaScript para uma string JSON. ATENÇÃO!!! Esse parse é importante porque vamos utilizar essas informações no método writeFile daqui a pouco.


//A função maxId é uma variável que armazena o valor máximo de ID dos objetos em um array de filmes. Ela é usada para garantir que o próximo ID seja sempre o maior entre todos os filmes presentes no array.
// Ela é definida como a saída da função reduce, que itera por todos os objetos no array de filmes e retorna o maior valor de ID. O parâmetro maxId é iniciado com o valor 0 e, a cada iteração, é comparado com o valor de ID do objeto atual ({ id }). Se o valor de ID do objeto atual for maior que o valor armazenado em maxId, então maxId é atualizado para esse novo valor.
// Assim, ao final da iteração, maxId contém o maior valor de ID entre todos os objetos no array de filmes.

app.put('/movies/:id', async(req, res) => { // Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.
  try {
    const { id } = req.params; // 2. Desestruture o id do parâmetro da requisição
    const { movie, price } = req.body; // 2. Desestruture as informações movie e price do corpo da requisição
    const arrayMovies = await readFile(); //3. Chame a função de leitura do JSON
    const movieIndex = arrayMovies.findIndex((movieId) => movieId.id === Number(id)); // 4. Localize o index correspondente ao id do parâmetro da requisição. Atente para a conversão do id recebido na requisição de string para number com o método Number() para permitir que a comparação seja feita com sucesso.
    if (movieIndex === -1) {
      return res.status(404).send({ message: 'Movie not found!' });
    }
    arrayMovies[movieIndex] = { id: Number(id), movie, price }; // 5. Altere o valor do elemento pelo que foi fornecido pelo corpo da requisição.
    const updatedMovies = JSON.stringify(arrayMovies, null, 2); //6. Os dois últimos parâmetros passados no método stringify são opcionais e têm por objetivo melhorar a formatação do arquivo JSON.
    await fs.writeFile(moviesPath, updatedMovies); // 6. Faça o parse das informações para string JSON e escreva no arquivo movies.json o conteúdo atualizado.
    res.status(200).json(arrayMovies[movieIndex]); // 7. Por fim, utilize o método status para enviar o código de resposta HTTP 200 e retornando o filme atualizado em formato json para o cliente como resposta.
  } catch (err) {
    res.status(500).send({message: err.message}) // 1
  }
});

app.delete('/movies/:id', async (req, res) =>{ // Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.
  try {
    const { id } = req.params; // 2
    const arrayMovies = await readFile(); // 3
    const filteredMovies = arrayMovies.filter((movieId) => movieId.id !== Number(id)); // 4. Filtre o array pelos objetos que não possuem o mesmo id que o fornecido pelo parâmetro da requisição.
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies); // 5. Com o array filtrado, podemos escrever no arquivo movies.json utilizando o modulo fs. obs: Fazemos o parse com o método JSON.stringify para evitar erros no método writeFile.
    res.status(204).end(); // 6. Por fim, utilize o método status para enviar o código de HTTP 204 como resposta.
  } catch (error) {
    res.status(500).send({message: error.message}) // 1
  }
});

module.exports = app;

// const { readFile } = require('node:fs/promises');
// const { resolve } = require('node:path');
// async function logFile() {
//   try {
//     const filePath = resolve('./package.json');
//     const contents = await readFile(filePath, { encoding: 'utf8' });
//     console.log(contents);
//   } catch (err) {
//     console.error(err.message);
//   }
// }
// logFile();