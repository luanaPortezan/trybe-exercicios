---------- Introdução ao TSConfig ----------

O que define que um projeto é TypeScript é a presença de um arquivo de configuração TSConfig. O arquivo tsconfig.json possui as variáveis de configuração que definirão como o nosso código será compilado.

Obs: A melhor prática para a utilização do Typescript em um projeto é instalá-lo como uma devDependency por meio do comando npm i -D typescript@4.4.2 e utilizá-lo por meio do npx. Isso garante que todas as pessoas que forem compilar o projeto o façam utilizando a mesma versão do TypeScript, e não a versão instalada em suas respectivas máquinas.

É possível criar manualmente o arquivo tsconfig.json ou, como boas pessoas desenvolvedoras que somos, podemos utilizar as ferramentas que a linguagem nos fornece para gerá-lo automaticamente, já com as principais configurações. Depois, podemos escolher quais queremos utilizar.

Para gerar o tsconfig.json vamos utilizar o tsc. Sim, a ferramenta de compilação da linguagem TypeScript também traz essa incrível funcionalidade.

Entre em um diretório vazio de sua escolha e execute um dos seguintes comandos no terminal.

Caso tenha instalado o compilador globalmente em sua máquina:

Copiar
tsc --init
OU caso queira utilizar o tsc como um executável npx:

Copiar
npx tsc --init
Um arquivo tsconfig.json será gerado no diretório com o seguinte conteúdo:

Copiar
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    [...]
    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include
    [...]

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./",                                     /* Specify the root folder within your source files. */
    [...]

    /* JavaScript Support */
    [...]

    /* Emit */
    "outDir": "./",                                      /* Specify an output folder for all emitted files. */
    [...]

    /* Interop Constraints */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules.
    [...]

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    [...]
  }
}
Veja que fantástico: o arquivo gerado traz as principais configurações e um comentário à frente de cada linha dizendo o que aquela configuração em específico faz e quais são os valores aceitos. Além disso, para fechar com chave de ouro, também traz uma URL explicando mais sobre o arquivo tsconfig.json.

Agora, vamos conhecer um pouco mais do que já vem configurado no arquivo tsconfig.json e o que precisamos configurar para criar nosso primeiro projeto em Typescript!

module: especifica o sistema de módulo a ser utilizado no código JavaScript que será gerado pelo compilador como sendo o CommonJS;
target: define a versão do JavaScript do código compilado como ES6;
rootDir: define a localização raiz dos arquivos do projeto;
outDir: define a pasta onde ficará nosso código compilado;
esModuleInterop: habilitamos essa opção para ser possível compilar módulos ES6 para módulos CommonJS;
strict: habilitamos essa opção para ativar a verificação estrita de tipo;
include: essa chave vai depois do objeto CompilerOptions e com ela conseguimos incluir na compilação os arquivos ou diretórios mencionados; e
exclude: essa chave também vai depois do objeto CompilerOptions e com ela conseguimos excluir da compilação os arquivos mencionados.
Não vamos explicar cada uma das outras configurações. À medida que utilizarmos novas configurações, vamos falar sobre aquelas que escolhemos. Caso queira saber mais, é uma ótima oportunidade para exercitar a aprendizagem ativa acessando o link do arquivo😉.

Também podemos utilizar uma configuração base para o ambiente JavaScript (versão do Node) que estamos utilizando provida pela própria equipe de desenvolvimento do TypeScript por meio de um repositório no GitHub. Não existe uma versão base para todos os ambientes JavaScript, apenas para os mais recentes. Com node, é possível utilizar a partir da versão 12.

Por exemplo, se estivermos desenvolvendo um projeto que usará a versão 16 do Node, podemos utilizar o módulo base @typescript/node16.

Copiar
npm i -D @tsconfig/node16@1.0
Então o tsconfig.json ficaria parecido com isso:

Copiar
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"], /* aqui estamos incluindo todos os arquivos dentro da pasta src */
  "exclude": ["node_modules", "**/*.spec.ts"] /* aqui estamos excluindo a pasta node_modules e os arquivos de teste */
}
Isso permite que nosso tsconfig.json concentre as configurações únicas para o nosso projeto, e não todas as configurações para o nosso ambiente de execução JavaScript.