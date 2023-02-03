// comando no terminal é: node index.js

const path = require('path');
// console.log('Hello world!');
console.log(path.dirname('/usr//gnome')); //dirname é uma função que foi definida dentro do módulo path
console.log(path.resolve ('usr', 'share', 'gnome')); // a função resolve vai receber uma lista de string
console.log(path.resolve ('/','usr', 'share', 'gnome')); // vai retornar o nome do diretório