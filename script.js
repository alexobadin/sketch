'use strict';

const squareField = document.getElementById('square-field');
const square = document.createElement('div');
square.classList.add('square-box');

let squareNumber = 2500;

function getCssGrid(squareNumber) {
  let square = Math.sqrt(squareNumber);
  return 'repeat' + '(' + square + ',' + '2fr' + ')';
}

function getChangeColor(event) {
  let div = event.target.closest('div'); // (1)

  if (!div) return; // (2)

  if (!squareField.contains(div)) return; // (3)

  div.classList.add('highlight');

  // (4)
}

for (let i = 1; i <= squareNumber; i++) {
  squareField.appendChild(square.cloneNode(true));
}
squareField.style.gridTemplateColumns = getCssGrid(squareNumber);

console.log(getCssGrid(squareNumber));

let hold = false;
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
