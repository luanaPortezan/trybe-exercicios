# Ex: 1
# def countdown(n):
#     print(n)
#     countdown(n - 1)    # chamada recursiva


# countdown(5)

# Ex: 2
# def countdown(n):
#     if n == 0:     # caso base
#         print("FIM!")
#     else:
#         print(n)
#         countdown(n - 1)    # caso recursivo


# countdown(5)

# Ex: 3
# Nome da função e parâmetro:
#     Condição de parada

#     Chamada de si mesma

# Ex: 4
def factorial(n):
    if n <= 1:    # caso base
        return 1
    else:
        return n * factorial(n - 1)    # caso recursivo
