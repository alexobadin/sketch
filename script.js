'use strict';

const squareField = document.getElementById('square-field');
const square = document.createElement('div');
square.classList.add('square-box');
let squareNumber = 16;

function getCssGridSquareProperty(squareNumber) {
  let square = Math.sqrt(squareNumber);
  return 'repeat' + '(' + square + ',' + '2fr' + ')';
}

console.log(getCssGridSquareProperty(squareNumber));

squareField.style.gridTemplateColumns = getCssGridSquareProperty(squareNumber);

for (let i = 1; i <= squareNumber; i++) {
  squareField.appendChild(square.cloneNode(true));

  console.log((i = +i));
}

// squareField.style.gridTemplateColumns = 'repeat(2, 2fr)';
