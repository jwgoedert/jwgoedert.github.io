//work involving creation of numbers for cards of a certain length...

// for (var i = '00000000'; i.length < 20; i = i + '0'){
//   console.log(i);
// }
// var chinaArray = [];

// chinaArray.push('624', '625', '626');
// for (var k = 6282; k <= 6288; k++){
//   chinaArray.push(k.toString());
// }
// for (var j = 622126; j <= 622925; j++){
//   chinaArray.push(j.toString());
// }

// console.log(chinaArray);
// console.log(chinaArray.length);
// var x = new Array(5).join('1');
// console.log(x);


//   var makeNumber = function(prefix, length){
//     let newArr = [prefix].push(new Array(length + 1).join('0'));
//     return newArr;
    
//   }
//   console.log(makeNumber("6782", 9));

var makeNumber = function (prefix, length) {
  let newArr = new Array(length - prefix.length + 1).join('0');
  return prefix + newArr;
}
var arrRange = (start, end) => {
  if (start === end) return [start];
  return [start].concat(arrRange(start + 1, end));
}