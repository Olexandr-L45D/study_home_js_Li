//1
// // task-1
// const a = {};
// const b = "y";

// const c = {
//     d: 21,
//     e: 34,
//     // x: "Hello"
// };
// c[a] = "Hello"
// console.log(c);
// c[b] = "World"
// console.log(c);
 // Для об'єкту book, послідовно виконай наступні дії:
// 1. Додай поле rating зі значенням 4.8.
// 2. Заміни значення поля genre на "Classic Fiction".
// 3. Заміни значення поля isBestseller на false.
// 4. Виведи за допомогою console.log вміст об'єкта book
//    у форматі ключ:значення,
//    використовуючи Object.keys() і for...of.
// Очікуваний результат
// title: To Kill a Mockingbird
// author: Harper Lee
// genre: Classic Fiction
// yearPublished: 1960
// isBestseller: false
// // rating: 4.8
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Southern Gothic",
//     yearPublished: 1960,
//     isBestseller: true
// };

// //book["rating"] = 4.8;
// book.rating = 4.8;
// console.log(book);
// book["genre"] = "Classic Fiction";
// console.log(book);
// book.isBestseller = false;
// console.log(book);
// const bookcase = Object.keys(book);
// for (const itr of bookcase) {
//     console.log(`${itr}: ${book[itr]} `);
//     //console.log(itr);
// }
// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.
// const user = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }
// function checkKeyInObject(obj, key) {
//     const objs = Object.keys(obj);
//     const objse = Object.values(obj);
//     console.log(objs);
//     console.log(objse);
//    return objs.includes(key);
 
// }
// console.log(checkKeyInObject(user, "names"));
//this
//
// Додати метод getinfo в об'єкт user, який повертатиме інформацію
// про користувача у форматі:
// // `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`
// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'

// }
// user.getinfo = function () {
//     return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`
// };
// console.log(user);
// console.log(user.getinfo());
// console.log(this.name);// так не працює!!!
//
// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення 
// і збережіть його результат у змінній totalCost.
// // Якщо об'єкт cart порожній, то результат має бути 0.
// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };
//
// let totalCost = 0;
// const veles = Object.values(cart);
// for (const itam of veles) {
//     totalCost += itam;
// };
// const costtot = totalCost / veles.length;
// console.log(totalCost);
// console.log(costtot);