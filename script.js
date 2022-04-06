// 1) Print odd numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const toFindOdd = function (arr) {
  let odd = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  return odd;
};

console.log(toFindOdd(arr));
// 2) Convert all the strings to title caps in a string array

let str = "sundar";

const toCap = function (str) {
  return str.toUpperCase();
};

console.log(toCap(str));
// 3) Sum of all numbers in an array


const toSum = function (num) {
    let sum = 0;
    for (i = 0; i < num.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  
  console.log(toSum(arr));
  // 4) Return all the prime numbers in an array


const toCheckPrime = function (arr) {
    let prime = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] / 2 == 1 || (arr[i] % 2 !== 0 && arr[i] > 2)) {
        prime.push(arr[i]);
      }
    }
    return prime;
  };
  
  console.log(toCheckPrime(arr));
  // 5) Return all the palindromes in an array

  let num = [2, 2, 0, 2, 2, 0, 2, 2];

  const toCheckPalindrome = function (num) {
    let reversed = num.reverse();
    if (reversed === num) {
      return num;
    }
  };
  
  console.log(toCheckPalindrome(num));
  // 6) Return median of two sorted arrays of the same size
  
  let num1 = [1, 2, 3, 4, 5];
  let num2 = [6, 7, 8, 9, 10];
  
  const toCheckMedian = function (num1, num2) {
    num1 = num1.sort();
    num2 = num2.sort();
    let medianFor = Math.round(num1.length / 2);
    let median1 = num1[medianFor];
    let median2 = num2[medianFor];
    return [median1, median2];
  };
  
  console.log(toCheckMedian(num1, num2));
  // 7) Remove duplicates from an array
  
  let arr7 = [1, 1, 2, 2, 3];
  
  const toRemoveDup = function (num) {
    return [...new Set(num)];
  };
  
  console.log(toRemoveDup(arr7));
    // 8) Rotate an array by k times
  
    const toRotate = function (arr1, k) {
        for (i = 0; i < k; i++) {
          let lastElement = arr1.pop();
          arr1.unshift(lastElement);
        }
      
        return arr1;
      };
      
      let arr1 = [1, 2, 3, 4];
      let k = 2;
      
      console.log(toRotate(arr1, k));
      /*  1)  Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number. 
*/

function addFive(number) {
    console.log(number + 5);
  }
  
  addFive(5);
  addFive(0);
  addFive(-5);
  
  /* 2) Write a function called “getOpposite”.
    Given a number, return its opposite */
  
  function getOpposite(num) {
    if (num === parseInt(num)) {
      console.log(Math.abs(num));
    } else console.log(-1);
  }
  getOpposite(5);
  getOpposite(0);
  getOpposite(-5);
  getOpposite("5a");
  getOpposite(5.5);
  
  // 3) Fill in your code that takes an number minutes and converts it to seconds.
  
  function toSeconds(min) {
    console.log(min * 60);
  }
  toSeconds(5);
  toSeconds(3);
  toSeconds(2);
  
  // 4) Create a function that takes a string and returns it as an integer.
  
  function toInteger(mystr) {
    console.log(+mystr);
  }
  toInteger("6");
  toInteger("1000");
  toInteger("12");
  
  // 5) Create a function that takes a number as an argument, increments the number by +1 and returns the result.
  
  function nextNumber(myint) {
    myint++;
    console.log(myint);
  }
  
  nextNumber(0);
  nextNumber(9);
  nextNumber(-3);
 // task 3

// 1) Print odd numbers in an array IIFE method

const odd = (function (arr2) {
    let odd = [];
    for (i = 0; i < arr2.length; i++) {
      if (arr2[i] % 2 !== 0) {
        odd.push(arr2[i]);
      }
    }
    console.log(odd);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  // 2) Convert all the strings to title caps in a string array IIFE method
  
  const toCap1 = (function (str) {
    console.log(str.toUpperCase());
  })("sundar");
  
  // 3) Sum of all numbers in an array IIFE method
  
  const toSum1 = (function (num) {
    let sum = 0;
    for (i = 0; i < num.length; i++) {
      sum += num[i];
    }
    console.log(sum);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  // 4) Return all the prime numbers in an array IIFE method
  
  const toCheckPrime1 = (function (arr3) {
    let prime = [];
    for (i = 0; i < arr3.length; i++) {
      if (arr3[i] / 2 == 1 || (arr3[i] % 2 !== 0 && arr3[i] > 2)) {
        prime.push(arr3[i]);
      }
    }
    console.log(prime);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  // 5) Return all the palindromes in an array IIFE method
  
  const toCheckPalindrome1 = (function (num) {
    let reversed = num.reverse();
    if (reversed === num) {
      console.log(num);
    }
  })([2, 2, 0, 2, 2, 0, 2, 2]); 



