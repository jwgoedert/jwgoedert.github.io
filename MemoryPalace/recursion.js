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
  if (x === y) return arr;
  [x].concat(range(x + 1, y));
    console.log(`value after function is ${x}`);
  return [x];

}
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

//10. Palindrome- determine whether a string is a palindrome or not

//11. Modulo- take to numbers and return the remainder without %

//12.  Multiply- multiplies two numbers without using *

//13.  Divide- divides two numbers without using the /

//14.  GCD - find the greatest common divisor of two numbers

//15.  



