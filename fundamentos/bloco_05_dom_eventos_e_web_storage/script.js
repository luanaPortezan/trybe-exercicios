function changeText() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "A porta de entrada para sua carreira em tecnologia";
};
changeText();

function changeSquareToGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = "rgb(76,164,109)";
}
changeSquareToGreen();