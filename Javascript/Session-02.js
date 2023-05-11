// Object Declaration

// let person = {
//   name: "Divyansh",
//   age: 25,
//   gender: "male",
//   address: {
//     houseNo: 53,
//     block: "3rd Block",
//     landmark: "Micasa Sucasa Park",
//     pinCode: 560034,
//   },
//   myFunc: function hola() {
//     console.log("Hola");
//   },
// };

// // console.log(person.name);
// // console.log(person.address["houseNo"]);
// // console.log(person.myFunc());

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.keys(person.address));

// let sample1 = {
//   key1: "val1",
//   key2: "val2",
// };

// let sample2 = {
//   val1: "key1",
//   val2: "key2",
// };

// function rev(obj) {
//   const reversed = {};
//   Object.keys(obj).forEach((key) => {
//     reversed[obj[key]] = key;
//   });

//   console.log(reversed);
// }

// rev(sample1);

// let numbers = [1, 2, 3, 4, 5];
// let [first, second, third, ...rest] = numbers;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(rest);

// let newNumbers = [...numbers, 6, 7];
// console.log(newNumbers);

// Iterators in Array
// let numbers = [1, 2, 3, 4, 5];
// forEach;
// numbers.forEach(function (element) {
//   console.log(element);
// });

// map;
// numbers.map(function (element) {
//   console.log(element);
// });

// filter;
// let evenNumbers = numbers.filter(function (element) {
//   return element % 2 === 0;
// });

// let evenMap = numbers.map(function (element) {
//   if (element % 2 === 0) return element;
// });
// console.log(evenNumbers);
// console.log(evenMap);

// reduce;
// let sum = numbers.reduce(function (total, element) {
//   return total + element;
// }, 0);
// console.log(sum);

// find;
// let firstEvenNumber = numbers.find(function (element) {
//   return element % 2 === 0;
// });
// console.log(firstEvenNumber);
