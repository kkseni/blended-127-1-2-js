//Task 1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");
// styles[index] = "classic";

// function logItems(array) {
//     for (let i = 0; i < array.length; i += 1){
//         console.log(`${i+1} - ${array[i]}`);
//     }
// }
// logItems(styles);


//Task 2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

//  const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const login = prompt("Enter your login");
//     if (array.includes(login)) {
//         alert(`Welcome,${login}`)
//     } else {
//         alert("User not found!")
//     }
// }
// checkLogin(logins);

//Task3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//     let total = 0;
//     let totalCount = 0;
//     for (const arg of arguments) {
//         if (typeof arg === "number") {
//             total += arg;
//             totalCount += 1;
//         }
//     }
//     return total / totalCount;
// }
// console.log(caclculateAverage(1, 5, 7, 8, 2));
// console.log(caclculateAverage(1, 'hello', 7, 8, 'word', 2));
// console.log(caclculateAverage(0));

//Task 4
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

//const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sum(array) {

// }

//Task 5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//Task 6
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'












// Task 10
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];
//==================================
// function calcTotalPrice(fruits, fruiteName) {
//   let sum = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruiteName) {
//       sum += fruit.price * fruit.quantity;
//     }
//   }
//   return sum;
// }
// console.log(calcTotalPrice(fruits, "Банан"));
// or
// function calcTotalPrice(fruits, fruitName) {
//     let totalPrice = 0;

//     for (let element of fruits) {
//         if (fruitName === element.name) {
//             totalPrice += element.price * element.quantity;
//         }
//     }
//     if (totalPrice === 0) {
//         return `Product ${fruitName} not found!`;
//     }
//     return totalPrice;
// }


// Додатково, якщо все зробили або хочеться ще, можна дати цю задачу:
// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

// const phonebook = {
//     contacts: [],
//     add(data) {},
//     list() {},
//     filtered(category) {},
//     delete(name) {},
//     updateName(oldName, newName) {},

//     generateId() {
//       return "#" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };

// ++++++++++++++++++++++++++++++++++++++++++

// const phonebook = {
//   contacts: [],
//   add(data) {
//     // const newContact = {
//     //   category: "default",
//     //   ...data,
//     //   id: this.generateId(),
//     //   createdAt: this.getDate(),
//     // };
//     // or
//     const newContact = {
//       name: data.name,
//       email: data.email,
//       category: data.category || "default",
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   list() {
//     console.table(this.contacts);
//   },
//   filtered(category) {
//     const filteredContacts = [];
//     for (const contact of this.contacts) {
//       if (contact.category === category) {
//         filteredContacts.push(contact);
//       }
//     }
//     return filteredContacts.length > 0
//       ? filteredContacts
//       : "Contacts not found in categoty";
//     // or
//     //     const filteredContacts = this.contacts.filter(
//     //       (item) => item.category === category
//     //     );
//     //     console.log(`${category} list:`, filteredContacts);
//   },
//   delete(name) {
//     for (let i = 0; i < this.contacts.length; i++) {
//       if (this.contacts[i].name === name) {
//         this.contacts.splice(i, 1);
//       }
//     }
//     // or
//     // const deletedContact = this.contacts.find((item) => item.name === name);
//     // if (!deletedContact) return alert(`No contact ${name}!`);
//     // this.contacts = this.contacts.filter((item) => item.name !== name);
//   },
//   updateName(oldName, newName) {
//     for (let i = 0; i < this.contacts.length; i++) {
//       if (this.contacts[i].name === oldName) {
//         // this.contacts.splice(i, 1, { ...this.contacts[i], name: newName });
//         this.contacts[i].name = newName;
//       }
//     }
//     // or
//     // const updattedContact = this.contacts.find((item) => item.name === oldName);
//     // if (!updattedContact) return alert(`No contact ${oldName}!`);
//     // updattedContact.name = newName;
//   },
//   generateId() {
//     return "#" + Math.random().toString(36).substring(2, 11);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   category: "friends",
// });

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });
// phonebook.add({
//   name: "Katy",
//   email: "katy@hotmail.com",
//   category: "friends",
// });
// phonebook.delete("Mango");
// phonebook.updateName("Poly", "Sara");
// console.log(phonebook.filtered("friends"));
// phonebook.list();

// ===================================