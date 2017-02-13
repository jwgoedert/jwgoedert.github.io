//Eloquent Javascript excercises/documentation;

//Chapter 2---Program Structure:
//Problem 1: create a pyramid of '#' 7 spaces deep

// Your code here.

var str = "";

for(var i = 0; i < 7; i++){
  console.log(str += "#");
}
// #
// ##
// ###
// ####
// #####
// ######
// #######

//Problem 2:FizzBuzz-if divisible by 3 print "Fizz" by 5 print "Buzz" 
//by 

// Your code here.

for(var i = 1; i <= 100; i++)
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else if(i % 3 === 0){
    console.log("Fizz");
  }else if(i % 5 === 0){
    console.log("Buzz");
  }else{
  console.log(i);
  }
//Problem 3: ChessBoard- create a hash tag chessboard
// Your code here.
var str = '';
var size = 8;
for (var i = 0; i < size/2; i++){
	for (var j = 0; j < size/2; j++){
      if(i % 2 === 0){
 		str += " " + "#";
      }else if(i % 2 !== 0){
      	str += "#" + " ";
      }
    }
  str += '\n';
}
console.log(str);
//  # # # # #
// # # # # # 
//  # # # # #
// # # # # # 
//  # # # # #


//Chapter 3: Functions
//Problem 1: Write a function that takes two variables and returns the minimum
// Your code here.
var min = function(n1, n2){
  if(n1 < n2) return n1;
  if(n1 > n2) return n2;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Problem 2: write a recursive function that checks if a number is even
// Your code here.
var isEven = function(num){
  	if(num < 0) num *= -1;
	if(num === 0) return true;
  	if(num === 1) return false;
  	return isEven(num - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Problem 3: count chars in a string
// Your code here.
var countBs = function(str){
let count = 0;			
  for(var i = 0; i < str.length; i++){
  	if (str[i] === 'B') count++;  
  }
return count;
} 
var countChar = function(str, char){
let count = 0;
  for(var i = 0; i < str.length; i++){
  	if(str[i] === char){
    count++;
    }
  }
return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

//Chapter 4: Datastructures- Objects and Arrays.
//Problem 1:


















