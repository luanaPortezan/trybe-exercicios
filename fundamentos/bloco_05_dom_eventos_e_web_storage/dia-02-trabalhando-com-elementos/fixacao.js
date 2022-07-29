    // 'BUSCANDO ELEMENTOS:
    // 1. Acesse o elemento elementoOndeVoceEsta.
    let elementoOndeVoceEsta = document.querySelector("elementoOndeVoceEsta");
    // 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
    let pai = elementoOndeVoceEsta.parentElement;
      pai.style.color = 'blue';
    // 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
    let primeiroFilhoDoFilho = document.querySelector("primeiroFilhoDoFilho");
    primeiroFilhoDoFilho.innerText = "primeiroFilhoDoFilho";
    // 4. Acesse o primeiroFilho a partir de pai.
    let primeiroFilho =  pai.firstElementChild;
    // 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
    let primeiroFilho1 = elementoOndeVoceEsta.previousElementSibling;
    // 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
    let atencao = elementoOndeVoceEsta.nextSibling;
    // 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
    let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
    // 8. Agora acesse o terceiroFilho a partir de pai.
    let terceiroFilho2 = pai.lastElementChild.previousElementSibling;


    // CRIANDO ELEMENTOS:
    // 1. Crie um irmão para elementoOndeVoceEsta.
    let pai = document.getElementById('pai'); // Recupere o elemento com o id pai
        let irmaoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento
        irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
        pai.appendChild(irmaoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento com o id `pai`

    // 2. Crie um filho para elementoOndeVoceEsta.
    let elementoOndeVoceEsta1 = document.getElementById('elementoOndeVoceEsta'); // Recupere o elemento com o id elementoOndeVoceEsta
        const filhoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento 
        filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
        elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento `elementoOndeVoceEsta`

    // 3. Crie um filho para primeiroFilhoDoFilho.
    const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); // Recupere o elemento com o id `primeiroFilhoDoFilho`
        const filhoPrimeiroFilhoDoFilho = document.createElement('section'); // Crie um novo elemento
        filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
        primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho); // Adicione o elemento criado como filho do elemento `primeiroFilhoDoFilho`

    // 4. A partir desse filho criado, acesse terceiroFilho.
    const terceiroFilho = filhoPrimeiroFilhoDoFilho
          .parentElement // primeiroFilhoDoFilho
          .parentElement // elementoOndeVoceEsta
          .nextElementSibling; // terceiroFilho
        console.log(terceiroFilho);

    // REMOVENDO ELEMENTOS:
    // 1. Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
    const pai = document.getElementById('pai'); // Primeiro passo: Recupere o elemento com o id pai.
    const todosOsFilhos = pai.childNodes; //Segundo passo: Utilize o .childNodes para retornar uma coleção viva de nós filhos do elemento pai.

    // Terceiro passo: Utilize uma estrutura de repetição para iterar sob o nodeList todosOsFilhos do último ao primeiro elemento. Nesse aspecto, o nodeList se comporta como um array, acessível por índice numérico.
    // - Utilize o .length para verificar o tamanho que todosOsFilhos possui;
    // - Como a primeira posição de um nodeList (assim como no array) é a posição 0, subtraia 1 do tamanho de todosOsFilhos para obter a expressão inicial (índice);
    // - Decremente o index a cada iteração.
    for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) { //
      const currentChildren = pai.childNodes[index]; //Quarto passo: Armazene o filho atual em uma variável.
      //Quinto passo: Caso o id do filhoAtual seja diferente de elementoOndeVoceEsta, remova o filhoAtual.
      if (currentChildren.id !== 'elementoOndeVoceEsta') { // Verifica se o id do filho atual é diferente de 'elementoOndeVoceEsta'
        currentChildren.remove(); // Remove o filhoAtual
      }
    }
      // Sexto passo: Recupere o elemento com o id segundoEUltimoFilhoDoFilho e o remova.
    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); // Recupera o elemento com o id segundoEUltimoFilhoDoFilho
    segundoEUltimoFilhoDoFilho.remove(); // Remove o segundo filho do filho.