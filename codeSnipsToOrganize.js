/* A 'concatAll' function used to merge an array of arrays, only works one 
level deep but utilizes push.apply- kinda neat.  Originally sourced from r
reactivex demo
*/
let nest = [[1,2,3],[2,3,5,1,23,3,2],[1,2,3,2,1]];

let concatAll = function(arr) {
	var results = [];
	arr.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};

console.log(concatAll(nest));
/*These are two examples of how to turn a number that is a string into an 
actually spelled out number as in "1" to "one" etc. The first one is bulky
and not so delicious, but the second seems to do a decent job, albeit the 
problem of when numbers are touch other strings has yet to be addressed as
do the issues of multiple digit numbers, one suggestion was also to have my 
source be an object rather than an array and this makes pretty good sense, 
next round

*/
let str = "I have 10 dogs and 6 ponies";

let numToText = (phrase) =>
  
 phrase
 .split(' ')
 .reduce((newStr, item)=>{
 if (item === '1') return newStr.concat('one');
 if (item === '2') return newStr.concat('two');
 if (item === '3') return newStr.concat('three');
 if (item === '4') return newStr.concat('four');
 if (item === '5') return newStr.concat('five');
 if (item === '6') return newStr.concat('six');
 if (item === '7') return newStr.concat('seven');
 if (item === '8') return newStr.concat('eight');
 if (item === '9') return newStr.concat('nine');
 if (item === '10') return newStr.concat('ten');
 if (item === '0') return newStr.concat('zero');
 return newStr.concat(item);                   
}, [] );

let numStrings2 = 
      ['zero', 'one', 'two', 'three', 'four','five','six',
      'seven', 'eight', 'nine','ten'];

let numToText2 = (phrase)=>
  phrase
  .split('')
  .reduce((newPhrase, item, i) =>{    
    if(!isNaN(item)){
    return newPhrase.concat(numStrings2[parseInt(item)]);
    }
   return newPhrase.concat(item);

   }, []);
console.log(numToText2(str).join(' '));
  
  });

//Counting parentheses step problem

let parens = "((())))((((((";
let countParen = (parenths) =>
  parenths
    .split('')
    .reduce((count, item, i)=>{
      if(item === '(') count++;
      if(item === ')') count--;
      if(count <= 0) count = 0;
      return count;
    }, 0);

console.log(countParen(parens));//returns 3
let parens = "((())))((((((";
let countParen = (parenths) =>
  parenths
    .split('')
    .reduce((count, item, i)=>{
      if(item === '(') count++;
      if(item === ')') count--;
      if(count <= 0) count = 0;
      return count;
    }, 0);

console.log(countParen(parens));//returns 3
//mapObject:  maps an object and takes in a callback
let mapObject = (object, action, exception) => {
  let transObject = {};
    for(var key in object){
        transObject[key] = action(object[key], key, object);
    }
  return transObject;
}

let sanitize = (value, key) => {
  if (value === exception)return value;
  return value.toUpperCase();
}
console.log(mapObject(input, sanitize));
/////mapObject
let input=
{
  first_name: "James",
  last_name: "Hu",
  gender: "Male",
  biography: "Oh hey, I'm just a guy"
}
//I: Input- Source Object
//O: Output- Object with altered values
//C: Contraints - do not apply callback to last item
//E: Edge Cases: what if it's not an object

//declare a map object
//with arguments of object and callback function
//if(object[key] === exception) 
    

let mapObject = (object, action) => {
  let transObject = {};
    for(var key in object){
      console.log(key);
      if(key === 'biography'){
        transObject[key] = object[key];
      } else  {
        transObject[key] = action(object[key], key, object);
      }
    }
  return transObject;
}

let sanitize = (value, key) => {
  return value.toUpperCase();
}
mapObject(input, sanitize);




