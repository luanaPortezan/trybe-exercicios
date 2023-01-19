# 1.Crie um Dockerfile utilizando a imagem chuanwen/cowsay.
FROM chuanwen/cowsay:latest

# 2.Defina um ENTRYPOINT para a execução do comando.
# - Observe que o executável cowsay está no diretório /usr/games/
# - Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.
ENTRYPOINT [ "/usr/games/cowsay" ]

# 3.Utilize o CMD para definir uma mensagem padrão.
CMD [ "#VQV Trybe" ]

# 4.Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.
# 5.Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQV TRYBE", para exibir um dragão junto com a vaquinha.