"""
Para fazer um agrupamento por essa classificação de nível de experiência,
precisamos criar uma nova coluna que será baseada no salário:

Menor que R$2.000,00, pessoa desenvolvedora estagiária;

Entre R$2.000,00 e R$5.800,00, pessoa desenvolvedora júnior;

Entre R$5.800,00 e R$7.500,00, pessoa desenvolvedora pleno;

Entre R$7.500,00 e R$10.500,00, pessoa desenvolvedora sênior;

Qualquer valor acima do que já foi mencionado a pessoa desenvolvedora é
considerada liderança.
"""
salary = 0

position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

"""
Você pode estar se perguntando: “Posso modificar para uma estrutura switch?”
Resposta: A estrutura condicional if e seu aninhamento com elif e else é tão
simples e legível que não precisamos da estrutura switch.

De olho na dica:”Simples é melhor do que complexo” - Zen do python

Em alguns casos, em que não seja prejudicada a legibilidade, podemos criar
estruturas de mapeamento (dicts) para simplificar o aninhamento de
condicionais. Como o exemplo a seguir:
"""

key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]


"""
--------------------Estruturas de repetição-----------------------
"""

# for

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

for index in range(5):
    print(index)

"""
----------------Compreensão de lista (list comprehension)-------------------
"""

min_rating = 3.0
filtered_restaurants = [
    restaurant
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


# min_rating = 3.0
filtered_restaurants = [restaurant["name"]]  # aqui pedimos somente o nome do
# restaurante
#                        for restaurant in restaurants
#                        if restaurant["nota"] > min_rating]
# print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a"
# nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

# Saída
['Duda', 'Rafa']


quadrados = [x*x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# While CONTINUAR!!!!
