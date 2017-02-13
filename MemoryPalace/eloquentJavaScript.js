//Eloquent Javascript excercises/documentation;

//Chapter 2---
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



