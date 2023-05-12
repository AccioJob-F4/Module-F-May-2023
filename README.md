# Interview Prep

Javascript Interview Questions : [Github](https://github.com/sudheerj/javascript-interview-questions)

React/Redux Interview Prep : [Github](https://github.com/sudheerj/reactjs-interview-questions)

Redux Interview Questions : [Link](https://www.interviewbit.com/redux-interview-questions/#redux-mcq-questions)

# Class Notes

## Javascript

Session 01 && Session 03 : [Google Doc](https://docs.google.com/document/d/1IMBjGesfpglHz4AZ00stYbEXBfvDYEvSbyEFBVS4fHk/edit?usp=sharing)

Session 03 : [Google Doc](https://docs.google.com/document/d/10z7ap4pKXulEF0Vuw44-Gzpvxzmj3_lL7PXxgvDn3yk/edit?usp=sharing)

# Important Links

**_20 React Projects built from scratch for your practice purpose : [Youtube playlist](https://www.youtube.com/playlist?list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP)_**

React Youtube Tutorials : [Link](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)

Github Tutorials : [Link](https://www.youtube.com/playlist?list=PLu0W_9lII9agwhy658ZPA0MTStKUJTWPi)

Udemy React Course : [Link](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

React Lifecycle Methods References : [Reference - 01 : Medium Article](https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b) | [Reference - 02 : GeeksforGeeks Article](https://www.geeksforgeeks.org/reactjs-lifecycle-components/)

CSS Classname Naming Conventions : [Article](https://getbem.com/naming/)

Learn Flexbox in a funny and interactive way using a frog game : [Game Link](https://flexboxfroggy.com/)

How to write a proper commit message : [Article](https://chiamakaikeanyi.dev/how-to-write-good-git-commit-messages/)

React Router Dom v6 : [Article](https://blog.webdevsimplified.com/2022-07/react-router/)

Private and Restricted Routes : [Article](https://www.robinwieruch.de/react-router-private-routes/)

React Query Docs : [Doc](https://tanstack.com/query/v4/docs/react/reference/useQuery)

React Component Composition Explained : [Article](https://felixgerschau.com/react-component-composition/)

Prop Drilling : [Article](https://kentcdodds.com/blog/prop-drilling)

Redux : [Article](https://blog.logrocket.com/understanding-redux-tutorial-examples/)

Firebase : [GFG Link](https://www.geeksforgeeks.org/how-to-use-firestore-database-in-reactjs/)

# Assignment Solutions Placement Readiness

## Shopping

[Question](https://course.acciojob.com/idle?question=0252fab2-ae70-4fe8-890b-084c4b5b8e25)

Solution :

```javascript
function supermarket(prices, n, k) {
  // write code here
  // do not console.log the answer
  // return sorted array
  const sortedPrices = prices.sort((a, b) => a - b);

  // prices.sort((a, b) => a - b) is a JavaScript method that sorts an array of numbers in ascending order.
  // The sort() method is a built-in function in JavaScript that sorts the elements of an array in place and returns the sorted array. By default, the sort() method sorts the elements in lexicographical order (alphabetical order for strings). However, if the array contains numbers, this default behavior may not be appropriate, as numbers should be sorted based on their numerical value rather than their string representation.
  // In this case, the sort() method is passed a function that compares two numbers (a and b) and returns the difference between them (a - b). This function is known as a "compare function", and it tells the sort() method how to sort the array.
  // When the sort() method compares two numbers a and b, it subtracts b from a. If the result is negative, it means that a should come before b in the sorted array. If the result is positive, it means that b should come before a. If the result is zero, it means that a and b are equal, and their relative order doesn't matter.
  // Overall, the code prices.sort((a, b) => a - b) sorts the prices array in ascending order based on the numerical values of its elements.

  const sum = sortedPrices.slice(2, k + 2).reduce((acc, curr) => acc + curr, 0);
  return sum;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var A;
var B;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    [A, B] = inputArr[0].split(" ").map((x) => parseInt(x));
  }

  if (lineNumber === 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  //inputArr.shift();
  const n = A;
  const k = B;
  const prices = inputArr[1].split(" ").map((x) => parseInt(x));
  console.log(supermarket(prices, n, k));
}
```

## JS Dynamic Function Input

[Question](https://course.acciojob.com/idle?question=33a20917-78e7-461c-8956-67295b66b736)

```javascript
function takeMultipleNumbersAndAdd(arr) {
  //do not console.log
  // return the sum
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
/*Do not change the code below*/

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  inputArr = inputArr[0].split(" ").map((x) => +x);
  console.log(takeMultipleNumbersAndAdd(inputArr));
}
```

## Student Records - 5

[Question](https://course.acciojob.com/idle?question=7254da76-885a-4e17-9f8a-75b497fe58e8)

```javascript
function StudentRecords(Data) {
  const names = [];
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].marks > 50) {
      names.push(Data[i].name);
    }
  }
  return names;
}

const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  let str = line;
  str = str.replace(/\\/g, "");
  const A = JSON.parse(str);

  console.log(StudentRecords(A));
});
```

## Palindrome String

[Question](https://course.acciojob.com/idle?question=ad163b7c-8fea-42d3-a8e9-39d4d6a06b18)

```javascript
import java.io.*;
import java.util.*;

public class Main {
	static int isPalindrome(String str)
      {
              //write code here
		  // Remove all non-alphabetic characters and convert to lower case
        String alphaStr = str.replaceAll("[^a-zA-Z]", "").toLowerCase();
        int left = 0;
        int right = alphaStr.length() - 1;
        while (left < right) {
            if (alphaStr.charAt(left) != alphaStr.charAt(right)) {
                return 0; // Not a palindrome
            }
            left++;
            right--;
        }
        return 1; // Is a palindrome
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str=sc.nextLine();
        int result = isPalindrome(str);
        System.out.println(result);
    }
}
```

## JS Object - 2

[Question](https://course.acciojob.com/idle?question=d4d0def5-10d3-4331-9b18-7ee341ae0870)

```javascript
function getObjKeys(obj) {
  // write code here
  // return the answer, dont use console.log here
  return Object.keys(obj).join();
}

const rl = require("readline");
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const obj = JSON.parse(line);
  console.log(getObjKeys(obj));
});
```

# Assignment Solutions ReactJS

## Flames App

[Question](https://course.acciojob.com/web-idle?question=29816e46-360d-486d-a493-be6687beabba)
[Solution](https://github.com/acciojob/flames-app-react-RgnDunes)

## Import Export

[Question](https://course.acciojob.com/web-idle?question=309eeb3d-4d39-4273-869d-42c99c3564d2)
[Solution](https://github.com/acciojob/import-export-react-RgnDunes)

## Debugging Challenge - Keywords

[Question](https://course.acciojob.com/web-idle?question=4e304b4d-6a03-4d2a-960e-590a4bdea4ca)
[Solution](https://github.com/acciojob/debugging-challenge-react-RgnDunes)

## Make Button Action

[Question](https://course.acciojob.com/web-idle?question=76dd38ec-119c-443a-ac40-cb248db56576)
[Solution](https://github.com/acciojob/button-action-RgnDunes)

## Dropdown React

[Question](https://course.acciojob.com/web-idle?question=2e91a977-a417-4170-b4d8-f9082bcedddb)
[Solution](https://github.com/acciojob/dropdown-react-RgnDunes)

## Calender React

[Question](https://course.acciojob.com/web-idle?question=5f4b50cb-5b9d-481c-9836-3f1f3857dafa)
[Solution](https://github.com/acciojob/calendar-react-RgnDunes)

## Max Numbers

[Question](https://course.acciojob.com/idle?question=970d8dbc-5856-4753-aed0-cbf16f7c4b03)
[Solution](https://github.com/AccioJob-F4/Feb-2023-Batch/blob/master/max-numbers.js)

## Increasing Array

[Question](https://course.acciojob.com/idle?question=bf1b9a42-45c8-4487-b952-cb16200f5196)
[Solution](https://github.com/AccioJob-F4/Feb-2023-Batch/blob/master/increasing-array.js)

## Number of ways

[Question](https://course.acciojob.com/idle?question=3ef71ab6-9bcd-4a4a-958f-7aef47476c32)
[Solution](https://github.com/AccioJob-F4/Feb-2023-Batch/blob/master/number-of-ways.js)

## Easy Sorting (C++ / CPP)

[Question](https://course.acciojob.com/idle?question=ba2da52a-3f78-405f-91a0-1fcdd060bbdb)
[Solution](https://github.com/AccioJob-F4/Feb-2023-Batch/blob/master/easy-sorting.cpp)

## Make Button Action

[Question](https://course.acciojob.com/web-idle?question=76dd38ec-119c-443a-ac40-cb248db56576)
[Solution](https://github.com/acciojob/button-action-RgnDunes)

## Render Multiple Component

[Question](https://course.acciojob.com/web-idle?question=dabf9730-49e8-4af8-87f0-bf578b235d25)
[Solution](https://github.com/acciojob/render-multiple-component-react-RgnDunes)

## Relative List

[Question](https://course.acciojob.com/web-idle?question=7e3ecc5d-a59b-456a-8514-5c47fb5bb627)
[Solution](https://github.com/acciojob/relative-list-react-RgnDunes)

## Holiday List

[Question](https://course.acciojob.com/web-idle?question=9339320d-3199-4cce-a48b-3235ac5d45b7)
[Solution](https://github.com/acciojob/holiday-list-react-RgnDunes)

## Greeting new students at school

[Question](https://course.acciojob.com/web-idle?question=2aacf855-a3b9-4fbf-886d-bf587e5dfafb)
[Solution](https://github.com/acciojob/greeting-students-props-react-RgnDunes)

## React Component on DOM Node

[Question](https://course.acciojob.com/web-idle?question=769e329d-19ef-4e82-83f5-402eab55748d)
[Solution](https://github.com/acciojob/single-component-debug-react-RgnDunes)
