//масив обєктів і робота з масивом of об'єктів
// //в цому прикладі скдадаємо всі рейтинги і виводимо середній
// const books = [
//     {
//         title: "The Last Kingdom", author: "Bernard Cornwell",
//         rating: 8.2
//     },
//     {
//         title: "Beside Still Waters", author: "Robert Sheckley",
//         rating: 9
//     },
//     {
//         title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky",
//         rating: 6.8
//     }
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

// Тепер метод getBooks повертатиме масив об'єктів. А метод addBook очікує в параметрі не рядок,
// // а об'єкт книги і додає його в масив у властивості books.
// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   }
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
// console.log(bookShelf());
// console.log(addBook());

// Оголосимо новий метод getAvarageRating в об'єкті
// Оголосимо змінну totalRating для зберігання загального рейтингу
// Переберемо масив книг за посиланням this.books у циклі for...of
// На кожній ітерації додамо до загального рейтнгу рейтинг книги
// Після завершення циклу повернемо результат ділення загального рейтингу на кількість книг
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

// //     return totalRating / this.books.length;
// //   },
// };

// bookShelf.getAvarageRating(); // 7
// // метод поєднаяння обєктів в один суцільний (це створюєш новий і записуєш
// //список з трьома крапками попереду)правило приорітета останнього
// //(тобто війде значення яке приніс останній елемент з трьома крапками)
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
//Виклик `countProps({ name: "Mango", age: 2 })` повертає `2`
// Функція `countProps` приймає наступні параметри: `object`
// Виклик `countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })` повертає `3`
// Функції присвоєно ім'я `countProps`
// Виклик `countProps({})` повертає `0`
// Оголошена функція `countProps(object)`
// Функція використовує метод `Object.keys()`
//

 // Завдання з kонспекту з методом Object.keys(), то ж дістаю keys(ключі: в першому (name, age) 
//  і в другому(mail, isOnline, score)) а потім сумую іх
// //   //ПРАЦЮЄ!!!
// function countProps(objects) {
  
//   const objkeys = Object.keys(objects);
//   let propCount = [];
//   for (const iter of objkeys) {
//      propCount.push(iter);
//   }
//   return propCount.length;
// }

// console.log(countProps({ name: "Mango", age: 2 })); //повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))// повертає 3
// //
// Завдання з kонспекту з методом object.hasOwnProperty(key))
  //ПРАЦЮЄ!!!
//function countProps(object) {
  // let propCount = 0;
  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }
 // return propCount;
//}
//console.log(countProps());
//console.log(countProps({ name: "Mango", age: 2 }));
//console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))// повертає 3

// function isEnoughCapacity(products, containerSize) {
// const totalsumfruts = Object.values(products)
//    let totalproperty = 0;
// for (const ite of totalsumfruts) {
//     totalproperty += ite;
//   }
//   return totalproperty <= containerSize;
// }
//
 // Завдання з конспекту з методом Object.values(), то ж дістаю властивості а потім сумую іх
// //   //ПРАЦЮЄ!!!
// function countTotalSalary(salaries) {
//   let totalSalary = 0;

// const salarProp = Object.values(salaries)
// for (let nameprop of salarProp) {
//   totalSalary += nameprop;
// }
//   return totalSalary;
//   }
//   console.log(countTotalSalary({}));
//  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))// повертає 400

 //function frutsCapacity(newobgact) {
//   const totalsumfruts = Object.values(newobgact)
//   let totalsumznach = 0;
//   for (const ite of totalsumfruts) {
//     totalsumznach += ite;
//   }
//   if (totalsumfruts.length <= containerSize) {
//     return `true`;
//   } else if(totalsumfruts.length > containerSize) {
//     return `false`;
 // }
 
//  //KONSPAKT
//  const atTheOldToad = {
// potions: [],
// getPotions() {
//   return `List of all available potions`;
// },
//  addPotion(potionName) {
//    return `Adding ${potionName}`;
//  }
// }

//console.log(atTheOldToad.getPotions())// повертає рядок "List of all available potions"
//console.log(atTheOldToad.addPotion("Invisibility"))// повертає рядок "Adding Invisibility"
//console.log(atTheOldToad.addPotion("Power potion"))// повертає рядок "Adding Power potion"
// //
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     "List of all available potions";
//     return this.potions;
//   },
  
// };
// console.log(atTheOldToad.getPotions())//повертає рядок "Speed potion", "Stone skin"
// //
// //Працює!!!Завдання додати до масива в кінець через пуш "Invisibility" та Power potion"
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.getPotions())//повертає potions
// console.log(atTheOldToad.addPotion("Invisibility"));
// // console.log(atTheOldToad.addPotion("Power potion"));

