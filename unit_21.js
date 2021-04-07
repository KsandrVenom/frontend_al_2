'use strict';

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images
let imageBig = document.querySelector('.div-12-max img');
const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function nextFunction() {
  if (count < 5) {
    images[count].classList.remove('active-img');
    count++;
    imageBig.src = `img/${count + 1}.png`;
    images[count].classList.add('active-img');
  }
  else {
    images[count].classList.remove('active-img');
    count = 0;
    imageBig.src = `img/${count + 1}.png`;
    images[count].classList.add('active-img');
  }
}

function prevFunction() {
  if (count > 0) {
    images[count].classList.remove('active-img');
    count--;
    imageBig.src = `img/${count + 1}.png`;
    images[count].classList.add('active-img');
  }
  else {
    images[count].classList.remove('active-img');
    count = 5;
    imageBig.src = `img/${count + 1}.png`;
    images[count].classList.add('active-img');
  }
}

function resetFunction() {
  images[count].classList.remove('active-img');
  count = 0;
  imageBig.src = `img/${count + 1}.png`;
  images[count].classList.add('active-img');
}
