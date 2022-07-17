'use strict';

const squareField = document.getElementById('square-field');
const square = document.createElement('div');
square.classList.add('square-box');

let squareNumber = 2500;
let hold = false;

//Calculate the square root
function getCssGrid(squareNumber) {
  let square = Math.sqrt(squareNumber);
  return 'repeat' + '(' + square + ',' + '2fr' + ')';
}

//Change grid template in CSS depending on set parameters and square root
squareField.style.gridTemplateColumns = getCssGrid(squareNumber);

//Add multiply DIVs in root DIV
for (let i = 1; i <= squareNumber; i++) {
  squareField.appendChild(square.cloneNode(true));
}

//Event delegation for use eventListener for change color every select DIVs
function getChangeColor(event) {
  let div = event.target.closest('div');
  if (!div) return;
  if (!squareField.contains(div)) return;
  div.classList.add('highlight');
}

//Solution for drawing effect (click and hold)
squareField.addEventListener('mousedown', function () {
  hold = true;
});

squareField.addEventListener('mousemove', function (event) {
  if (hold === true) {
    getChangeColor(event);
  }
});

window.addEventListener('mouseup', function () {
  hold = false;
  console.log(hold);
});