// Оголосимо новий метод getAvarageRating в об'єкті
// Оголосимо змінну totalRating для зберігання загального рейтингу
// Переберемо масив книг за посиланням this.books у циклі for...of
// На кожній ітерації додамо до загального рейтнгу рейтинг книги
// Після завершення циклу повернемо результат ділення загального рейтингу на кількість книг
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
// //
// //In this Konspakt 
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// bookShelf.getBooks(); // поверне "Returning all books"
// bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
// bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
// //   },
// // };
// const p =
//     'Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком. Певне справді файна була!';

// console.log(p.replace('файна', 'смачна'));
// // Очікуваний вивід: "Гей, хлопці, не вспію - на ґанку ваша смачна їжа знищується бурундучком. Певне справді файна була!"
// //
// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// Створення NEW об'єкта
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

//  const atTheOldToad = {
// potions: [],
// getPotions() {
//   return `List of all available potions`;
// },
//  addPotion(potionName) {
//    return `Adding ${potionName}`;
//  }
// }
// console.log(atTheOldToad.getPotions())// повертає рядок "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility"))// повертає рядок "Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion"))// повертає рядок "Adding Power potion"

    
// // приклад з this

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {},
// };

// Після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
//   в масиві potions останнім елементом буде цей об'єкт

// // //
// // const atTheOldToad = {
// //   potions: ["Speed potion", "Stone skin"],
// //   getPotions() {
// //     return this.potions;
// //   },
// //   addPotion(potionName) {
// //     this.potions.push(potionName);
// //   },
// // };
// // atTheOldToad.addPotion("Invisibility"),
// //   у властивості potions буде масив
// // ["Speed potion", "Stone skin", "Invisibility"]
// // atTheOldToad.addPotion("Power potion"),
// // //   у властивості potions буде масив
// // // ["Speed potion", "Stone skin", "Invisibility", "Power potion"]
// // 
// Функція відфільтровую по кольору очей (тобто таким чином можна задати пошук по любому з признаків)
// Якщо значення параметра `color` - це `"green"`, функція повертає масив 
// об'єктів користувачів з іменами `Ross Vazquez` і `Elma Head`
// Якщо значення параметра `color` - це `"brown"`, функція повертає масив
//  об'єктів користувачів з іменами `Blackburn Dotson` і `Sheree Anthony`
// const users = [
//   {
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
// ]

//const getUsersWithEyeColor = (users, color) => {
 // return users.filter(users => 
    // { return users.eyeColor === color })};
//console.log(getUsersWithEyeColor(users, "green"))
//  //  console.log(getUsersWithEyeColor(users, "brown"))
//     const getUsersWithEyeColor = (users, gender) => {
//       return users.filter(users => 
//     { return users.gender === gender })};
   
//    console.log(getUsersWithEyeColor(users, "female"))
//    console.log(getUsersWithEyeColor(users, "male"))
//    //
//    const isKnow = users.some((user) => user.skills.includes("GraphQL"));
//    const result = arr.filter((skill, idx, array) => !array.includes(skill,idx + 1));
//    //
   //В цьому завданні використання методу filter є непотрібним. Використовуєм лише toSorted()
  //  function calculateTotalPrice(orderedItems) {
  //   // let totalPrice = 0;
  //   // orderedItems.forEach();
  //   // return totalPrice;
  
  //   orderedItems.forEach(function (number, index){
  //     let totalPrice = 0;
  //     console.log(`Index ${index}, value ${number}`)
      
  //     return totalPrice = number + index + 1;
  //     //console.log(`Index ${index}, value ${number}`);
  //   }); };

  // //console.log(calculateTotalPrice([12, 85, 37, 4])) //повертає 138
  // calculateTotalPrice([164, 48, 291])// повертає 503
  // //const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
// ПРИКЛАДИ 6 го Модуля (контекст та методи)
// приклад шаблона застосування звернення зис this
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked")); //повертає рядок "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); //повертає рядок "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Smokid"));
// 
// // приклад методу апплі -.apply (в роботі з зис -this.)
// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"
//
// PROTOTYP
// // приклад в суворому режимі працює!- в штмл задаєм class="strict">
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent) 
//   child.name = "Jason";
// child.age = 27;

// ;
// console.log(parent.hasOwnProperty("surname"));// Виклик parent.hasOwnProperty("surname") повертає true
// console.log(child);// Виклик parent.hasOwnProperty("heritage") повертає true
// console.log(child.hasOwnProperty("name"));// Виклик child.hasOwnProperty("name") повертає true
// console.log();// Звернення до child.name повертає "Jason"
// // // Yess!!!
// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice(){
//     return this.price;
//   }
//   changePrice(newPrice){
//     this.price = newPrice;
//   }
// }
//  const getPrice = new Car();
// const changePrice = new Car()
//
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
//

