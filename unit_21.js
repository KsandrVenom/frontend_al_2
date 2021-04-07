
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */
let div1 = document.querySelector('.div-1');
let out1 = document.querySelector('.out-1');

function t1() {
  out1.textContent = 'touch';
}

div1.addEventListener('touchstart', t1);

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let div2 = document.querySelector('.div-2');
let out2 = document.querySelector('.out-2');
let counter = 0;

function t2() {
  console.log(event);
  counter++;
  out2.textContent = counter;
}

div2.addEventListener('touchstart', t2);


// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
let div3_1 = document.querySelector('.div-3_1');
let div3_2 = document.querySelector('.div-3_2');
let out3 = document.querySelector('.out-3');


function t3() {
  switch (event.target.innerText) {
    case '3-1':
      out3.innerText = 1;
      break;
    case '3-2':
      out3.innerText = 2;
      break;
  }
}

div3_1.addEventListener('touchstart', t3);
div3_2.addEventListener('touchstart', t3);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */
let div4 = document.querySelector('.div-4');
let b4= document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');

function t4() {
  out4.innerText = 'touch';
}

b4.onclick = () => {
  div4.ontouchstart = t4;
}
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */
let b5= document.querySelector('.b-5');

b5.onclick = () => {
  out4.innerText = '';
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */
let out6 = document.querySelector('.out-6');

div4.ontouchend = () => {
  out6.innerText = 'touchend';
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
let div7 = document.querySelector('.div-7');

function t7() {
  div7.style.backgroundColor = 'red';
}

div7.addEventListener('touchstart', t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let div8 = document.querySelector('.div-8');
let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];



function t8() {
  let random = Math.floor(Math.random() * a8.length);
  div8.style.backgroundColor = a8[random];
}

div8.addEventListener('touchstart', t8);

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let div9 = document.querySelector('.div-9');
let out9 = document.querySelector('.out-9');

function t9() {
  out9.textContent = event.changedTouches.length;
}

div9.ontouchstart = () => {
  t9();
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let div10 = document.querySelector('.div-10');
let w = div10.offsetWidth;

function t10() {
  w++;
  div10.style.width = w + 'px';
}

div10.ontouchmove = () => {
  t10();
}


// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
let div11 = document.querySelector('.div-11');
let out11 = document.querySelector('.out-11');

function t11() {
  out11.textContent = `${event.changedTouches[0]['radiusX']}, ${event.changedTouches[0]['radiusY']}`;

}

div11.ontouchstart = () => {
  t11();
}



// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

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


// ваше событие здесь!!!
