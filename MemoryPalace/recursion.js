console.log("this is working");

//RECURSION-NIOSRUCER-- recursion practices from ali's git
//Factorial- takes a number and returns the factorial of that number
let factorial = (num)=>{
	if(num === 0)return 1;
	return num * factorial(num - 1);
}
let num = 4;
console.log(`the factorial of ${num} is ${factorial(4)}`);