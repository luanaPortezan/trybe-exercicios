-- Para fixar:
-- Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o INNER JOIN, utilizando o banco de dados sakila. Antes de começar a escrever suas queries, identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.

-- 1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f 
ON a.actor_id = f.actor_id;


-- 2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT st.first_name, st.last_name, address
FROM sakila.staff AS st
INNER JOIN sakila.address AS a
ON st.address_id = a.address_id;


-- 3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT
    c.customer_id,
    c.first_name,
    c.email,
    c.address_id,
    a.address
FROM
    sakila.customer AS c
INNER JOIN
    sakila.address AS a 
ON 
    c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;


-- 4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT
    c.first_name, c.email, c.address_id, a.address, a.district
FROM
    sakila.customer AS c
INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
WHERE
    a.district = 'California'
        AND c.first_name LIKE '%rene%';


-- 5. Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.
SELECT
    c.first_name,
    c.last_name,
    COUNT(r.rental_id) AS `quantidade de filmes alugados`
FROM
    sakila.customer AS c
INNER JOIN
    sakila.rental AS r 
ON 
    r.customer_id = c.customer_id
WHERE
    c.active = 1
GROUP BY
    c.customer_id
ORDER BY
    c.first_name DESC,
    c.last_name DESC;


-- ⚠️ Dica: Utilize aliases para deixar suas queries mais descritivas e nomear as colunas da maneira que você quiser.
-- 6. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff AS stf
INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;


-- 7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT
    a.actor_id,
    a.first_name,
    f.film_id,
    f.title
FROM
    sakila.actor AS a
INNER JOIN
    sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN
    sakila.film AS f ON f.film_id = fa.film_id;


-- Até o momento, temos produzido resultados apenas quando temos valores correspondentes em ambas as colunas de referência. Porém, o que devemos fazer quando possivelmente apenas uma das tabelas possui um valor correspondente existente? É possível que você tenha que usar o LEFT JOIN ou RIGHT JOIN nessas situações.