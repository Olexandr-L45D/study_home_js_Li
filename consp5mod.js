//знаєш такі методи масивів, як: forEach, map, flatMap, filter, find і every, some, reduce, toSorted
//5 modal study of conspactes
// function greet(name) {
//   return `Welcome ${name}!`;
// }

// function notify(name) {
//   return `Dear ${name}, your room will be ready in 30 minutes`;
// }
// console.log(greet)//lenk
// console.log(notify)//lenk
// console.log(greet("name"))//звичайний виклик
// console.log(notify())//звичайний виклик(замість нейм вставляє андефайнет так як не задано)
// //
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);//lenk  посилання на функцію, яку треба викликати в тілі
// }

// registerGuest("Mango", greet); // "Registering Mango // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"// "Dear Mango, your room will be ready in 30 minutes"
// // //
// function deliverPizza(pizzaName) {
//     //return `Delivering ${pizzaName} pizza.`;
//     console.log(`Delivering ${pizzaName} pizza.`);
// }
// function makePizza(pizzaName) {
//    // return `Pizza ${pizzaName} is being prepared, please wait...`;
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// }
// function makeMessage(pizzaName, callback) {
//    // return `${pizzaName}`;
//    // console.log(`${pizzaName}`);
//   callback(pizzaName);
// }
// makeMessage("Royal Grand", makePizza)// повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// //console.log(makeMessage("Royal Grand", makePizza));
// makeMessage("Ultracheese", deliverPizza);//повертає рядок Delivering Ultracheese pizza.
// //console.log(makeMessage("Ultracheese", deliverPizza));
//
// //функції називаються інлайн-колбеки. Вони будуть
// // // доступні тільки в якості значення параметра і більше ніде в коді.
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });
// Передача Інлайн-Келбек функції!!! ( це запис зі словом function в якосиі другого аргумента функції,
// // яка була раніше створена і викликаєтться в друге)

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   callback(deliverPizza)
//   console.log(`Delivering pizza ${pizzaName}`);
// });// ReferenceError: callback is not defined

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   callback(eatPizza)
//   console.log(`Eating pizza ${pizzaName}`)
// });// ReferenceError: callback is not defined
// ReferenceError: callback is not defined
//     at deliverPizza (consp5mod.js:66:3)
//     at makePizza (consp5mod.js:62:3)
//     at consp5mod.js:65:1
// deliverPizza @ consp5mod.js:66
// makePizza @ consp5mod.js:62
// (anonymous) @ consp5mod.js:65
//conspacts of matod forEach(callback)
// const numbers = [5, 10, 15, 20, 25];
// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }
// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
// Доповни виклик метода forEach, передавши йому колбек-функцію,
// яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.
// //calculateTotalPrice([12, 85, 37, 4])
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (number, index, orderedItems) {
//     //console.log(`Index ${index}, value ${number}`);
//     return totalPrice = number += number;
//   });
//  // return totalPrice;
// }
// //calculateTotalPrice(orderedItems, )
// calculateTotalPrice([12, 85, 37, 4]);//не працює!!, не сумує!!!

// Стрілочні Функції (скорочена функція калбек)
// стрілки створюються як функціональний вираз, і їх необхідно присвоювати
// змінній. Головне в них Ключове слово function не використовується!!
// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }
// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// //
// // console.log();

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100));

// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;
// //стрілочною функцією - неявне повернення (тобто різниця без фігурних дужок {}

// console.log(calculateTotalPrice(5, 100));

// console.log(calculateTotalPrice(8, 60));
//Якщо необхідно зібрати всі аргументи в масив, використовується операція rest(...args).
// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

// add("dol", "ifo"); // [1, 2, 3]
//
// //келбек в стрілочній функції (поки не працює!!)
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   return totalPrice;
// }

// const calculateTotalPrice = (orderedItems) => {
//   //return totalPrice;
//  };
//  orderedItems.forEach(function (item) {
//      let totalPrice = 0;
//     return totalPrice += item;
//   });

