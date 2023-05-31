'''
Crie uma função recursiva que recebe como parâmetro um inteiro n e mostre uma
escada com n degraus de * no terminal:

input 5
output:
*
**
***
****
*****
'''


def show_asterisks(n):
    if n == 1:
        return '*'
    return '*' + show_asterisks(n - 1)


def show_asterisk_steps(n):
    if n == 1:
        print('*')
        return
    show_asterisk_steps(n - 1)
    print(show_asterisks(n))
    #   print(n * '*')


show_asterisk_steps(5)


'''
Crie uma função recursiva que recebe como parâmetro um inteiro n e mostre uma
escada invertida com n degraus de * no terminal:

input 5
output:
*****
****
***
**
*
'''


def show_asterisk_steps_reverse(n):
    if n == 1:
        print('*')
        return
    print(show_asterisks(n))
    #   print(n * '*')
    show_asterisk_steps_reverse(n - 1)


show_asterisk_steps_reverse(5)
