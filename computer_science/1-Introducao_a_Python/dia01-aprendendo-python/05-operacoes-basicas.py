"""
Exercício 1:
No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o
resultado das 7 operações básicas (soma, subtração, multiplicação, divisão,
divisão inteira, potenciação e módulo) envolvendo essas variáveis.
"""
a = 10
b = 5

a + b
a - b
a * b
a ** b  # potenciação
a / b
a // b  # divisão inteira
a % b  # módulo (resto)

"""
Exercício 2:
Declare e inicialize uma variável: hours = 6. Quantos minutos têm em 6 horas?
E quantos segundos? Declare e inicialize variáveis minutes e seconds que
recebem os respectivos resultados das contas. Depois, imprima cada uma delas.
"""
hours = 6
minutes = hours * 60
seconds = minutes * 60

print(minutes)
print(seconds)

"""
Exercício 3:
Teste e verifique o que acontece se você colocar um ponto e vírgula no final
de uma instrução em Python.
"""

# hours = 6;
# minutes = hours * 60;
# seconds = minutes * 60;

# print(minutes);
# print(seconds);

"""
Exercício 4:
Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias
recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e
75 centavos para cada exemplar adicional. Qual é o custo total de atacado para
60 cópias? Escreva uma expressão que receba o custo total e a imprima.
"""
livros = 24.20
livro_preço = (1 - (4 / 100)) * 24.20
transporte = 3 (livros - 1) * 0.75

custo = livros + livro_preço + transporte

print(custo)


def calcular_custo_total(books):
    preço_capa = 24.20
    desconto = 0.4
    custo_transporte_primeira_copia = 3.00
    custo_transporte_adicional = 0.75

    preco_livro = (1 - desconto) * preço_capa
    custo_transporte = custo_transporte_primeira_copia
    + (books - 1) * custo_transporte_adicional
    custo_total = books * preco_livro + custo_transporte

    return custo_total


# Exemplo com 60 cópias
total_custo_60_copias = calcular_custo_total(60)
print(total_custo_60_copias)
