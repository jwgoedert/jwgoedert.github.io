console.log("this is working");

//RECURSION-NIOSRUCER-- recursion practices from ali's git
//1. Factorial- takes a number and returns the factorial of that number

let factorial = (num)=>{
	if(num === 0)return 1;
	return num * factorial(num - 1);
}
let num = 4;
console.log(`the factorial of ${num} is ${factorial(4)}`);

//2. Sum- take an array of integers and return the sum.
//this is an impure version of Sum, but need to tighten up the game.  
let sum = 0;
let count = 0;
let arrOfNums = [1, 2, 3, 4, 5];
let sum1 = (arr)=>{
  
  let total = 0;
  if(count === arr.length)return sum;
    sum += arr[count];
    count ++;
  return sum1(arrOfNums) ; 
}
console.log(sum1(arrOfNums));
//Sum- Pure version 
let sum2 = (arr, pos) =>{
	if (pos === -1)return 0;
    return arr[pos] + sum2(arr, pos - 1);
}
console.log(sum2(arrOfNums, arrOfNums.length -1));

//3. Sum all numbers of an array containing nested arrays
let arrArrSum = [1,[2,3],[[4]],5];

//4. Even- Check if a number is even
//???

let isEven = (n) => n % 2 === 0;
console.log(`Number is even ${isEven(9)}`);

let isEvenRecursive = (n) => {
	if (n === 0) return true;
	if (n === 1) return false;
	return isEvenRecursive(n/2);
}
let num1 = 10;

console.log(`${(num1)} is even? ${isEvenRecursive(num1)}`);

//5. SumBelow- given a number give the sum of all the numbers below it.

let sumBelow = (n)=>{
  if (n > 0) n += sumBelow(n-1);
  return n;
}
console.log(sumBelow(3));

//6. Range- given two numbers return an array with the numbers in between and including
//first unsuccessful attempt
 let arr = [];
let range = (x, y)=>{
 
  arr.concat([x]);
  console.log(`entry value is ${x}`);
  if (x === y) return [arr];
  [x].concat(range(x + 1, y));
    console.log(`value after function is ${x}`);
  return [x];

}
//Range with Ali- no variables outside the scope
console.clear();
//  let arr = [];
let range = (x, y)=>{
 
  //console.log(`entry value is ${x}`);
  if (x === y) return[x];
  return [x].concat(range(x + 1, y));
//     console.log(`value after function is ${x}`);
//   return [x];

}
console.log(range(2,6));

//working range after much much head turning with George

let range2 = (start, end) =>{
  console.log(`start: ${start} end: ${end}`);
  if(start === end)return [end];
  let prevVal = range2(start + 1, end);
  let prevValLog = [start].concat(prevVal);
  console.log(`returning: ${prevValLog}`);
  return prevValLog;
}
let start1 = 3;
let end1 = 15;
console.log(`range of ${start1} and ${end1} is ${range2(2,6)}`);
console.log(range(2, 6));

//7. Exponent: takes a base and and exponent and returns the value

var exponent = function(base, exp) {
  console.log(base, exp);
  if(exp === 1)return base;
  console.log(base, exp);
  return base * exponent(base, exp -1);
  
};

console.log(exponent(4,3));

//8. Power of two: see if a number is a power of two??
let powerOfTwo = (num) =>{
  if (num === 2)return true;
  if (num < 2)return false;
  return powerOfTwo(num/2);
}
let pOfTwoNum = 32;
console.log(`${pOfTwoNum} is a power of two? ${powerOfTwo(32)}`);

//9. Reverse String: takes a string and reverses it. 

// // console.clear();
// //kind of working
// var newStr = "";

// let reverseStr = (str)=>{
//   //console.log(str);
//   if(str.length < 1) return newStr;
//   console.log(newStr.concat(str.slice(0,1)));
//   return reverseStr(str.slice(1));
//   }

// console.log(reverseStr('hello'));

console.clear();
// var newStr = "";

// let reverseStr = (str)=>{

//   console.log(`String enters as ${str}`);
//   if(str.length < 1) return newStr;
//   let letter = `${str.slice(0,1)} is the letter to add`;
//   console.log(letter);
//   newStr += str.slice(0,1);
//   return  reverseStr(str.slice(1));
  
// }

// console.log(reverseStr('hello'));

var newStr = "";

let reverseStr = (str)=>{

  console.log(`String enters as ${str}`);
  if(str.length < 1) return newStr;
  let letter = `${str.slice(0,1)} is the letter to add`;
  console.log(letter);
  newStr += str.slice(-1);
  return  reverseStr(str.slice(0, -1));
  
}
//badass reverse function
let reverseStr = str => 
  str.length < 1 ? 
    str : str.slice(-1) + reverseStr(str.slice(0, -1));
  
reverseStr('hello');
console.log(reverseStr('hello'));
//my latest
let reverseStr = (str)=>{
  if(str.length < 1) return str;
  return str.slice(-1) + reverseStr(str.slice(0, -1));

}

//10. Palindrome- determine whether a string is a palindrome or not
      
let palindromeFunc = (str1, str2) => {
  if( str1 === revStr(str2))return true;
  return false;
}
console.log(palindromeFunc("hello", "olleh"));

