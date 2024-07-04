// ПРАКТИКА з 8 -го Модуля (бібліотеки, методи loading="lazy", *Throttle -повільне(з циклами преривання)
//  та Debounce* - виводе через вказаний проміжок часу в мілісекундах Мають особливий синтаксис запису так як це методи з
// бібліотеки :npm/lodash@4.17.21/lodash.min.js". Приклад запису з АНДЕРСКОРОМ: inputRef.addEventListener('input', _.throttle(handlerSearch, 1000, )

// Приклад лінивого(ПОВІЛЬНОГО) завантаження зображень (а так само і відео) з використанням додаткового атрибуту,
//  який ми додаємо в розмітку при створенні її в ДЖ С файлі в тегу імедж або 
// айфрейм: <iframe src"" framborder= "0" loading="lazy">(для відео)
// для цього вставляємо : loading="lazy"
// Тестовий масив для lazy-loading
// const cats = [
//   "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
//   "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
//   "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
//   "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
//   "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
//   "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
//];
// const list = document.querySelector(".js-cats");
// const markup = cats
//   .map(
//     (src) => `
//    <li>
//     <img src="${src}" alt="cat" width="300" loading="lazy" />
//     <p>   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus minus ullam totam sint ipsa reiciendis, accusamus voluptate neque, quia deleniti maxime, illum soluta error. Quam tenetur minima deleniti possimus explicabo.
//    Soluta non consequatur animi obcaecati deleniti assumenda! Culpa assumenda perspiciatis obcaecati reprehenderit odio explicabo deleniti praesentium, sapiente veritatis saepe quisquam temporibus quae distinctio doloremque ad autem maiores quia laboriosam magnam.
//    Rem, libero impedit quia sed ad id veniam explicabo iusto aut expedita eveniet asperiores illo porro officia non quidem quos modi tempora. Sunt, repudiandae dolorum dolores nulla fugiat sit temporibus.
//    Eligendi iste assumenda quod, obcaecati sint dolorem reprehenderit id a saepe adipisci eveniet rerum mollitia provident odio minima esse exercitationem quis repellat consectetur repudiandae sapiente voluptas necessitatibus. Exercitationem, dolor corporis?
//  </p>
//    </li>`
//   )
//   .join("");

//   list.insertAdjacentHTML('afterbegin', markup)
//   console.log(cats.length)
//
//
// *****************************Throttle & Debounce***************************** \\
// https://bundlephobia.com/

//const inputRef = document.querySelector(".js-search");

// inputRef.addEventListener('input', _.throttle(handlerSearch, 1000, {
//     leading: true,
//     trailing: false,
// }))
// function handlerSearch(evt){
//     console.log(evt.target.value)
// }

// console.log(_)

// inputRef.addEventListener(
//   "input",
//   _.debounce(handlerSearch, 1000, {
//     leading: true,
//     trailing: true,
//     maxWait: 400,
//   })
// );

// function handlerSearch(evt) {
//   console.log(evt.target.value);
// }
// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

// const contentRef = document.querySelector(".js-content");
// const historyX = [];
// const historyO = [];
// const combination = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [1, 5, 9],
//   [3, 5, 7],
//   [3, 6, 9],
// ];

// let player = "X";

// contentRef.addEventListener("click", handlerStep);
// contentRef.insertAdjacentHTML("afterbegin", createMarkup());
// function handlerStep(evt) {
//   if (evt.target.textContent !== "") {
//     return;
//   }

//   const id = Number(evt.target.dataset.id);
//   const minStepCount = 3;
//   let isWinner = false;

//   evt.target.textContent = player;

//   if (player === "X") {
//     historyX.push(id);
//     isWinner = historyX.length >= minStepCount ? checkWinner(historyX) : false;
//   } else {
//     historyO.push(id);
//     isWinner = historyO.length >= minStepCount ? checkWinner(historyO) : false;
//   }

//   if (isWinner) {
//     const instance = basicLightbox.create(`
//         <div class="box">
//             <h2>Player - ${player} is winner</h2>
//         </div>
//     `);
//     instance.show();
//     resetGame();
//     return;
//   }

//   const isDraw = [...contentRef.children].every(
//     (item) => item.textContent !== ""
//   );

// //   const isDrawSecond = historyX.length + historyO.length === 9

//   if (isDraw) {
//     const instance = basicLightbox.create(`
//         <div class="box">
//             <h2>😰 Is Drow</h2>
//         </div>
//     `);
//     instance.show();
//     resetGame();
//     return;
//   }
//   player = player === "X" ? "O" : "X";
// }

