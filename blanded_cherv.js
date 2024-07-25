//
// // Перевірити чи містить даний масив, хоча б одне число більше 20.
// const numbers = [20, 16, 11, 13, 15, 25];
// const numberse = numbers.some(elment => elment > 20);
// console.log(numberse); 
//task-2
// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]   
// const names = ['Ivan', 'Maria', 'Anna'];
// function sayHi(ary) {
//     const name = names.map(name => `${name} привіт! `)
//     return name;
// };
// console.log(sayHi(names));

// Напиши функцію, котра приймає масив користувачів і id.
// У масиві користувачів потрібно знайти людину з заданим id
// і повернути його ім'я. Якщо користувача не було знайдено
// функція повертає повідомлення
// "Користувача з таким id не знайдено"
// const users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
//   function finduser(arr, id) {
//     const user = arr.find(use => use.id === id );
//     // console.log(user); {id: 2, name: "Pete"},
//     if (user) {
//         return user.name;
//     } else {
//         return "Користувача з таким id не знайдено"
//     }
//   }
//   console.log(finduser(users, 2));
//   console.log(finduser(users, 5));
//
// Зібрати в allTopics масив всіх предметів всіх курсів.
// //Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
// const courses = [
//     {
//       name: "Basic HTML+CSS",
//       topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//     },
//     {
//       name: "Intermediate HTML+CSS",
//       topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//     },
//     {
//       name: "Basic JavaScript",
//       topics: [
//         "VSCode",
//         "Type system",
//         "Loops",
//         "Function",
//         "Git",
//         "Conditions",
//         "Classes",
//         "GitHub",
//         "DOM",
//       ],
//     },
//     {
//       name: "Intermediate JavaScript",
//       topics: [
//         "VSCode",
//         "NPM",
//         "Bundlers",
//         "Transpiling",
//         "Git",
//         "Promises",
//         "AJAX",
//         "GitHub",
//       ],
//     },
//   ];
   
    
//         const allTopics = courses.flatMap(element => element.topics)
//         .filter((element, index, array) => array.indexOf(element) === index)
    
//         console.log(allTopics);
//
// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//     regNumber: "AE8345FEDAS",
//     brand: "HUAWEI", 
//     showInfo(country) {
//         console.log(`${country} ${this.regNumber} ${this.brand}`);
//     }
// }
// const tel_2 = {
//     regNumber: "AO8518FEGHT",
//     brand: "SAMSUNG", 
// }
// tel.showInfo("China")
// tel.showInfo.call(tel_2, "South Korea")
// tel.showInfo.apply(tel_2, ["South Korea"])

//  const telinfo = tel.showInfo.bind(tel_2, "South Korea")
//  telinfo()
//  console.log(telinfo);
//
//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
// //і методом calculateArea() для підрахунку площі прямокутника.
// class Rectangle{
//     constructor (height, width){
//         this.height = height;
//         this.width = width;
//     }
//     calculateArea(){
//   return this.height * this.width;
//     }
// }
// const rectangle = new Rectangle(20, 35);
// // console.log(rectangle.calculateArea());
// 
// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//       this.#login = login;
//       this.#email = email;
//     }
//     get login() {
//     return this.#login
//     }
//     get email() {
//       return this.#email
//     }
    
//     set login(newLogin) {
//     this.#login = newLogin
//     }
//     set email(newEmail) {
//     this.#email = newEmail
//     }
//   }
   
//   const ivan = new Client ("Ivan", "ivan@gmail.com")
//   console.log(ivan.login);
   
//  ivan.login = "Mariya" //this.#login = newLogin
//   console.log(ivan.login);
//   ivan.email = "Mariya@gmail.com"
//   console.log(ivan.email);
  //Напиши клас Rectangle який створює об'єкт
  //з ​​властивостями height, width
  //і методом calculateArea() для підрахунку прлощі прямокутника.
  // class Rectangle {
  //   constructor(height, width) {
  //     this.height = height;
  //     this.width = width;
  //   }
  //   calculateArea() {
  //     return this.height * this.width;
  //   }
  // }
  // const rectangle = new Rectangle(20, 35);
  // console.log(rectangle.calculateArea());
  // 
  // Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".
// const tel = {
//     regNumber: "AE8345FEDAS",
//     brand: "HUAWEI",
//     showInfo(country) {
//         console.log(`${country} ${this.regNumber} ${this.brand}`);
//     }
// }
// const tel_2 = {
//     regNumber: "AO8518FEGHT",
//     brand: "SAMSUNG",
// }
// tel.showInfo("China")
// tel.showInfo.call(tel_2, "South Korea")
// tel.showInfo.apply(tel_2, ["South Korea"])
// const telInfo = tel.showInfo.bind(tel_2, "South Korea");
// telInfo()
// console.log(telInfo);
// 
// Поверніть список товарів з усіх виконаних замовлень.
// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];
// const result = orders.filter(elem => elem.status === 'completed')
//   .flatMap(elem => elem.products)
// console.log(result);
// 
// дано масив, треба порахувати сумму чисел з age: 
// // Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців(метод .reduce збирає до акумулятора і сумує )
//   const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]
// // Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.
// function getTotalBoysYears(friend) {
//   return friend.filter((elem) => elem.sex === "m").reduce((acc, elem) => acc + elem.age, 0)
// }
// console.log(getTotalBoysYears(friends));
// Зібрати в allTopics масив всіх предметів всіх курсів.
// 
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];
// const allTopic = courses.flatMap((element) => element.topics)
//   .filter((elem, i, arr) => arr.indexOf(elem) === i)
// console.log(allTopic);
// 
// 
// додатково методи як чорновики
// get getItems() {
//   return this.#items;
//  }
// set addItem(newItem)
// {
//     this.#items = item.push(newItem)
// //  }
//const getItems = Object.create(Storage) {}
 // get items() {return this.#items;}
  // set items(newItem) {this.#items = items.push(newItem)}
//   // constructor({items} = {}) {
// class Storage {
//    //#items;
//     constructor ({items}) { // this.#items = items;
//     this.items = items;
//   }
//     getItems() { // return  this.#items;
//     return  this.items;
//    }
//     addItem(newItem) {
//       this.items = items.push(newItem)
//   }
//     removeItem(itemToRemove) {
//     this.items = this.items.filter((str) => {return str != itemToRemove});
//   }
//   }
// class Storage {
//   #items;
//    constructor ({items}) {  this.#items = items;}
//    get items() { return  this.#items; }
//    set items(newItem) { this.#items = newItem}
//    getItems() { // return  this.#items;
//    return  this.items;
//   }
//    addItem(newItem) {
//       this.items.push(newItem);
//  }
//    removeItem(itemToRemove) {
//    this.items = this.items.filter((str) => {return str != itemToRemove});
//  }
//  }
// // експорт бібліотеки 
// let userSelectedDate = [];
// const currentDate = new Date();//potochna
// const targetDate = new Date(date of uzer);
// let differants = (targetDate - currentDate)/1000;