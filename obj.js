//obgact

//function makeArray(firstArray, secondArray, maxLength) {
    
//     let totalmakearray = firstArray.concat(secondArray);
    
//     if (totalmakearray.length > maxLength) {
       
//     return totalmakearray.slice(0, maxLength);
//   } else  {
  
//   return totalmakearray;
//   }
//   }
//2 tams
// // Dont show again!!!
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const author in book) {
//   console.log(author); // Ключ
//   console.log(book[author]);  // Значення властивості з таким ключем
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// // }
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//     console.log(book[key]); // Значення властивості
    
// // }
// //
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]
// //(другий такий же приклад (але я змінив назву змінної, яку ми створюємо в циклі фор для ітерації))
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const totaltitles = [];

// for (const booktitl of books) {
// 	totaltitles.push(booktitl.title)
// }

// console.log(totaltitles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   return(key); // Ключ
//   return(book[key]);  // Значення властивості з таким ключем
// } console.log(book)
//
// // for (key in object)  {умова може містити будь що}
// const obj = { a: 1, b: 2, c: 3 };

// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }

// Logs:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
//тут з конспекту питання(синтаксис крапки і квадратних дужок)
// (!!! Yess!!!)
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"
//   }
// }

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// //const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
//const lastTag = apartment.tags[apartment.tags.length -1];
//тут наступне (перевизначаємо властивість тобто міняємо текст після двокрапки)
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]
// //
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"
//   }
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
//
//Операція додавання нової властивості після створення об'єкта нічим не відрізняється
// від зміни значення вже існуючої властивості.


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// // };

// console.log(book.pageCount); // 836
// // console.log(book.originalLanguage); // "en"
// // !!! Це правильний варіант додавання нових змінних з властивостями в обєкт!!!
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment.area());
// // console.log(apartment.location());
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
// //   [passwordInputName]: "jqueryismyjam"
// // };
//}
//const books = {}
//const titles = [];
// for (const book of books) {
// // // 	titles.push(book.title)
// // }
// (!!! Yess!!!)
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// const obkeys = Object.keys(apartment);
// const obgactprop = Object.values(apartment);
// for (const key of obkeys){
//    keys.push(key);
// };
// for (const it of obgactprop) {
//  values.push(it);
// }
// console.log(keys, apartment[keys]);

// console.log(values, apartment[values]);

// в першу чергу називайте властивості так як того вимагає завдання, інакше не пропустить навіть якщо правильно
// все буде.Ретьорн в циклі не використовується, тільки всередині функції, тому і свариться.Ви маєте у
// змінну keys записати масив ключів, використовуючи Object.keys().Тут же оголосити змінну values зі
// значенням[].Потім циклом for of перебираєте keys і всередині пушите значення властивостей в values.Значення берете через apartment[key].

//Потрібен 1 цикл, в ньому в key буде ключ властивості,
// а в apartment[key] значення кожного ключа.Отже перше пушите в keys, друге - в масив values.
//for (const key in apartment) {
// //console.log(key, apartment[key]);
// //Приклад округлення до цілого числа в домашці
// (три методи: Math.floor() - до меньшого(вниз), 2.
// ceil(num) - більшого, Math.round(num) - до найближчого, тобто просто округлює)
// Math.floor()
// Math.round(num)
  //TASK-2-!!!- Home Work -4 виконано ВІРНО!!!!
// function calcAverageCalories(days) {
  
//   let totaldaycalor = 0;
// for (const dayi of days) {
//      totaldaycalor += dayi.calories;
//   }
//   if (days.length === 0) {
//     return 0;
//   }
//   let totalmedium = totaldaycalor / days.length;
//   return Math.round(totalmedium);
//   //return totaldaycalor / days.length;
// }
  
//   console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 10 },
//     { day: "tuesday", calories: 300 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2999 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7
 

// //Object.values(days["calories"]);
// ЧЕРНОВИК Домашки-2
//  let totalday = [];
//  for (const dai of days) {
//    totalday += dai;
//  }
//   const totalcalories = Object.values(totalday.calories);
//    let totalcalc = 0;
// for (const calori of totalcalories){
//    totalcalc += calori;
//   };
//   return totalcalc / 7;
// //   }
//  getcalcAverCalori() {
//     let totalcalories = 0;
//     for (const dai of this.days) {
//       totalcalories += dai.calories;
//     }
// //   }
// const totalcalories = Object.values(totaldaycalor.calories);
//    let totalcalc = 0;
// for (const calori of totalcalories){
//     totalcalc += calori;
//   };
// //Приклад Поліного коду(4-домашки 2-task (без округлення відповіді))
// function calcAverageCalories(days) {
//   let totalCalories = 0;
//   for (const day of days) {
//     totalCalories += day.calories;
//   }
//   if (days.length === 0) {
//     return 0;
//   }
//   return totalCalories / days.length;
// }
// //
// const profile = {
//   username: "Jacob",
//   playTime: 300,
  
