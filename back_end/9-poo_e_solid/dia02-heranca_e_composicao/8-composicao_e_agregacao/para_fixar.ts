// Crie uma interface Logger.

// Logger deve possuir um método log, que recebe um parâmetro do tipo string e não retorna nada (void).

// Crie uma classe ConsoleLogger que implementa Logger. Você deve imaginar como o método log deve ser implementado, né? 😁.

// Crie uma classe ConsoleLogger2 igual à classe anterior, apenas a título de exemplo.

// No console.log dentro do método log, diferencie o ConsoleLogger2 do ConsoleLogger.

// Crie uma interface Database.

// Database deve possuir um atributo do tipo Logger.

// Database deve possuir um método save, que recebe dois parâmetros, key e value, ambos strings, e não retorna nada (void).

// Crie uma classe ExampleDatabase que implementa Database.

// ExampleDatabase deve receber o Logger como parâmetro do construtor, e possuir como valor padrão um ConsoleLogger.

// Dentro do método save, chame a função log do Logger passado para o database para fazer o log dos parâmetros passados para a save.

// Crie um objeto de cada um dos Loggers.

// Crie três objetos da ExampleDatabase, cada um dos dois primeiros recebendo um dos Loggers, e o último não recebendo nenhum.

// Utilize todos eles para salvar um conteúdo fictício.