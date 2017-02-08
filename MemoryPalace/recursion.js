console.log("this is working");

//RECURSION-NIOSRUCER-- recursion practices from ali's git
//Factorial- takes a number and returns the factorial of that number

let factorial = (num)=>{
	if(num === 0)return 1;
	return num * factorial(num - 1);
}
let num = 4;
console.log(`the factorial of ${num} is ${factorial(4)}`);

//Sum- take an array of integers and return the sum.
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

//Sum all numbers of an array containing nested arrays
let arrArrSum = [1,[2,3],[[4]],5];

//Check if a number is even
//???

let isEven = (n) => n % 2 === 0;
console.log(`Number is even ${isEven(9)});

