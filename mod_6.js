//1 mod- 6 -task -1 home work
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return balance;
//     },
//     getDiscount() {
//       return discount;
//     },
//     setDiscount(value) {
//       discount = value;
//     },
//     getOrders() {
//       return orders;
//     },
//     addOrder(cost, order) {
//       balance -= cost - cost * discount;
//       orders.push(order);
//     },
//     // Change code above this line
// //   };
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };
 
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// 
// перше завдання виконано!!! (рефакторінг з додаванням зис - this-!!! )
// // 
// // mod- 6 -task - 2 - home work
// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
// // чорновий
// class Storages {
//     #items;
//      constructor (items) {  this.#items = items;}
//      get items() { return  this.#items; }
//      set items(newItem) { this.#items = newItem}
// }
// class Storage extends Storages {
//     constructor (items, newItem, itemToRemove) {
//     super(items)
//     this.newItem = newItem;
//     this.itemToRemove = itemToRemove;
//     }
//      getItems() { 
//      return  this.items;
//     }
//      addItem(newItem) {
//         this.items.push(newItem);
//    }
//      removeItem(itemToRemove) {
//      this.items = this.items.filter((strin) => {return strin != itemToRemove});
//    }
//    }
// // // доопрацювання (видалити гетер та сетер)
// class Storage {
//     #items;
//      constructor (items) {  this.#items = items;}
     
//      getItems() { 
//      return  this.#items;
//     }
//      addItem(newItem) {
//          this.#items.push(newItem);
//    }
//      removeItem(itemToRemove) {
//      this.#items = this.#items.filter((strin) => {return strin != itemToRemove});
//    }
//    }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// // //YESS!!!! TASK-2 YESS!

//
// ////YESS!!!! MODUL-6- TASK-3 work!
// Властивість value у класі StringBuilder оголошена приватною.У класі StringBuilder оголошений метод getValue
// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.

// class StringBuilder {
//      #value;
//    constructor (value) {  this.#value = value;}
    
//       getValue() {
//         return this.#value;
//       }
//       padEnd(str) {
//         this.#value = `${this.#value}${str}` ;
//       }
//       padStart(str) {
//         this.#value = `${str}${this.#value}` ;
//       }
//       padBoth(str) {
//         this.#value = `${str}${this.#value}${str} `;
//       }
// //     }
 
//  const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