// function checkWinner(arr) {
//   return combination.some((item) => item.every((id) => arr.includes(id)));
// }

// function resetGame() {
//   contentRef.innerHTML = createMarkup();
//   player = "X";
//   historyO.splice(0);
//   historyX.splice(0);
// }
// function createMarkup() {
//   let markup = "";
//   for (let i = 1; i <= 9; i += 1) {
//     markup += `<li class="item" data-id="${i}"></li>`;
//   }

//   return markup;
// }
//

// Це вже практика з ментором в суботу!
// При натисканні на кнопку "SHOW ME", потрібно в консоль 
// вивести значення, яке будемо вводити в інпут.

// goit tutor_14 14:38 (дано розмітку нижче)
//     <div>
//         <p class="taskTitle">ЗАВДАННЯ 1</p>
//         <button id="alertButton">SHOW ME</button>
//         <input id="alertInput" type="text" />
//     </div>
//
// const inputs = document.querySelector("#alertInput");
// const useBtn = document.querySelector("#alertButton");

// useBtn.addEventListener("click", onInputVelue);
// function onInputVelue() {
//     console.log(inputs.value);  
//  }
//(ціє окремою функцією визначаю яке мені потрібно значення для перевірки)- перевіряємо властивість інпута, яка містить значення самого імпута, яке ввів користувач)
// inputs.addEventListener("input", onInputVelue);
// console.dir(inputs); (перевіряємо властивість інпута, яка містить значення самого імпута, яке ввів користувач)
// function onInputVelue() {
//    return inputs.value  
// }
//console.log(onInputVelue());

// 
// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// // на "Приховати".

// <input id="passwordInput" type="text">
// <button id="passwordButton">Приховати</button>

// const inputsUs = document.querySelector("#passwordInput");
// const useBtnClic = document.querySelector("#passwordButton");

// useBtnClic.addEventListener("click", onInputPassword);
// function onInputPassword() {
//     if (inputsUs.type === "text") {
//         useBtnClic.textContent = "SHOW"
//         inputsUs.type = "password"
//     } else {
//         useBtnClic.textContent = "Clouset"
//         inputsUs.type = "text"
//     }
    // if (inputsUs.type === "text") {
    //     useBtnClic.textContent = "Показати"
    //     inputsUs.type = "password"
    // } else {
    //     useBtnClic.textContent = "Приховати"
    //     inputsUs.type = "text"
    // }   
//}


// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const btnDecrcris = document.querySelector("#decrease");
// const btnIncrease = document.querySelector("#increase");
// const box = document.querySelector("#box");
// btnDecrcris.addEventListener("click", onbtDecrcrisClick );
// btnIncrease.addEventListener("click", onbtnIncreaseClick );

// // console.dir(box);
// function onbtDecrcrisClick() {
//     box.style.width = `${box.offsetWidth - 10}px` 
//     box.style.height = `${box.offsetHeight - 10}px`
    
// }
//  function onbtnIncreaseClick() {
//     box.style.width = `${box.offsetWidth + 10}px` 
//     box.style.height = `${box.offsetHeight + 10}px`
//  }
// При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// const form = document.querySelector(".checkboxForm");
// const list = document.querySelectorAll(".checkboxWrapper");
// const input = document.querySelector("#checkbox1");
// form.addEventListener("submit", onFormSubmit);
// // console.dir(input);
// // checked
// function onFormSubmit(event) {
//     event.preventDefault()
//   const filtretlist =  [...list].filter(item => item.lastElementChild.checked);
//   filtretlist.forEach(element => element.remove() ); 
// }

// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.
//
// const input = document.querySelector(".contactsFilter");
// const uls = document.querySelector(".contacts");
// input.addEventListener("input", onChenge);

// function onChenge() {
//     const value = input.value.toLowerCase();
//     const filterlist = [...uls.children].filter(ev => ev.textContent.toLowerCase().includes(value))
//     uls.innerHTML = "";
//     uls.append(...filterlist)
// }

//  Додавання прослуховувача подій на кожен елемент 
// Отримай колір квадратика по якому було здійснено клік

// const container = document.querySelector('.js-container');

//[...container.children].forEach((box) => {
//   box.addEventListener('click', handlerGetColor)
// })

// function handlerGetColor(evt){
//   const color = evt.currentTarget.dataset.color;
// console.log(color)
// }
// 
