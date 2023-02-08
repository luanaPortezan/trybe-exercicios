// ------------- Servindo arquivos estáticos com express.static -----------------
// Um outro middleware que já vem com o Express é o express.static. Ele pega o req.path e usa para procurar um arquivo. Se encontrado, ele já responde com esse arquivo. Se não, ele assume que alguém vai responder essa requisição e simplesmente passa para o próximo.

// Configurar esse middleware é simples:

// src/app.js
//...
const app = express();
// configura para procurar o path no diretório ./images
app.use(express.static('./images'));
//....

//Com essa configuração, uma requisição GET /brasao/COR.png vai passar primeiro pelo express.static, que procura por um arquivo em ./images/brasao/COR.png e vai enviá-lo se ele for encontrado. Experimente baixar o brasão do Corinthians e colocá-lo nesse diretório para testar!