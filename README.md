# Interview Prep

Javascript Interview Questions : [Github](https://github.com/sudheerj/javascript-interview-questions)

React/Redux Interview Prep : [Github](https://github.com/sudheerj/reactjs-interview-questions)

Redux Interview Questions : [Link](https://www.interviewbit.com/redux-interview-questions/#redux-mcq-questions)

# Class Notes

## Javascript

Session 01 & Session 02 : [Google Doc](https://docs.google.com/document/d/1IMBjGesfpglHz4AZ00stYbEXBfvDYEvSbyEFBVS4fHk/edit?usp=sharing)

Session 03 : [Google Doc](https://docs.google.com/document/d/10z7ap4pKXulEF0Vuw44-Gzpvxzmj3_lL7PXxgvDn3yk/edit?usp=sharing)

Session 04 : [Google Doc](https://docs.google.com/document/d/1b1svxL0Tg9WPSxJy5I7LkP8ngr-uz86cWZWvrI_0AJ4/edit?usp=sharing)

## ReactJS

Session 01 : [Google Doc](https://docs.google.com/document/d/1tcr9JkMZtaZDpVD-qjNV9qmAtCdwZqde8fd0zTvB4Gk/edit#heading=h.hekahbvtw7kr)

Session 02 : [Google Doc](https://docs.google.com/document/d/1hVigrPlEO2cUiUpfSRDfapj0dBb-vAcqXwYQ0RQhAeU/edit?usp=sharing)

Session 03 : [Google Doc](https://docs.google.com/document/d/1ToLM2sY85FfzU0n3a6yZNvAnXdwl1JViq_5rWQo0goY/edit?usp=sharing)

Session 04 : [Google Doc](https://docs.google.com/document/d/1DRmyS9sxdp9VM_E2SFrctoof9qC6fuKq__PX_z249v0/edit?usp=sharing)

Session 05 : [Google Doc](https://docs.google.com/document/d/1fVUBXBE-dhflluu8rEcMeWNNCT0rZD2Jkx_UAYIq4HQ/edit?usp=sharing)

## HTML & CSS

Session 01 : [Google Doc](https://docs.google.com/document/d/10UxP9uRi3mIOt_m9-JSh5U9OyrinObpISPT2t6dYd74/edit?usp=sharing)

Session 02 : [Google Doc](https://docs.google.com/document/d/1Gt9c5DVAx52MzeAfEgMt49nq6eq111pMFrtz_NfXgis/edit?usp=sharing)

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

## Total Book Price

[Question](https://course.acciojob.com/idle?question=322f8939-1307-4bdd-a34a-541271a02c4f)

```javascript
function totalPrice(arr) {
  // return the sum
  // do not console.log here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price;
  }
  return sum;
}
/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

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
  let str = JSON.parse(inputArr[0].trim().replace(/\\/g, ""));
  console.log(totalPrice(str));
}
```

## Student records - 6

[Question](https://course.acciojob.com/idle?question=4eb99aa3-b0de-4a80-8e59-7433d289e4c0)

```javascript
function StudentRecords(Data) {
  // return using return keyword
  // do not console.log here
  let sum = 0;
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].id > 120) {
      sum += Data[i].marks;
    }
  }
  return sum;
}

/*Do not change the code below*/
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

## Print Counts

[Question](https://course.acciojob.com/idle?question=5fcf3a1e-cb02-41aa-a68a-65b5ae159d1c)

```javascript
const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  let str = line;

  //  const A = JSON.parse(str);

  console.log(PrintCharFreq(str));
});

function PrintCharFreq(myStr) {
  let freqMap = new Map();
  for (let i = 0; i < myStr.length; i++) {
    let char = myStr[i];
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  let sortedKeys = Array.from(freqMap.keys()).sort();
  let result = "";
  for (let key of sortedKeys) result += key + " = " + freqMap.get(key) + "\n";
  return result;
}
```

## Sum and Mean

[Question](https://course.acciojob.com/idle?question=73906a2d-1dfd-438d-a0ae-8a76b6cfb008)

```javascript
const SumAndMean = (Arr, N) => {
  //Mean should be floor
  //return an array having 2 elements sum and mean respectively
  //do not console.log here
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += Arr[i];
  }
  let mean = Math.floor(sum / N);
  return [sum, mean];
};

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
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  //else if (lineNumber < size) {
  // }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = size;
  const Arr = inputArr[1].split(" ").map((x) => parseInt(x));
  console.log(SumAndMean(Arr, N).join(" ").trim());
}
```

## Alternate Sum Product

[Question](https://course.acciojob.com/idle?question=ac9f32a2-2923-46ac-b7d9-011f2bf088cd)

```javascript
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();
  const Arr = inputArr[0].split(" ").map((x) => +x);

  AlternateSumProduct(N, Arr);
}

const AlternateSumProduct = (n, arr) => {
  // Your code here
  // do not return anything print the alternate sum and product value.
  let sum = 0;
  let product = 1;
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 2 === 0) {
      sum += arr[i];
    } else {
      product *= arr[i];
    }
  }
  console.log(sum, product);
};
```

## Student Records - 2

[Question](https://course.acciojob.com/idle?question=b325ed1d-81b1-4e4f-acd2-5e801154531f)

```javascript
function StudentRecords(Data) {
  //return using return method
  // do not console.log here
  const filteredData = Data.filter((student) => student.marks > 50);
  return JSON.stringify(filteredData, null, 2);
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

## Add average to array

[Question](https://course.acciojob.com/idle?question=b3f01c5a-cf9a-4565-9a9e-df3e0725b859)

```javascript
import java.util.*;
class Solution{
static double average(int a[], int n)
    {

    // Your code here
		 double sum = 0;
    for (int i = 0; i < n; i++) {
      sum += a[i];
    }
    double avg = sum / n;
    return Math.round(avg * 100.0) / 100.0;
    }
	}
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int[] mat = new int[n];
		for (int i = 0; i < n; i++) {
			mat[i] = sc.nextInt();
		}
		double res = Solution.average(mat, n);
		System.out.format("%.2f", res);
	}
}
```

## Distinct Alphabets

[Question](https://course.acciojob.com/idle?question=22f7123f-c888-47ff-8ca7-23e2567f9e71)

```javascript
function Alphabets(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const charCount = {};

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase(); // Convert the character to lowercase

    // Check if the character is an alphabet
    if (/^[a-zA-Z]$/.test(char)) {
      // Increment the count for the character
      charCount[char] = charCount[char] + 1 || 1;
    }
  }

  for (let i = 0; i < alphabets.length; i++) {
    if (!(alphabets[i] in charCount)) charCount[alphabets[i]] = 0;
  }

  const sortedKeys = Object.keys(charCount).sort();

  // Create a new object with sorted keys
  const sortedObj = {};
  for (const key of sortedKeys) {
    sortedObj[key] = charCount[key];
  }
  return Object.values(sortedObj).join(" ");
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  let str = line;
  //str = str.replace(/\\n/g, " ");

  console.log(Alphabets(str));
});
```

## Merge Sorted Arrays

[Question](https://course.acciojob.com/idle?question=41938fec-9822-4ffe-bf92-6e2e68851d35)

```javascript
function mergeSortedArrays(arr1, arr2) {
  // Do not console.log here
  // only return the merged array
  let i = 0;
  let j = 0;
  const mergedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

const readline = require("readline");

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (cmd) {
  input.push(cmd);
});

rl.on("close", function (cmd) {
  Main(input);
});

function Main(input) {
  const arr1 = JSON.parse(input[0]);
  const arr2 = JSON.parse(input[1]);
  const mergedArray = mergeSortedArrays(arr1, arr2);
  process.stdout.write("[");
  process.stdout.write(mergedArray.join(", "));
  process.stdout.write("]");
}
```

## K continuous elements sum check

[Question](https://course.acciojob.com/idle?question=5465d817-a26d-4a7e-ac06-97cf409a2063)

```javascript
function subarraySum(arr, k) {
  // return a boolean value
  // do not console.log here
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    if (sum >= k) {
      return true;
    }
  }
  return false;
}
/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = JSON.parse(inputArr[0].trim());
  let k = parseInt(inputArr[1].trim());
  // console.log(Arr,k);
  console.log(subarraySum(Arr, k));
}
```

## Diagonal Sum

[Question](https://course.acciojob.com/idle?question=5eb11b5f-ecb6-4a1e-8a82-df9e59671a9d)

```javascript
function DiagonalSum(n, mat) {
  // do not console.log here
  // return using return method
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < n; i++) {
    primarySum += mat[i][i];
    secondarySum += mat[i][n - i - 1];
  }

  return [primarySum, secondarySum];
}

/*Do not change any code below*/
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);
  inputArr.shift();
  let Matrix = [];
  for (let i = 0; i < N; i = i + 1) {
    const Arr = inputArr[i].split(" ").map((x) => +x);
    Matrix.push(Arr);
  }

  console.log(DiagonalSum(N, Matrix).join(" "));
}
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
