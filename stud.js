
// function makeArray(firstArray, secondArray, maxLength) {
    
//     let totalmakearray = firstArray.concat(secondArray);
    
//     if (totalmakearray.length > maxLength) {
       
//     return totalmakearray.slice(0, maxLength);
//   } else  {
  
//   return totalmakearray;
//   }
//   }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
// //if (totalmakearray.length < maxLength)
//   Як об'єднати більше двох масивів
//   const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
// //
// Як отримати рандомне значення масиву
// const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву
//
//function sayHello(city) {
//   // console.log(city);
//   console.log(this);
//   console.log(`Hello my name ${this.name}`);
// }
// console.log(sayHello)

// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// //   sayHello: sayHello
//   sayHello(city) {
//     // console.log(city);
//     console.log(this);
//     // console.log(`Hello my name ${this.name}`);

//     return `Hello my name ${this.name}`
//   },
// };
// document.querySelector('h1').textContent = user.sayHello("Lviv");
// console.log(user.sayHello)

// const userA = {
//   name: "Kate",
//   sayHello: sayHello,
// };
// userA.sayHello();
//Task - 2 (7 Lessons)
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів 
//де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.
// //
// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//     const values = Object.values(obj);
//     let total = 0;

//     for (const value of values) {
//       total += value;
//     }

//   // console.log(total);
//        return `Count of players ${values.length}, average time ${total / values.length}`

//   let countPlayers = 0;
//   let totalMinutes = 0;

//   for (const key in obj) {
//     totalMinutes += obj[key];
//     countPlayers += 1;
//   }
//   return `Count of players ${countPlayers}, average time ${totalMinutes / countPlayers}`
// }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];

// function getUsers(arr, bookName) {
//   const userNames = [];

//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       userNames.push(user.name);
//     }
//
//  return userNames.join(', ')
// }
// console.log(getUsers(friends, "Harry Potter"));

// function getTotalAge(arr) {
//   let totalAge = 0;

//   for (const user of arr) {
//     // console.log(user.hasOwnProperty('age'))

//     // if (user.hasOwnProperty("age")) {
//     //   totalAge += user.age;
//     // }

//     // if(user.age){
//     //     totalAge += user.age;
//     // }

//     if ("age" in user) { // key in object
//         totalAge += user.age
//     }
//   }

//   return totalAge;
// }
// console.log(getTotalAge(friends));

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету (перевірити чи є властивість points !!!)
//hogvarts = {
//     const hogvarts = {
//         griffindor: [
//     { name: "Harry",points: 17,
//     },
//     { name: "Hermiona",points: 19,
//     },
//     {name: "Ron", points: 14,
//     },
//   ],
//   slizerin: [
//     { name: "Draco", points: 17,
//     },
//     { name: "Goyl", points: 14,
//     },
//     {name: "Crabbe", points: 5,
//     },
//   ],
//   getUserList(faculty) {
//     if (!(faculty in this)) {
//       return "Facult not found 😥";
//     }
//     const users = [];
//     for (const student of this[faculty]) {
//       users.push(student.name);
//     } 
//     return users.join(', ') + '.'
//   }
// // };

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList("slitherin"));

// console.log(hogvarts.getTotalPoints('griffindor'));
// console.log(hogvarts.getTotalPoints('slizerin'));
// console.log(hogvarts.getTotalPoints('slitherin'));