//   getInfo() {
//      let Username = this.username;
//     let amount = this.playTime;
//     return `${Username} has ${amount} active hours!`;
//   },
//   changeUsername(newName) {
//     this.username = newName;
//   },
//    updatePlayTime(hours) {
//     this.playTime += hours;
//   },
// }

//  console.log(profile.getInfo()); // "Jacob has 300 active hours!"

//  profile.changeUsername("Marco");
//  console.log(profile.getInfo()); // "Marco has 300 active hours!"

//  profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
// // // 
// У вас відсутня стрілочна функція, ви просто у змінну записуєте результат виклику фільтра. 
// То що на першому рядку закоментовано - це функція, всередині неї треба використовувати фільтр.

//[
  // {
  //   name: "Moore Hensley",
  //   email: "moorehensley@indexia.com",
  //   eyeColor: "blue",
  //   friends: ["Sharron Pace"],
  //   isActive: false,
  //   balance: 2811,
  //   gender: "male"
  // },
  // {
  //   name: "Sharlene Bush",
  //   email: "sharlenebush@tubesys.com",
  //   eyeColor: "blue",
  //   friends: ["Briana Decker", "Sharron Pace"],
  //   isActive: true,
  //   balance: 3821,
  //   gender: "female"
  // },
  // {
  //   name: "Ross Vazquez",
  //   email: "rossvazquez@xinware.com",
  //   eyeColor: "green",
  //   friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  //   isActive: false,
  //   balance: 3793,
  //   gender: "male"
  // },]

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(users => {
//     return users.eyeColor === color })};
 //const getUsersWithEyeColor = (users, color) => users.filter(color => users.eyeColor === color);
// console.log(getUsersWithEyeColor("users", "blue"))
// console.log(getUsersWithEyeColor("users", "green" ))
// console.log(getUsersWithEyeColor([{
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]))

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if(screenWidth <= sm || screenWidth > md) {
// 	console.log("Mobile or Desktop screen");

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(users =>
//   { return users.age >= minAge || users.age <= maxAge
 
//     })};
// console.log(getUsersWithAge([ {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// // ]))

// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];

// function getProducts(arr) {
//   return arr
//     .filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .toSorted((a, b) => a.localeCompare(b));
//     // .sort((a, b) => a.localeCompare(b));
// }
// console.log(getProducts(products));
// console.log(products)
// //
// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
// ];

// function sortDesc(arr) {
// return arr.toSorted((a, b) => b.year - a.year)
// }
// console.log(sortDesc(books));
// console.log(books)
// // Приклад або оператора порівняння!!!
// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if(screenWidth <= sm || screenWidth > md) {
// 	console.log("Mobile or Desktop screen");
  // у консолі буде пусто, оскільки жодна з умов не перетворилась на true
// }

 // return allUsers.map((users, friendName) => {
    // return allUsers.filter(( users, idx, arr) => arr.includes(friendName));
  // })
  // users.filter
//const getUsersWithFriend = allUsers.filter((users, idx, arry) => arry.includes(users, idx + 1));

  // return allUsers.filter(users => { return users.friends === includes("friendName") })

// const getUsersWithFriend = (users, rfiendName) =>
// {
//   return allUsers.filter(users => { return includes(users.friends) === "friendName" })
//   // return allUsers.filter(users => { return users.friends === includes("friendName") })
// //  };
// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// Оголошена змінна getTotalBalanceByGender
// Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами (users, gender)
// У тілі функції використовується ланцюжок методів у правильному порядку
// Значення параметра users не змінюється
// Якщо значення параметра gender — це рядок "male", функція повертає число 12053
// Якщо значення параметра gender — це рядок "female", функція повертає число 8863
//Виклик функції з випадковими, але валідними аргументами повертає правильне значення
//
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [] },
// ];

// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, value) => acc + value, 0);
//     return {
//       name,
//       average: grades.length ? Math.round(total / grades.length) : total,
//     };
//   });
// }
// console.log(getAverage(students));
.. Приклади метода редьюс (.reduce) (працює з будь якою умовою і повертаю будь якого типу данні!!!)
array.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
}, initialValue);
const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 12
// 
.. Додаткові методи пошуку Фаінд *find* та Сам **some**
// ********find******** \\
// const users = [
//     { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//     { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//     { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//     { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//     { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
//   ];

// const result = users.find(({skills}) => skills.includes("GraphQL"))

// console.log(result)
// ********some********\\

// const isKnow = users.some((user) => user.skills.includes("GraphQL"));
// console.log(isKnow);
const getUsersWithEyeColor = (users, gender) => {
  return users.filter(users => 
{ return users.gender === gender })};

console.log(getUsersWithEyeColor(users, "female"))
console.log(getUsersWithEyeColor(users, "male"))