//З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст 
// елемента (примінити element.textContent) (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
//  ul#categories
//  li.item
//  const title = document.querySelector('ul');
// console.log(title)
//console.log(...title)
// ******Пошук HTML елементів за допомогою querySelectorAll****** \\
//<!--Пошук HTML елементів за допомогою querySelectorAll  -->
// const dynamicArr = document.getElementsByClassName('.item')
//console.log(dynamicArr);
// 
// // частина першого виконана
// // const items = document.querySelectorAll('.item')
// const categories = document.querySelectorAll('.item').length;
// console.log(`Number of categories : ${categories}`);

// const itemTitle =  document.querySelector(`h2`).textContent;
// console.log(`Category: ${itemTitle}`)

// const itemTitle2 =  document.querySelectorAll(`h2`).textContent;
// console.log(`Category: ${itemTitle2}`)

// const itemTitle3 =  document.querySelectorAll(`h2`).textContent;
// console.log(`Category: ${itemTitle3}`)
// const elementNumber = document.querySelectorAll(`li`).length; 
// console.log(elementNumber);

// let categori = categories.forEach((ite, key) => ite[key] = ite )
// // console.log(categori);
// const categories = document.querySelectorAll('.item').length;
//  console.log(`Number of categories : ${categories}`);
// const items = document.querySelectorAll('.item')
// items.forEach(function(item) {
//     const itemTitle = item.querySelector(`h2`).textContent;
//     console.log(`Category: ${itemTitle}`);
//     const elementNumber = item.querySelectorAll('ul li').length;
//     console.log(`Elements : ${elementNumber}`);
// })

//function createMarkup(arr) {
//return arr.map(categories)}
//console.log(createMarkup())
//console.log(items)
// const items = document.querySelectorAll('.js-item')
// console.log(items)
// Перетворення колекції до масиву

// console.log(Array.from(items))
// console.log([...items])
// // 
// const images = [
//     {
//       url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat",
//     },
//     {
//       url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//     },
//     {
//       url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running",
//     },
//     {
//       url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//       alt: "Alpine Spring Meadows",
//     },
//     {
//       url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//       alt: "Nature Landscape",
//     },
//     {
//       url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//       alt: "Lighthouse Coast Sea",
//     },
//   ];
// const list = document.querySelector(".gallery");

// function createMarkup(arr) {
  
//   return arr.map(
//     ({ url, alt}) => `
//     <li>
//         <img src="${url}" alt="${alt}"  width="400">   
//     </li>
// `).join(''); 
// };

//  list.insertAdjacentHTML('beforeend', createMarkup(images))
// list.style.listStyle = 'none';
// list.style.fontSize = '20px';
// list.style.width = '500px'

// //таск друге виконане
//tASK-3
// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"
// //
//  const inputuzertext = document.querySelector(`.js-uzertext`);
//  inputuzertext.addEventListener('input', handlerinput);

//    function handlerinput(evt) {
//   const span = document.querySelector('span')
// span.textContent = evt.currentTarget.value.trim();

//  if (evt.currentTarget.value.trim() === "") {
//      span.textContent = "Anonymous"
//  }
// }

// цей спосіб для заміни значення по класам:
// inputuzertext.setAttribute("js-uzertextspan", "js-uzertext");
// console.log(inputuzertext.getAttribute("js-uzertext")); // New text
// let inputtext = document.querySelector(`.js-uzertext`).textContent;
// function newinputtext(params) {
//     return `Hello,${inputtext}`;    
// }
// console.log(newinputtext());
// }
// const span = document.querySelector('span')
// span.textContent = inputtext;
//console.log(newinputtext());



//<input type="text" onchange="alert(this.value)"></input>

// Метод element.setAttribute(nameAttribute, value)
// Метод приймає два аргументи: рядок nameAttribute з іменем атрибута, який потрібно встановити або змінити, та value зі значенням, яке цьому атрибуту треба присвоїти. Метод встановлює або змінює значення зазначеного атрибута для вказаного HTML-елемента element.

// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt")); // Amazing nature
// приклад алерт: //<input type="text" onchange="alert(this.value)"></input>
// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те,
// що 'All form fields must be filled in'. 
//Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, 
// очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset?.

// // const form = document.querySelector(".login-form");
// form.append(placeholder) //щоб додати повідомлення що щось не заповнене
// placeholder.textContent = 'All form fields must be filled in'
// для очищення від пробілів додаю .value.trim();
// 4- тий таск .trim();<input type="text" onchange="alert(this.value)"></input>
// 4- тий таск
const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerGetform);
function handlerGetform(evt) {
  evt.preventDefault();
  const { email, password} = evt.currentTarget.elements; 
  const datase = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  if ( email.value.trim()  === "") {
    alert("All form fields must be filled in") 
}
if ( password.value.trim()  === "") {
    alert("All form fields must be filled in")  
}
  console.log(datase);
  form.reset()
}

