'use strict';

const squareField = document.getElementById('square-field');
const btnColor = document.querySelector('.btn--color');
const btnRandomCol = document.querySelector('.btn--random');
const btnEraser = document.querySelector('.btn--eraser');

const btnClear = document.querySelector('.btn--clear');
const colorPicker = document.querySelector('#color');
const range = document.querySelector('#range');
const rangeLabel = document.querySelector('.range-label');
const btnOn = document.querySelector('.btn--on');
const btnOff = document.querySelector('.btn--off');

let condition = false;
let currentMode = 'color';

//create nrw grid
function newGrid() {
  if (condition) {
    squareField.innerHTML = '';

    squareField.style.setProperty('grid-template-columns', `repeat(${range.value}, 1fr)`);
    squareField.style.setProperty('grid-template-rows', `repeat(${range.value}, 1fr)`);

    for (let i = 0; i < range.value * range.value; i++) {
      const div = document.createElement('div');
      div.classList.add('square');
      squareField.appendChild(div);
    }
  }
}
//create random color
function getRandomColor() {
  const randomR = Math.floor(Math.random() * 256) + 1;
  const randomG = Math.floor(Math.random() * 256) + 1;
  const randomB = Math.floor(Math.random() * 256) + 1;
  return `rgb(${randomR},${randomG},${randomB})`;
}

//create colorGrid

function colorGrid(e) {
  if (currentMode === 'color' && e.target.classList.value === 'color') {
    e.target.style.backgroundColor = colorPicker.value;
  } else if (currentMode === 'rainbow' && e.target.classList.value === 'color') {
    e.target.style.backgroundColor = getRandomColor();
  } else if (currentMode === 'eraser' && e.target.classList.value === 'color') {
    e.target.style.backgroundColor = '#939eb031';
  }
}

//event listeners
btnClear.addEventListener('click', function () {
  squareField.innerHTML = '';
  colorPicker.value = '#464b55';
  newGrid();
});

btnEraser.addEventListener('click', function () {
  currentMode = 'eraser';
});

btnColor.addEventListener('click', function () {
  currentMode = 'color';
});
btnRandomCol.addEventListener('click', function () {
  currentMode = 'rainbow';
});

range.addEventListener('input', function () {
  let value = this.value;
  rangeLabel.textContent = `${value} x ${value} `;
  newGrid();
});

//mouse draw events

let isDrawing = false;
const divSquare = document.querySelector('.main-section div');

divSquare.addEventListener('mousedown', function (e) {
  isDrawing = true;
  e.target.classList.replace('square', 'color');
  colorGrid(e);
});

divSquare.addEventListener('mousemove', function (e) {
  if (isDrawing) {
    isDrawing = true;
    e.target.classList.replace('square', 'color');
    colorGrid(e);
  }
});

divSquare.addEventListener('mouseup', function () {
  if (isDrawing) {
    isDrawing = false;
  }
});

btnOn.addEventListener('click', function () {
  condition = true;
  newGrid();
  this.style.background = 'rgba(255, 0, 0, 0.307)';
});
btnOff.addEventListener('click', function () {
  condition = false;
  squareField.innerHTML = '';
  btnOn.style.background = '';
});