// // orderedItems.forEach((item) => {
// //    let totalPrice = 0;
// //    return totalPrice += item;
// //   });
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// // //келбек в стрілочній функції (поки не працює!!)
//

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// //келбек в стрілочній функції (OK! OK! pрацює!!)
// //
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
// // // //
// function getUserEmails(users) {
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//    },
//   ]

// const getUserEmails = users.map(user => user.email);

// const getUserEmails = (users) => {
//    return getUserEmails.map(lestem => lestem.email);
// // };
// console.log(getUserEmails([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//    },
//   ]));
// // Yess!!!
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(bok => bok.genres);



// .. метод фыльтерт values.filter - фыльтуе за вказаною умовою в круглих дужках
// array.filter((element, index, array) => {
//   // Тіло колбек-функції
// // });
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// const negativeValues = values.filter(nambar => nambar < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // console.log(positiveValues); // [51, 27, 21, 42]
// //numb % 2 === 0 - це перевірка на парні числа, тобто число ділиться на 2 без остачі
// numb % 2 !== 0 - це перевірка на непарні числа, якщо є залишок при діленні числа на 2 число непарне
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(numb => numb % 2 !== 0 );// працює!! [17, 61, 47, 73]
// const oddNumbers = numbers.filter(numbe => numbe % 2 === 0);//видає парні!!!
// console.log(evenNumbers);// [17, 61, 47, 73]
// console.log(oddNumbers);

// Метод - reduce(callback, initialValue)
// // По суті це стрілочна функція з методом РЕДУЦ - .reduce
// приклад: const total = [2, 7, 3].reduce((previousValue, number) => {
// 1 - й параметр(previousValue) — це акумулятор, тобто проміжний результат.Значення, яке поверне колбек - функція на поточній ітерації,
//     буде значенням цього параметра на наступній ітерації;
// 2-й параметр — поточний елемент масиву;
// 3-й параметр — індекс поточної ітерації;
// 4-й параметр — посилання на вихідний масив.
// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву:
// //
// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// console.log(total); // 12
// //
// const totals = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 100);
// console.log(totals); // 12
// //

// const totales = [2, 7, 3, 5].reduce((previousValue, number) => {
//   return previousValue * number;
// }, 10);
// console.log(totales); // 12
// Початкове значення акумулятора 0 (будь яке число що за фігурними дужками - в другому прикладі 100)
// перша ітерація колбек-функції 0 + 2 поверне 2
// друга ітерація колбек-функції 2 + 7 поверне 9
// третя ітерація колбек-функції 9 + 3 поверне 12
// //треба розбиратись з цим методом, не до кінця працює!!!
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
//  };// звичайний приклад!
//  const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // const totalPlayTime = playtimes;
// // const averagePlayTime = totalPlayTime / playtimes.length;
// // приклад з РЕДУЦ - (playtimes.reduce) !
// const averagePlayTime = playtimes.reduce((otalPlayTime, numb) => {
//     return otalPlayTime / playtimes.length;
//  }, );
// console.log(averagePlayTime);
// console.log(players);
// останній метод в 5-му модулі: toSorted() - сортує за зростанням (за замовчуванням,
//  але по принціпу порівняння за символами юнікоду, тобто якщо однозначні і двузначні
//   числа починаються однаково то іх і ставе по черзі)
//   const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// // .. приклад ту сортед з конспекту:
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // const ascendingReleaseDates = releaseDates;
// // const alphabeticalAuthors = authors;
// const ascendingReleaseDates = releaseDates.toSorted();
// const alphabeticalAuthors = authors.toSorted();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
// Yess!!!
// //
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// // const ascendingReleaseDates = releaseDates;
// // const descendingReleaseDates = releaseDates;
// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(descendingReleaseDates);
// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
// // // matod localeCompare (if a to b - c -d)
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const totalgetUserNames = getUserNames.map((users, ind, ) => {
//   const totalName = Object.values(totalgetUserNames.name);
//   return totalName;
// });

// //const letgetUserNames = getUserNames.map(users => users.name)

// const getUserNames = users.map(user => this.name)
// //getUserNames(users)

// const getUserNames = (users) => {
//    return getUserNames.map(user => user.name);
// // };
// //const users =
//  [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   }
// ];
//const getUserNames = users.map(user => user.name);