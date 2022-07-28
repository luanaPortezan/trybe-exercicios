// Requisito 1 - Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício).
function changeText() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "A porta de entrada para sua carreira em tecnologia";
}
changeText();

// Requisito 2 - Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeSquareToGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = "rgb(76,164,109)";
}
changeSquareToGreen();

// Requisito 3 - Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function changeSquareToWhite() {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = "white";
}
changeSquareToWhite();

// Requisito 4 - Crie e execute uma função que corrija o texto da tag <h1>.
function changeNameTitle() {
  let nameCorrection = document.getElementsByClassName('title')[0];
  nameCorrection.innerHTML = "Exercício 5.1 - JavaScript";
}
changeNameTitle();

// Requisito 5 - Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
function changeToUpperCase() {
  let paragraphAll = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphAll.length; index += 1) {
    paragraphAll[index].innerHTML = paragraphAll[index].innerHTML.toUpperCase();
  }
}
changeToUpperCase();

// Requisito 6 - Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function displayContent() {
  let displayParagraph = document.getElementsByTagName('p');
  for (let index = 0; index < displayParagraph.length; index += 1) {
    console.log(displayParagraph[index].innerHTML);
  }
}
displayContent();