//RECURSION!!!!/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
//sum using recursion
var sumRecursion
 = function(array) {

  sum += array[count]
  count ++

  if (count < array.length) {
    sumRecursion
    (array);
  } else {
    return sum
  }

}
// 3. Sum all numbers in an array containing nested arrays.
//let arraySum = [1,[2,3],[[4]],5];
// sum flatten with Antoine
var arraySum = function(array) {
 
  let count = array.length - 1;
   console.log(array,  "lenght" + array.length + " count" + count);
//let sum = 0;
  if(count < 1){
    console.log("term");
    return arraySum(array[0]);
  } 
  if (Array.isArray(array[count])){
    return arraySum(array.pop()) + arraySum(array)
  }
  else if (array.length ){
    return array[count] +  arraySum(array.slice(0, array.length -1))
  }
  else{
    //arraySum(array);
    return array
  }
 
 
  //return arraySum(array.slice(0, array.length -1));
};
console.log(arraySum([1,[2,3],[[4]],5,1,[2,[2]],[1,2,[[2,3,4]]]]));


  var sum = 0
  var count = 0

sumRecursion
([1,2,3]);

console.log(sum);

//A better sum sumthing- sum an array of integers

let pracRay = [1,2,3,4,5];
let sum = (arr, num) =>{
  if(num === 1)return num;
  return num += sum(arr, num - 1);
}
console.log(sum(pracRay, pracRay.length));

//factorial with recursion

let factorial = (num) =>{
  if(num === 0)return 1;
  return num * factorial(num - 1);
}
console.log(factorial(4));

// Sum all numbers in an array containing nested arrays.
var arraySum = function(array) {
 
  let count = array.length - 1;
   console.log(array,  "length " + array.length + " count " + count);
  if(count < 1){
    console.log("term");
    return arraySum(array[0]);
  } 
  if (Array.isArray(array[count])){
    return arraySum(array.pop()) + arraySum(array)
  }
  else if (array.length ){
    return array[count] +  arraySum(array.slice(0, array.length -1))
  }
  else{
    return array
  }
 
};
console.log(arraySum([1,[2,3],[[4]],5,1,[2,[2]],[1,2,[[2,3,4]]]]));

//REDUCE!!!!!
//Largest number in an Array
      var ratings = [2,3,1,9,4,5];
      
      console.log(ratings.reduce((largest, num ) =>{
        console.log(largest, num);
        if(largest < num) largest = num;
        return largest;
      },0));




//METHODS:
//difference between push and concat

var arr = ['a', 'b', 'c'];
var x = arr.concat('d');

console.log(arr);//logs ['a', 'b', 'c', 'd']
console.log(x);// logs length of the array

var arr1 = ['a', 'b', 'c'];
var x1 = arr.concat('d');

console.log(arr1);//logs ['a', 'b', 'c']
console.log(x1);// logs['a', 'b', 'c', 'd']

//sorting
 var y = [1, 9, 3, 100, 800, 20].sort(function(a,b){
 	return a - b;
 })

$("li.recording").on('click', (e) => {
	
})


///Ali Practice
let input=
{
  first_name: "James",
  last_name: "Hu",
  gender: "Male",
  biography: "Oh hey, I'm just a guy"
}
//I: Input- Source Object
//O: Output- Object with altered values
//C: Contraints - do not apply callback to last item
//E: Edge Cases: what if it's not an object

//declare a map object
//with arguments of object and callback function
//if(object[key] === exception) 
    

let mapObject = (object, action) => {
  let transObject = {};
    for(var key in object){
      console.log(key);
      if(key === 'biography'){
        transObject[key] = object[key];
      } else  {
        transObject[key] = action(object[key], key, object);
      }
    }
  return transObject;
}

let sanitize = (value, key) => {
  return value.toUpperCase();
}
mapObject(input, sanitize);

//SetTimeout_TIMEOUT fun

setTimeout(function(){
  asyc1 += 1;
}, 1000);

var async1 = 0;
for (var i = 10; i < 13; i++){
  setTimeout(() =>{
    
  }, i);
}
setTimeout (() =>{
  console.log(async1);
  done();
},200);





