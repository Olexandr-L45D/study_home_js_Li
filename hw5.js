//home-work-5-modal-task-1 (Працює!!!)
//array.map((element, index, array) => {
  // Тіло колбек-функції
//});
//const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
// const planetsInUpperCase = planets.map((planet) => {return planet.toUpperCase()});
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
// Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив імен усіх користувачів(властивість name) із масиву users.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//  У консоль будуть виведені результати її викликів.
//    //
// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Виклик функції з випадковими, але валідними аргументами повертає правильне значення
//
// const getUserNames = (users) => {
//   return users.map(user => user.name);
//  };

//   console.log(getUserNames([
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
//   },
// ])); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
////home-work-5-modal-task-1 (Працює!!!)
//приклад схожого коду з конспекту
// const getUserEmails = (users) => {
//    return getUserEmails.map(lestem => lestem.email);
// };
// //home-work-5-modal-task-2 ((Працює!!!), Виконано!!!)
// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName. Друзі кожного користувача зберігаються у властивості friends. Якщо користувачів, у яких є такий других немає, то функція має повернути порожній масив.
// Поради:
// Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// //
// 
//const getUserNames = (users) => {
//   return users.map(user => user.name);
//  };
// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best);
//
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(users => {return users.eyeColor === color })};

// const getUsersWithFriend = (users, rfiendName) =>
// {
//   return users.filter(users => { return users.friends === includes(friendName) })
// //  };
//  ({name, friends}) => { return users.friends === friends.includes(friendName)});
// const getUsersWithFriend = (users, friendName) => 
//   { return allUsers.filter(({friends}) => friends.includes(friendName)).map(({name}) => name);
// // };
//{ return users.filter(({friends}) => friends.includes(friendName));
// return allUsers.filter(({friends}) => friends.includes(friendName));
// // //home-work-5-modal-task-2 ((Працює!!!), Виконано!!! (доопрацьовую по allUsers))
// const getUsersWithFriend = (users, friendName) => {
//   //  return users.filter(({friends}) => friends.includes(friendName));
//    return users.filter((users, friends) => users.friends.includes(friendName));
// };
// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];
// function getUsersWithFriend(users, friendName) { allUsers.filter( ({name, friends}) => friends.includes(friendName));
// };

 //console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]
// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
//  [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]
 //console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []
 //home-work-5-modal-task-2 ((Працює!!!), Виконано!!!)
//  
 //home-work-5-modal-task-3 ((Працює!!!), Виконано!!! to task!)
 
// Напиши стрілочну функцію sortByDescendingFriendCount(users)
//  , яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив усіх користувачів, відсортованих за спаданням 
// кількостій їх друзів (властивість friends).
// 
// const sortByDescendingFriendCount = (users) => {
//   return users.filter(({ friends }) => friends.length).toSorted((a, b) =>
//      b.friends.length - a.friends.length)
//      .map(({name}) => name); };
// зверху приклад коли тільки список -name - видає без масивів
 //В цьому завданні використання методу filter є непотрібним. Використовуєм лише toSorted()

// const sortByDescendingFriendCount = (users) => {
//     return users.toSorted((a, b) =>
//      b.friends.length - a.friends.length); };

//  console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );
//home-work-5-modal-task-3 ((Працює!!!), Виконано!!! to task!)
// // 
// console.log(sortByDescendingFriendCount([
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ])
// );
// console.log(sortByDescendingFriendCount([]))
// // Візьми код нижче і встав після оголошення своєї функції для перевірки 
// коректності її роботи. У консоль будуть виведені результати її роботи.
// Оголошена змінна sortByDescendingFriendCount
// Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використаний метод toSorted()
// Виклик функції із зазначеним масивом users повертає новий масив користувачів, відсортований за спаданням кількості їхніх друзів
// Виклик функції з випадковими, але валідними аргументами повертає правильне значення
//home-work-5-modal-task-3 ((Працює!!!), Виконано!!!)
// спочатку чорновики
//home-work-5-modal-task-4 ((Працює!!!), Виконано!!!)
//(це без фільтрації по gender-фемелі чи ні ) const getTotalBalanceByGender = (users, gender) => {
//   return clients.filter(({gender}) => gender)
//       .map(({ balance }) => balance).reduce((balanceValue, numb) =>
//         balanceValue + numb);
// }
// users.gender === includes(gender)
// 
// //home-work-5-modal-task-4 ((Працює!!!), Виконано!!!)
// 
// const getTotalBalanceByGender = (users, gender) => {
//   return clients.filter(users => 
//     { return users.gender === gender })
//       .map(({ balance }) => balance).reduce((balanceValue, numb) =>
//         balanceValue + numb);
// }

// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863
