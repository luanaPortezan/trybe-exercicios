// ---------- Retornando 404 com um middleware global customizado -------------

// Às vezes uma rota simplesmente não existe. Uma requisição GET /players vai passar por todos os middlewares em ordem. O express.static não vai ver esse arquivo e vai passar pro próximo middleware. O express.json nunca responde, só tenta ler o req.body se houver. O apiCredentials não vai reclamar se houver um token válido, passando para o próximo middleware. No entanto, agora as rotas são específicas e ninguém responde ao GET /players.

// Nesse caso, o Express já vem com um middleware de erro pronto para lidar com a maior parte dos casos comuns. Foi esse middleware que respondeu todos os erros que você experimentou hoje. Por padrão, ele responde com HTML para qualquer erro. No entanto, se você quiser customizar sua resposta para rotas não tratadas, basta escrever um middleware global no final das configurações do seu app. Por exemplo, aqui vamos evitar enviar o HTML:


// src/app.js

app.put('/teams/:id', validateTeam, ... );
app.delete('/teams/:id', ... );

// se ninguém respondeu, vai cair neste middleware
app.use((req, res) => res.sendStatus(404));

module.exports = app;