function handlerinput(evt) {
      const span = document.querySelector('span')
    span.textContent = evt.currentTarget.value.trim();
    
     if (evt.currentTarget.value.trim() === "") {
         span.textContent = "Anonymous"
     }  

// другий метод через вбудований формдейт
// function handlerGetform(evt) {
//   evt.preventDefault();

// //   console.dir(evt.currentTarget.elements);
// const formData = new FormData(evt.currentTarget);

// const datase = {}
// formData.forEach((value, key) => datase[key] = value)
// console.log(data)
// }
// 
// таск -5 домашки 7
// при натисканні на кнопку має змінюватись кольор(рандомно)
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color
//  і задає це значення кольору текстовим вмістом для span.color.
// Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
// На <body> і span.color значення одного й того самого кольору
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"
// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"
// // Додаємо новий data-атрибут data-action
// clickbutton.dataset.action = "start";
// stopBtn.dataset.action = "stop";
//

// clickbutton.dataset.action = "start";
// stopBtn.dataset.action = "stop";
// Таск 5 хом 7 працює!! (Поліна допомогла)
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// //}
// const clickbutton = document.querySelector('.change-color');
// const backcolor = document.querySelector('.color');
// clickbutton.addEventListener('click', handlerClick);
// function handlerClick() {
//   document.body.style.backgroundColor = getRandomHexColor();
//   backcolor.textContent = document.body.style.backgroundColor;
// }
// // of POLINA in Study
// const button = document.querySelector('.change-color');
// const backColor = document.querySelector('.color');
// button.addEventListener('click', handlerClick);
// function handlerClick() {
//   document.body.style.backgroundColor = getRandomHexColor();
//   backColor.textContent = document.body.style.backgroundColor;
// }

//   console.log(getRandomHexColor(clickbutton));

// KONSPEKT
// backgroundColor=function(el,colors){
//   el=document.querySelectorAll(el);
//   colors=colors[parseInt(Math.random()*colors.length)];
//   for(i=0;i<el.length;i++)
//   el[i].style.backgroundColor=colors;
// }
// backgroundColor('#test',['red','blue','#32ae00','#ae3265']);
// // Випадковий колір фону веб-сторінки:
// backgroundColor('body',['#FFDAB9','#F0F8FF','#778899']);
// console.log(backgroundColor('body',['#FFDAB9','#F0F8FF','#778899']));



// const refs = {
//     body: document.body,
//     btnStart: document.querySelector('button[data-action = "start"]'),
//     btnStop: document.querySelector('button[data-action = "stop"]'),
// }
// const INTERVAL_DELAY = 1000;
// let intervalId = null;
// refs.btnStart.addEventListener('click', changeColor);
// refs.btnStop.addEventListener('click', onBtnStop);
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// function changeColor() {
//     intervalId = setInterval(() => {
//         refs.body.style.backgroundColor = getRandomHexColor[randomIntegerFromInterval(0, colors.length - 1)];
//     }, INTERVAL_DELAY);
//     refs.btnStart.disabled = true;
// };
// function onBtnStop() {
//     clearInterval(intervalId);
//     refs.btnStart.disabled = false;
// }
//
// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   '#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548',
// //  ];
// const refs = {
//     body: document.body,
//     btnStart: document.querySelector('button[data-action = "start"]'),
//     btnStop: document.querySelector('button[data-action = "stop"]'),
// }
// const INTERVAL_DELAY = 1000;
// let intervalId = null;

// refs.btnStart.addEventListener('click', changeColor);
// refs.btnStop.addEventListener('click', onBtnStop);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function changeColor() {
//     intervalId = setInterval(() => {
//         refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
//     }, INTERVAL_DELAY);
//     refs.btnStart.disabled = true;
// };

// function onBtnStop() {
//     clearInterval(intervalId);
//     refs.btnStart.disabled = false;
// }

  
// const clickMe = document.querySelector(".js-click");
// const box = document.querySelector(".js-box");
// let step = 0;

// clickMe.addEventListener("click", handlerClick);

// function handlerClick(evt) {
// console.log(evt.currentTarget)
//   step += 50;
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// }
// <div id="controls">
// const clickbutton = document.querySelector('.change-color');
// const backcolor = document.querySelector('.color');
// clickbutton.addEventListener('click', handlerClick);
// function handlerClick() {
//   document.body.style.backgroundColor = getRandomHexColor();
//   backcolor.textContent = document.body.style.backgroundColor;
// }
//<div id="boxes" width="30" height="30"></div>

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const inputNumber = document.querySelector('.js-uze-number');
// inputNumber.addEventListener('input', handlerinput);
// let stepDiv = 0;
// let createDiv = 0;
//   function handlerinput(evt) { 
// const refs = {
//       boxeses: document.querySelector('#boxes'),
//       btnCreate: document.querySelector('.js-but-create'),
//       btnDestroy: document.querySelector('.js-but-delete'),
//   }
//    const INTERVAL_DELAY = 1000;
//   let intervalId = 1;
//   refs.btnCreate.addEventListener('click', onCreate);
//   //refs.btnDestroy.addEventListener('click', onDelete);
//   // ця додає елемент(div)
//     function onCreate() {
// createDiv += 1;
// const newElement = document.createElement('div');
// newElement.textContent = 'Новий box';
// const creatnewDiv = document.querySelector('#boxes');
// creatnewDiv.appendChild(newElement);
//   }
// }
// // ця змінює кольор(та має додавати по 10рх)
// let box = document.querySelector('#boxes');
// const clickbutton = document.querySelector('.js-but-create');
// const backcolor = document.querySelector('#boxes');
// clickbutton.addEventListener('click', handlerClick);
//    function handlerClick() {
//     document.body.style.color = getRandomHexColor();
//     backcolor.textContent = document.body.style.color;
//     stepDiv += 10;
//   box.style.width = `${stepDiv}px`;
//   box.style.height = `${stepDiv}px`;
//    backcolor.style = box.style.width;
//    backcolor.style = box.style.height;
//   }
// // ця перевіряє на число
//   function createBoxes(amount) {
//   if  (evt.currentTarget.value <= 100 ) {
//     input.textContent
//     // input.textContent = evt.currentTarget.value;
// }
// // ця чисте input
// }
// function destroyBoxes() {
//   input.reset()
// }
// // 6- тий таск 7- го модуля працює!!!
// const refs = {
//   boxeses: document.querySelector('#boxes'),
//   btnCreate: document.querySelector('.js-but-create'),
//   btnDestroy: document.querySelector('.js-but-delete'),
//   inputNumber: document.querySelector('.js-uze-number')
// }
// refs.btnCreate.addEventListener('click', onCreateBtnClick);
// refs.btnCreate.addEventListener('click', createBoxes);
// refs.btnDestroy.addEventListener('click', onDestroyBtnClick);
// const boxesDiv = document.getElementById('boxes');
//    function onCreateBtnClick(event) {
//     const inputValue = refs.inputNumber.value.trim();
//     if  (inputValue <= 1 || inputValue >= 100 ) {
//       alert(`enter the correct value`)
//       return ;}
//       createBoxes(inputValue);
//    }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// function createBoxes(amount) {
//  let sizes = 30;
//  const elements = [];
//  for (let i = 0; i < amount; i++) {
//   const newElement = document.createElement('div');
//   const creatnewDiv = document.querySelector('#boxes');
//   creatnewDiv.appendChild(newElement);
//   newElement.style.width = `${sizes}px`;
//   newElement.style.height = `${sizes}px`;
//   sizes += 10;
//   newElement.style.backgroundColor = getRandomHexColor();
//  }
//   elements.push('newElement');
// }
// boxesDiv.textContent = ''; // або boxesDiv.innerHTML = '';

// function onDestroyBtnClick(event) {
//   boxesDiv.textContent = '';
//  }
 
// function destroyBoxes() {
//   inputValue = "";
// }
// 6- тий таск 7- го модуля працює!!!



//  це нижче додаткові приклади коду
// refs.inputNumber.reset()
//console.log(createBoxes(inputValue));
//elements.push(newElement);
// // ця змінює кольор(та має додавати по 10рх)
// let box = document.querySelector('#boxes');
// const clickbutton = document.querySelector('.js-but-create');
// const backcolor = document.querySelector('#boxes');
// clickbutton.addEventListener('click', handlerClick);
//    function handlerClick() {
//     document.body.style.color = getRandomHexColor();
//     backcolor.textContent = document.body.style.color;
//     stepDiv += 10;
//   box.style.width = `${stepDiv}px`;
//   box.style.height = `${stepDiv}px`;
//    backcolor.style = box.style.width;
//    backcolor.style = box.style.height;
//   }
const refs = {
    boxeses: document.querySelector('#boxes'),
    btnCreate: document.querySelector('.js-but-create'),
    btnDestroy: document.querySelector('.js-but-delete'),
    inputNumber: document.querySelector('.js-uze-number')
  }
  refs.btnCreate.addEventListener('click', onCreateBtnClick);
  refs.btnDestroy.addEventListener('click', onDestroyBtnClick);
  
  const boxesDiv = document.getElementById('boxes');
  
     function onCreateBtnClick(event) {
      const inputValue = refs.inputNumber.value.trim();
      if  (inputValue <= 1 || inputValue >= 100 ) {
        alert(`enter the correct value`)
        return ;}
        createBoxes(inputValue);
     }
     
  function onDestroyBtnClick(event) {
    destroyBoxes();
   }
   
  function createBoxes(amount) {
    destroyBoxes();
   let sizes = 30;
   const elements = [];
   for (let i = 0; i < amount; i++) {
    const newElement = document.createElement('div');
    const creatnewDiv = document.querySelector('#boxes');
    creatnewDiv.appendChild(newElement);
    newElement.style.width = `${sizes}px`;
    newElement.style.height = `${sizes}px`;
    sizes += 10;
    newElement.style.backgroundColor = getRandomHexColor();
   }
    elements.push('newElement');
  }
   
  function destroyBoxes() {
    boxesDiv.textContent = '';
  }
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }