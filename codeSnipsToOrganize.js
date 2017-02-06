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

  var sum = 0
  var count = 0


sumRecursion
([1,2,3]);

console.log(sum);










