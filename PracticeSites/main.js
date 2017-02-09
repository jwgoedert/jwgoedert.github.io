function main() {
$('.skillset').hide();
$('.skillset').fadeIn(1000);
$('.projects').hide();
$('.projects-button').on('click', function(){
  $(this).next().toggle();
  $(this).toggleClass('active');
});
/*
var arr = ["this", "that", "the other"];
console.log(arr);
function longestWord(array){
var longestWord = array.reduce(function(longest, currentWord){
if (currentWord.length > longest.length)
return currentWord;
else
return longest;
}, '');
};
console.log("maybe" + longestWord(arr));
*/
var phrase1 = "The quick brown fox jumped over the lazy dog";
var arr = ["this", "that", "the other"];
var cards = ["ace", "two", "three","four", "five", "six", "seven", "eight",
"nine", "ten", "jack", "queen", "king"];
var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord + " is the longest word with " + longestWord.length + " characters!";
}
//console.log(findLongestWord(phrase1));
arr.reduce(function(next, current){
	return next + " is " + current;
},'');
function makeArrayOfObjectPairs(arr,arr2){
var newObj = {};

}
makeArrayOfObjectPairs(cards, suits);
//console.log(contains(suits,"hearts"));
var atelier = new Object();
atelier.sqFt = 2500;
atelier.color = 'white';
//console.log(atelier);
//practice on objects from web
var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

//console.log(myObj);
//coderbyte examples
function longestWord(sen){
	var arr = sen.match(/[a-z0-9]+/gi);
	var sorted = arr.sort(function(a,b){
		var result = b.length - a.length;
		//console.log(result,a,b);
		return result;
	});
	//console.log(sorted[0]);
	return sorted[0];
}
longestWord("this is a pretty long**&&% phrasey mcgee(@*#@(#");

//Working array adding function with recursion..
var countRecursion = function(array, ind) {
  if (ind < array.length) {
    return array[ind] + countRecursion(array, ind + 1);
  } else {
    return 0;
  }

}
  var sum = 0
  var count = 0
sum = sum + countRecursion([1,2,3, 5, 6, 7], count);
//console.log(sum);
//
var sum = function(array) {
var pos = 0;
if (pos < array.length){
	return array[pos] += sum(array[pos + 1]);
	//console.log(array[pos+1]);
}
};
var sums = sum([9,0,87,6,8,5,3]);
//console.log(sums);

//is Even = checks if a number is even 
var isEven = function(n){
	if (n % 2 === 0) return "it's even";
	else return "nope";
}
//console.log(isEven(5));
//console.log(isEven(100));


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
if(n < 0) return 0;
return n += sumBelow(n - 1);
};
//console.log(sumBelow(4));
}

$(document).ready(main);