// class Car {
//     constructor(brand, model, price) {
//       this.brand = brand.brand;
//       this.model = brand.model;
//       this.price = brand.price;
//     }
//   }
//   const examplcar = new Car({
//     brand: "Audi",
//     model: "Q3",
//    price: 36000
//   });
//  console.log(new Car({ brand: "BMW", model: "X5", price: 58900 })); //утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
//  console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
//  console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
// //
// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
//
// //працює!!!
// class Car {
//   #brand;
//   constructor(params) {
//     //this.brand = params.brand;
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   getBrand() {
//      return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// const examplcar = new Car({
//       brand: "Audi",
//       model: "Q3",
//      price: 36000
//     });

// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));//` утвориться об'єкт `{ model: "Murano", price: 31700 }`
// //В екземпляра відсутня публічна властивість `brand`
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }))//утвориться об'єкт { model: "Q3", price: 36000 }`

// //
// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email повертає з класу (щоб можна було змінити)
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email (змінює на значення нового дочірнього!!!)
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// метод сплайс для видалення через індекс оф

// метод filter().
// Но бывает так, что вам нужно удалить все вхождения значения (или условия) из массива. 
// В таком случае, вашим новым другом станет метод filter().
// Этот метод принимает функцию в качестве аргумента и сохраняет значения, соответствующие 
// true в функции filter. Чтобы отфильтровать определенное значение, необходимо проверить 
// отрицательные индексы.

// let numbers = [1,2,3,4];
// numbers = numbers.filter((n) => {return n != 3});
// console.log(numbers); // [1,2,4]


// let stnumbers = ["Nanitoids", "Prolonger", "Antigravitator"];
// stnumbers = stnumbers.filter((str) => {return str != "Prolonger"});
// console.log(stnumbers); // [1,2,4]
//
// LESSON - 6 Modules (лекція 6- го модуля)
// *****Приватні властивості та методи***** \\
// class User {
//     #password;
//     constructor(name, password) {
//         this.name = name;
//         this.#password = password;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }
    
// }

// const student = new User('Alice', 'qwerty111');
// console.log(student)
// console.log(student.#password)
// student.showName()

// ******Геттери і сеттери****** \\

// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//         return this.#email
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }

// const student = new User('Alice', 'qwerty111', 'test@gmail.com');
// console.log(student.email);

// student.email = 'new@gmail.com';

// console.log(student.email);

// *****Статичні властивості та методи***** \\
// Розглянемо на практичному завдані (Task-3)

// **********Наслідування класів********* \\

// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }

// class Student extends User {
//     constructor(name, password, email, points) {
//         super(name, password, email)
//         this.points = points;
//     }
//     getPoints() {
//         console.log(`${this.name} has ${this.points} points`);
//     }
// }

// class Teacher extends User {
//     constructor(name, password, email, skills) {
//         super(name, password, email)
//         this.skills = skills;
//     }
//     getPoints() {
//         console.log(`${this.name} has ${this.points} points`);
//     }
// }

// const student = new Student('Alice', 'qwerty111', 'test@gmail.com', 38);
// console.log(student) 
// student.showName()
// student.getPoints()

// *******Task-1****** \\
// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, height } = {}) {
//     this.#width = width;
//     this.#height = height;
//   }

//   get width() {
//     return this.#width;
//   }

//   set width(newWidth) {
//     if (typeof newWidth === "number" && newWidth > 0) {
//       this.#width = newWidth;
//     } else {
//       console.log("Ширина повинна бути числом та більша за 0");
//     }
//   }
//

// *******Task-2******* \\
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являється випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);
// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }
//   getFullName() {
//     return `${this.#name} ${this.#surname}`;}
// }
// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;}
//   getCourse() {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const diff = currentYear - this.year;
//     if (currentYear < this.year) {
//       return "😫";
//     }
//     if (diff > 5) {
//       return "Студент являється випускником";
//     }
//     return `${diff} курс`;
//   }
// }
// const student = new Student("Петрик", "Пяточкин", 2028);
// console.log(student);
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse()); 
// console.log(student.getFulljo());//поверне 4

// *******Task-3******* \\
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//   static counter = 0;
//   static addHero() {
//     this.counter += 1; // Hero.counter
//     console.log(`Кількість героїв ${this.counter}`);
//   }
//   constructor(name) {
//     this.name = name;
//     this.level = 1;
//     this.health = 200;
//     Hero.addHero();
//   }
//   attack() {
//     console.log("Attack with 10 damage");
//   }

//   heal() {
//     this.health += 10;
//   }
// }

// const bloodseker = new Hero("Bloodseker");
// const shadow = new Hero("Shadow Fiend");
// const pudge = new Hero("Pudge");
// console.log(bloodseker);
// console.log(bloodseker.heal());
// console.log(bloodseker);
// console.log(Hero.counter);
//
//study
//*******Task-4******* \\
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {

// }

// const instance = new BankAccount()
// instance.deposit(100)
// instance.deposit(1200)
// instance.withdraw(1000)
// console.log(instance);
