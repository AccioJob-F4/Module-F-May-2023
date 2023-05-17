// Asynchronous Javascript
// multiple tasks at the same time / tasks gets executed parallely

// Callbacks
// A function that is passed as an argument to another function

// function doSomethingAsync(callback) {
//   setTimeout(function () {
//     console.log("Task Complete");
//     callback();
//   }, 5000);
// }

// doSomethingAsync(function () {
//   console.log("Callback called");
// });

// Promises
// Way of handling asynchronous operations in Javascript

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task Complete");
//   }, 3000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(promise);

// Async-Await
// newer syntax to handle asynchronous operations in Javascript, it allows you to write asynchronous code that looks and behaves like it is a synchronous code, making it easier to read and write

// async function doSomethingAsync() {
//   const result = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task Complete");
//     }, 3000);
//   });

//   console.log(result);
// }

// doSomethingAsync();

// setTimeout
// function sayHello() {
//   console.log("Hello");
// }

// setTimeout(sayHello, 5000);

// setInterval
// function sayHello() {
//   console.log("Hello");
// }

// setInterval(sayHello, 3000);

// console.log("Divyansh");

// Promises and its functions
// 1. Promise.all : Takes an array of promises and it returns a promise that gets resolved if all the promises in the array get resolve, if even a single one of them gets rejected the entire new promise gets rejected
// 2. Promise.race : Takes an array of promises and it returns a promise that gets resolved or rejected if even a single of the promises in the array gets resolved or rejected
// 3. Promise.reject : returns a promise that is rejected with a specified error
// 4. Promise.resolve : returns a promise that is resolved with a specified value

// Microtask Queue
// Promise.resolve().then(() => {
//   console.log("Microtask1 executed");
// });

// Promise.resolve().then(() => {
//   console.log("Microtask2 executed");
// });

// Promise.resolve().then(() => {
//   console.log("Microtask3 executed");
// });

// console.log("Task executed");

const a = { b: 1, c: 2 };
a.d = a;

console.log(a);
