-- Faça os exercícios 1 a 6 utilizando banco de dados pixar abaixo:
-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
USE pixar;
SELECT * FROM movies;
SELECT * FROM box_office;

SELECT
  movies.title,
  box_office.domestic_sales,
  box_office.international_sales
  -- as informações que eu quero exigir no meu relatório: filmes (title), vendas nacionais (domestic_sales) e internacionais (international_sales)
FROM
  pixar.movies
  -- onde vem a informação do filme, vem da tabela movies
  INNER JOIN
  pixar.box_office
  -- a tabela de bilheteria que quero juntar informações
  ON box_office.movie_id = movies.id;
  -- ON é a parte que conecta as tabelas
  -- condição: a identificação do filmes em bilheteria (movie_id) da tabela  bilheteria (box_office) deve ser igual a identificação (id) da tabela de filmes (movies)


-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT * FROM movies;
SELECT * FROM box_office;

SELECT
  movies.title,
  (box_office.domestic_sales + box_office.international_sales) AS vendas
  -- informações que quero mostrar: soma das vendas e os filmes
FROM
  pixar.movies
  INNER JOIN
  pixar.box_office
  ON box_office.movie_id = movies.id
  -- detalhe para prestar atenção: a interseção entre as tabelas não mudou
WHERE
  box_office.international_sales > box_office.domestic_sales;
  -- condicional: filme que possui o número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales)


-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT * FROM movies;
SELECT * FROM box_office;

SELECT
  movies.title,
  box_office.rating
  -- informações que quero mostrar
FROM
  pixar.movies
  INNER JOIN
  pixar.box_office
  ON box_office.movie_id = movies.id
  -- tabelas usadas e sua ligação entre si
ORDER BY box_office.rating DESC;
-- condicional: avaliação (rating) em ordem decrescente


-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM movies;
SELECT * FROM theater;
SELECT
  movie_in_theaters.name,
  movie_in_theaters.location,
  movies.title,
  movies.director,
  movies.year,
  movies.length_minutes
  -- todas as informações que quero mostrar
FROM
  pixar.theater AS movie_in_theaters
  -- tabela theater será minha tabela de referencia para o LEFT JOIN da tabela movies
  LEFT JOIN
  pixar.movies
  -- a tabela que quero comparar (lembrando que a referencia é a tabela theater)
  ON movie_in_theaters.id = movies.theater_id
  -- o registro de identificação (id) dos filmes em cartaz da tabela theater deve ser igual ao registro theater_id da tabela movies. O QUE AS TABELAS TEM EM COMUM PARA COMPRAR
ORDER BY movie_in_theaters.name;
-- ordenado pelo nome dos filmes em cartaz


-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM movies;
SELECT * FROM theater;

SELECT
  movie_in_theaters.id,
  movie_in_theaters.name,
  movie_in_theaters.location,
  movies.title,
  movies.director,
  movies.year,
  movies.length_minutes
  -- todas as informações que quero mostrar
FROM
  pixar.theater AS movie_in_theaters
  -- tabela dos filmes em cartaz
  RIGHT JOIN
  pixar.movies
  ON movie_in_theaters.id = movies.theater_id
  -- tabelas usadas e sua ligação entre si
ORDER BY movie_in_theaters.name;
-- condicional: nomes dos cinemas em ordem alfabética

-- 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT * FROM movies;
SELECT * FROM box_office;

SELECT
  movies.id,
  movies.title,
  movies.director,
  movies.year,
  movies.length_minutes,
  movies.theater_id
  -- toda as informações que eu quero mostrar
FROM
  pixar.movies
  INNER JOIN
  pixar.box_office
  ON box_office.movie_id = movies.id
  -- as tabelas usadas e as ligações de comparação entre si
WHERE
  box_office.rating > 8
    AND movies.theater_id IS NOT NULL;
    -- condicional: apenas os filmes que estão em cartaz E possuem avaliação maior que 8

-------------------- Zambelli --------------------
-- ATIVIDADE EXTRA: Gerar uma lista com a quantidade de filmes por diretor, com o total de bilheteria (domestica e internacional) ordenado pela total de bilheteria?
SELECT * FROM movies;
SELECT * FROM box_office;

SELECT 
  movies.director,
  COUNT(box_office.domestic_sales + box_office.international_sales) AS bilheteria_total
  --informações que quero mostrar
FROM
  pixar.movies
  INNER JOIN
  pixar.box_office
  ON box_office.movie_id = movies.id
  -- relação entre as tabelas usadas
GROUP BY director
-- condicional: agrupar a lista por diretor (gerar uma lista com a quantidade de filmes por diretor)
ORDER BY bilheteria_total;
-- condicional: ordenado pela total de bilheteria
