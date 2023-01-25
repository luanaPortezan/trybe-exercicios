--------- Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING ---------

-- Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o GROUP BY, o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos juntos. O GROUP BY também pode ser usado em conjunto com as funções de agregação que vimos anteriormente.

-- O GROUP BY pode ser construído da seguinte forma:
-- SELECT coluna(s) FROM tabela
-- GROUP BY coluna(s);

-- EXEMPLO: Podemos utilizar o GROUP BY para agrupar os registros pelo valor de uma coluna, exibindo apenas um registro de cada valor, como é feito com a coluna first_name a seguir.
SELECT * FROM sakila.actor;

SELECT first_name FROM sakila.actor
GROUP BY first_name;
-- A query de cima é diferente da query debaixo, pois o GROUP BY agrupa todos os registros quem possuem o mesmo dado.
SELECT first_name FROM sakila.actor;

-- Como dito, o GROUP BY removerá duplicações, retornando apenas um valor da coluna usada no agrupamento. Porém, é mais comum utilizar o GROUP BY em conjunto com o AVG, MIN, MAX, SUM ou COUNT.
-- Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT(). Assim, teremos uma informação mais fácil de ser compreendida.
SELECT
  first_name,
  COUNT(*)
FROM sakila.actor
GROUP BY first_name;

-- Também podemos utilizar o GROUP BY para agrupar os registros pelos valores de mais de uma coluna.
SELECT * FROM sakila.film;
SELECT 
  rating,
  rental_rate,
  COUNT(1) AS total
FROM sakila.film
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate;
-- No exemplo acima, estamos usando a tabela film do banco sakila. A coluna rating nos mostra a classificação por idade do filme. A coluna rental_rating informa o valor do aluguel do filme separado/agrupado pela classificação. Além disso, inserimos uma função ORDER BY para facilitar a visualização dos resultados.


-- Agora vamos explorar como utilizar o GROUP BY em conjunto com as diversas funções de agregação que foram estudadas até aqui, por meio de alguns exemplos feitos com o nosso banco de dados sakila.

-- Média de duração de filmes agrupados por classificação indicativa
SELECT * FROM sakila.film;
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição/custo de reposição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição/custo de reposição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição/custo de reposição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;



--------- Praticando GROUP BY ---------

-- 1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT * FROM sakila.customer;
SELECT 
  COUNT(*),
  active
FROM sakila.customer
GROUP BY active;

-- 2. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT 
  COUNT(*),
  active,
  store_id
FROM sakila.customer
GROUP BY active, store_id;

-- 3. Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT * FROM sakila.film;
SELECT
  rating,
  AVG(rental_duration)
FROM sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;


-- 4. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT * FROM sakila.address;
SELECT
  district,
  COUNT(*) AS Quantidade
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;



--------- Filtrando Resultados do GROUP BY com HAVING ---------

-- Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos o SELECT...WHERE para filtrar resultados individuais.
-- A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o HAVING, para que somente os nomes que estão cadastrados mais de duas vezes sejam exibidos.
-- O HAVING acontece por último na execução da consulta, de modo que primeiro são calculados os agrupamentos, e apenas depois disso são filtrados os que não satisfazem as condições da cláusula HAVING
-- Em uma aplicação real de troca de mensagens, por exemplo, pode ser preciso identificar as pessoas que utilizam o sistema e enviaram mais de 1000 mensagens por hora, caracterizando o SPAM de acordo com a regra de negócio da empresa. Assim, o HAVING te permitirá fazer essa consulta filtrando esse dado que foi agrupado com o uso do COUNT.
SELECT * FROM sakila.actor;

SELECT 
  first_name,
  COUNT(*)
  -- o que eu quero mostrar
FROM sakila.actor
-- tabela utilizada
GROUP BY first_name
-- quem será agrupado
HAVING COUNT(*) > 2;
-- condicional: nomes que são cadastrados pelo menos mais de 2 vezes

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT
  first_name,
  COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;


-- Podemos ver também que o HAVING pode ser utilizado em agrupamentos que envolvam mais de uma coluna. Como o exemplo que fizemos acima na tabela film.
-- Aqui estamos buscando todos os filmes de acordo com a classificação por idade, coluna rating, e que possuam o mesmo preço de aluguel, coluna rental_rate. E ainda exista um total de filmes nesse agrupamento, que seja menor que 70.
SELECT
  rating,
  rental_rate,
  COUNT(1) AS total
-- DUVIDA: PORQUE O CONT É 1?
FROM sakila.film
GROUP BY rental_rate, rating
-- agrupando: todos possuam o mesmo preço de aluguel e todos os filmes de acordo com a classificação por idade
HAVING total < 70
-- condicional: que seja menor que 70.
ORDER BY rating, rental_rate;

-- ATENÇÃO!! É importante entender que, quando usamos o HAVING, estamos filtrando somente os resultados gerados após o GROUP BY ter sido executado.



--------- PARA FIXAR ---------
-- 1. Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length) 
FROM sakila.film
GROUP BY rating;

-- SOLUÇÃO:
SELECT * FROM sakila.film;

SELECT 
  rating,
  AVG(length) AS duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

-- 2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição/custo de reposição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- SOLUÇÃO:
SELECT * FROM sakila.film;

SELECT 
  rating,
  SUM(replacement_cost) AS custo_reposicao
FROM sakila.film
GROUP by rating
HAVING custo_reposicao > 3950.50
ORDER BY custo_reposicao DESC