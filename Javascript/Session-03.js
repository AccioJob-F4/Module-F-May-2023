// 1. Closures

// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// var closure = outer();
// closure();

// 2. OOPs Paradigm v/s Functional Programming

// OOPs way

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello my name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// const person1 = new Person("Divyansh", 25);
// person1.sayHello();

// Functional Programming way

// const createPerson = (name, age) => {
//   const sayHello = () => {
//     console.log(`Hello my name is ${name} and I'm ${age} years old.`);
//   };

//   return { sayHello };
//   //   return sayHello;
// };

// const person2 = createPerson("Divyansh", 25);
// person2.sayHello();
// person2();

// 3. Imperative and Declarative Code Writing

// Imperative way --> How to do
// var arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 2;
// }

// console.log(arr);

// Declarative way --> What to do
// var arr2 = [1, 2, 3];
// arr2 = arr2.map((ele) => {
//   return ele * 2;
// });

// console.log(arr2);

// 4. Mutability and Immutability
// Mutable: Arrays, Objects
// Immutable : Strings, Numbers

// // Mutability
// var myArr = [1, 2, 3];
// myArr.push(4);
// console.log(myArr);

// // Immutability
// var myStr = "hello";
// myStr.toUpperCase();
// console.log(myStr);

// 5. Polyfills
// if (!Array.prototype.divyansh) {
//   Array.prototype.divyansh = function (callback) {
//     var arr = [];

//     for (var i = 0; i < this.length; i++) {
//       arr.push(callback(this[i] * 3, i, this));
//     }

//     return arr;
//   };
// }

// var arr = [1, 2, 3];

// var doubled = arr.divyansh(function (x) {
//   return x * 2;
// });

// console.log(doubled);

// 6. Javascript Engines --> V8 (Chrome & NodeJS), SpiderMonkey (Firefox), JavascriptCore (Safari)

// 7. Strict Mode & Non-Strict Mode

// "use strict";

// function foo() {
//   x = 10;
// }

// foo();

// 8. "this" keyword

// var obj = {
//   name: "Divyansh",
//   greet: function () {
//     console.log("Hello, " + this.name, "!");
//   },
// };

// obj.greet();

// 9. Function Currying
// function add(a) {
//   return function (b) {
//     console.log({ a, b });
//     return a + b;
//   };
// }

// const addTwo = add(2);
// console.log(addTwo(3));
// console.log(add(2)(3));

// function add(a, b) {
//   console.log({ a, b });
//   return a + b;
// }

// const addTwo = add.bind(null, 2);
// console.log(addTwo(3));

// 10. Constructor Functions

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var divyansh = new Person("Divyansh", 25);
// console.log(divyansh.name);
// console.log(divyansh.age);

// 11. null V/S undefined V/S not defined
// undefined : declared but not assigned a value
// null : intentional absence of value
// not defined :
// let x = null;

// console.log(y);

// 12. Truthy and Falsy values
// Falsy values : false, 0, "", null, undefined, NaN

// 12. Shallow Copy
// const obj = {
//   a: 1,
//   b: [2, 3],
//   c: {
//     d: 4,
//     e: 5,
//   },
// };

// const copiedObj = Object.assign({}, obj);

// console.log(obj);
// console.log(copiedObj);

// obj.a = 10;
// obj.b.push(4);
// obj.c.d = 40;

// console.log(obj);
// console.log(copiedObj);

// 13. Deep Copy

// 14. Flattening an Object

const obj = {
  a: {
    b: { c: 1, d: 2 },
    e: 3,
  },
  f: 4,
};

const flattenObj = { "a.b.c": 1, "a.b.d": 2, "a.e": 3, f: 4 };