non-working attempt without using reverse function
var newStr2 = '';
var strOrig  '';
let palindrome = ((str1, str2)=>{
    if(str1.length < 1){ 
      console.log(`${newStr1} = ${str2}?`);
      return newStr1 === str2;
    }
    newStr2 += str1.slice(-1);
    console.log(str2 + " " + str1);
    return palindrome(str1.slice(0,-1), str2);
    
 
});
console.log(palindrome("hello","olleh"));
            
//11. Modulo- take to numbers and return the remainder without %

//12.  Multiply- multiplies two numbers without using *
var multiply = function(x, y) {
  console.log(`comes in as ${x}`)
if(y === 1) return x;
  let result = x += multiply(x, y - 1);
  console.log(`results in ${result}`);
  return result;
};
console.log(multiply(2,3));

//13.  Divide- divides two numbers without using the /
console.clear();
var count =0;
var divide = function(x, y) {
  console.log(`comes in as ${x}`)
  //count ++;
  if(x < 1) return count;
  let result = divide(x - y, y) - y;//doesn't need the - y crazy pants
  console.log(count ++);
  console.log(`results in ${result}`);
  return count;

//   return divide(x - 1, y) - y;
var count =0;
var divide = function(x, y) {
  console.log(`comes in as ${x}`)
  //count ++;
  if(x < 1) return count;
  let result = divide(x - y, y) - y;
  console.log(count ++);
  console.log(`results in ${result}`);
  return count;

//   return divide(x - 1, y) - y;
};
console.log(divide(39, 13));

var count =0;
var divide2 = function(x, y) {
  console.log(`comes in as ${x}`)
  if(x < 1) return count;

  let result = divide2(x - y, y);
  console.log(count ++);

  console.log(`${x} - ${y} =${x - y}`);
  console.log(`results in ${result}`);
  


  return count;


};
console.log(divide2(96, 8));

var count =0;
var divide3 = function(x, y) {
  if(x < 1) return count;
  count ++;
  return divide3(x - y, y);
};
console.log(divide3(96, 8));

//14.  GCD - find the greatest common divisor of two numbers


//15. Compare String: Compare two strings one char at a time 
//and return true if they're the same.

let compareStr = (str1, str2) => {
  if (str1.length !== str2.length)return false;
  if(str1[str1.length -1] !== str2[str2.length -1])return false;
  if(str1.length < 1)return str1 === str2;
  return compareStr(str1.slice(0, -1), str2.slice(0, -1));
}

console.log(compareStr('hello','hello'));

//16.Create an Array: take a string and create an array where each letter takes a position

var newArr = [];
let createArrayReverse = (str) => {
  if (str.length < 1) return newArr;
  newArr.push(str[str.length -1]);
  return createArrayReverse(str.slice(0, -1));
  
}
console.log(createArrayReverse("blahblah"))

var newArr1 = [];
let createArray = (str) => {
  if (str.length < 1) return newArr1;
  newArr1.push(str.slice(0, 1));
  return createArray(str.slice(1));
  
}
console.log(createArray("blahblah"))

//17. Reverse Array: reverse an array.

var newArr = [];
let createArrayReverse = (arr) => {
  if (arr.length < 1) return newArr;
  newArr.push(+(arr.slice(-1)));
  return createArrayReverse(arr.slice(0, -1));
  
}
console.log(createArrayReverse(createArray([1,2,3,4,5,6,7])));

//18. Build List: given a value and a number make an array with 
//that many of the values

let newArr = [];
var buildList = function(value, length) {
  if(length < 1)return newArr;
  newArr.push(value);
  return buildList(value, length -1);
};
console.log(buildList("haha", 15));

//19. Count occurrence: count the number of occurences of a value in 
// an array.
let count = 0;
var countOccurrence = function(array, value) {
  if(array.length < 1)return count;
  if(array[array.length - 1] === value) count += 1;
  return  countOccurrence(array.slice(0, -1), value);
  
};
console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'));

//20. Recursive Maps: Map using recursion
//Reverse Recursive map
let timesTwo = (n) =>{
  return n * 2;
}
var newArrR = [];
var rRevMap = function(array, callback) {
  if(array.length < 1) return newArrR;
  let index = array.length - (array.length -1);
  newArrR.push(callback(array[array.length - 1], array.length -1, array));
  return rRevMap(array.slice(0,-1), callback);
};

console.log(rRevMap([1,2,3],timesTwo));

//Recursive Map 

var newArr = [];
var rMap = function(array, callback) {
  if(array.length < 1) return newArr;
  let index = array.length - (array.length -1);
  newArr.unshift(callback(array[array.length - 1], array.length -1, array));
  return rMap(array.slice(0,-1), callback);
};
console.log(rMap([1,2,3],timesTwo));

//
// map using recursion!
var mapRec = (array, fn, index = 0, col = []) =>{
//   console.log(array[index]);
//   console.log(index);
//   console.log(`col is ${col}`);
  if(index > array.length - 1){
    return col;
  }
  
  col.push(fn(array[index], index, array));
  return mapRec(array, fn, index += 1, col);
}
