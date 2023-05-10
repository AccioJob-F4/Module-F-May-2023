// let x = 5;
// var y = 7;
// var sum = x > y;

// console.log(sum);

// x = 10;
// sum = x + y;

// console.log(sum);

// if (x > y) console.log("x > y");
// else console.log("x <= y ");

// Functions
// function addSubtractNumbers(num1, num2) {
//   // Pure Function
//   let sum = num1 + num2;
//   let diff = num1 - num2;
//   return { sum, diff };
// }

// console.log(addSubtractNumbers(2, 3).sum);
// console.log(addSubtractNumbers(-12, 3).diff);
// console.log(addSubtractNumbers(0, 3));
// console.log(addSubtractNumbers(0, 3));
// console.log(addSubtractNumbers(0, 3));

// Arrays
// let arr = [
//     "Divyansh",
//     "rgndunes",
//     25,
//     true,
//     { key1: 1, key2: 2 },
//     [1, 2, 3, 4, "vcjhabd"],
//     function hola() {
//       console.log("Hola");
//     },
//   ];
//   console.log(arr[2]);
//   arr[6]();

// let fruits = ["apple", "banana", "pomogrenate", "banana"];
// console.log("ORIGINAL : ", fruits);

// // 1. push()
// fruits.push("orange");
// console.log("PUSH : ", fruits);

// // 2. pop()
// const removedElement = fruits.pop("orange");
// console.log("POP : ", fruits, removedElement);

// // 3. shift()
// const removedElementShift = fruits.shift();
// console.log("SHIFT : ", fruits, removedElementShift);

// // 4. unshift()
// fruits.unshift("grapes", "blackcurrent");
// console.log("UNSHIFT : ", fruits);

// // 5. slice()
// const slicedFruit = fruits.slice(0, 2);
// console.log("SLICE : ", fruits, slicedFruit);

// // 6. splice()
// const splicedFruit = fruits.splice(1, 1, "kiwi");
// console.log("SPLICE : ", fruits, splicedFruit);

// // 7. concat()
// const abc = [1, 2, 3];
// const newArr = abc.concat(fruits);
// console.log("CONCAT : ", abc, newArr, fruits);

// 8. indexOf()
// 9. join()
// 10. reverse()

// Higher Order Functions

function higherOrderFunction(func1) {
  console.log("Before function call");
  func1();
  console.log("After function call");

  return func1;
}

function func1() {
  console.log("Inside func1");
}

higherOrderFunction(func1)();
