let blah = "blah";
console.log(blah);
console.log('double blah');

// var arrayToList = function(arr){
//   let newObj = {value:arr[0], rest:null};
//   if(arr.length <= 1){ 
//       return newObj;
//     };
// //   newObj.rest = arrayToList(arr.slice(1));
// //   return newObj;
//      return Object.assign({}, newObj, {rest: arrayToList(arr.slice(1))})
// }
//console.log(JSON.stringify(arrayToList([1,2,3,4])));

var arrayToList = function(arr){
  if(!arr.length) {
    return null;
  }  
  return {value: arr[0], rest: arrayToList(arr.slice(1))}; 
}
//console.log(JSON.stringify(arrayToList([1,2,3,4])));


let list = {value: 1, rest:{value: 2, rest:{value: 4, rest: null}}};
//   console.log(list.rest);

let listToArray = function(list){
  const first = list.value;
  const rest = list.rest;
  let newArr = [first];
  if(rest === null){
    return newArr;
  }
  return newArr.concat(listToArray(rest));
}
var prepend = function(list, el){
  return {value: el, rest: list}; 
}
//take a list and a number and return the element at that place in the list
var nth = function(list, num){
  var count = Array.from(arguments)[2] || 0;  
//   console.log(count);
//   console.log(num)
  if( list === null ){
    return undefined;
  };
  const first = list.value;
  const rest = list.rest;
  //console.log(list.rest);

  if (num < 0){
    return undefined;
  }
  if (num === 0) {
  return list.value;
  }
  return nth(rest, num - 1, count + 1); 
}
  

//console.log(listToArray(list));
console.log(nth(list, 3 ));
