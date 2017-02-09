// This is the proper way to start a javascript library
(function() {

// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
// */
// _.identity = function identity(anything){
//     return anything;    
// }
//
_.identity = (val)=>val;

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
// */
// _.typeOf = function typeOf (anything){
//   if(anything === null) {
//         return anything = "null";
//   }else if(Array.isArray(anything)){
//       return "array";
//   }
//     return typeof anything;    
// }
_.typeOf = (anything) => {
   if(anything === null) {
        return anything = "null";
   }else if(Array.isArray(anything)){
       return "array";
   }
    return typeof anything;    
}
//with arrows
// _.typeOf = (anything) => {
//   if(anything === null) return anything = "null";
//   if(Array.isArray(anything)) return "array";
//   }
//     return typeof anything;    
// }
/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
 _.first = function first(arr, number){
    var newArr = [];
    if(!Array.isArray(arr)){
        return [];
    }else if(isNaN(number) || number === undefined ){
        return arr[0];   
    }else if(number < 0){ 
        return newArr;
    }else if(number > arr.length){
        return arr;
    }else{ 
        for(var i =0; i < number; i++){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//_.first = 
 _.first1 = function first(arr, number){
    var newArr = [];
    if(!Array.isArray(arr)){
        return [];
    }else if(isNaN(number) || number === undefined ){
        return arr[0];   
    }else if(number < 0){ 
        return newArr;
    }else if(number > arr.length){
        return arr;
    }else{ 
        arr.reduce((memo, val)=>{
            
        },[]);
    }
    return newArr;
    }
  
//}

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.last = function last(arr, number){
   var newArr = [];
    if(!Array.isArray(arr)){
        return [];
    }else if(isNaN(number) || number === undefined ){
        return arr[arr.length - 1];   
    }else if(number < 0){ 
        return newArr;
    }else if(number > arr.length){
        return arr;
    }else{ 
        for(var i =arr.length - number; i < arr.length; i++){
            newArr.push(arr[i]);
            console.log('index', i);
            console.log(newArr);
            console.log(arr);
            
        }
    }
    return newArr;
    }    

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
/*steves
_.each = (list, fn) => {
    if(Array.isArray(list))
    return _.reduce(list,(memo, el, i) => fn(el, i, list), fn()
}_.reduce(list, () => fn(list[0])
*/
_.each = function each(collection, myFunction){
    if(_.typeOf(collection) === 'array'){
        for(var i = 0; i < collection.length; i++){
             myFunction(collection[i], i, collection);
        }
    }
    
    if(_.typeOf(collection) === 'object'){
        var keys = Object.keys(collection);
        for(var i = 0; i < keys.length; i++){
            myFunction(collection[keys[i]], keys[i], collection);
        }
    }           
}
//with arrows and lets
_.each1 = (col, fn) => {
    if(_.typeOf(col) === 'array'){
        for(let i = 0; i < col.length; i++){
            fn(col[i], i, col);
        }
    }
    if(_.typeOf(col) ===  'object'){
        let keys = Object.keys(col);
        for(let i = 0; i < col.length; i++){
            fn(col[keys[i]], keys[i], col);
        }
        
        }
    }


/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
// _.indexOf = function indexOf(arr, value){
//     var newVal = -1;
//     var pass = [];
//     _.each(arr, function(el, i, arr){
//         if(el === value) pass.push(i);
//         });
//         if (pass[0] !== undefined)return pass[0];
//     return newVal;
// }
/*working
 _.indexOf = (arr, value) =>{
    var newVal = -1;
    var pass = [];
    _.each(arr, (el, i, arr) => {
        if(el === value) pass.push(i);
        });
        if (pass[0] !== undefined)return pass[0];
    return newVal;
}
*/
_.indexOf = function(list, val){
    let outVal = -1;
    _.each(list, function(el, i, list){
      if(outVal === -1 && el === val) outVal = i;  
    });
    return outVal;    
}

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function filter(list, test){
    if(_.typeOf(test)!== 'function')test = _.identity;
    
    var newArr = [];
    _.each(list, function(el, i, list){
        if (test && test(el, i, list)) newArr.push(el);
        });
        return newArr;
}
// _.filter =  function filter(list, test){
//     let passed = [];
//     _.each(list, (el, i, list) => {if(test(el, i, list)) passed.push(el)});
//     return passed;
    
// }

/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(list, test){
    var newArr = [];
    _.each(list, function(el, i, list){
       if(test(el, i, list) !== true) newArr.push(el); 
    });
    return newArr;
}
//steve's version
_.reject = (list, test) => _.filter(list, (element, i, list) => !test(element, i, list));

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition1 = function(list, test){
    var truthy = [];
    var falsey = [];
    _.each(list, function(el, i, list){
        if(test(el, i, list)) truthy.push(el);
        if(test(el, i, list) !== true) falsey.push(el);
    })
    return [truthy, falsey];
    
}
//steve's
_.partition = (arr, test) =>[_.filter(arr, test), _.reject(arr, test)];
    

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique =  function unique(list){
 var unArray = [];
 _.each(list, function(el, i, list){
     if(_.indexOf(unArray, el) === -1) unArray.push(el);
 });    
    return unArray;
}
//unique with filter
_.unique1 = (list) =>{
    let newArr = [];
    _.filter(list, function(el, i, list){
        _.indexOf(newArr, el) === -1;
    });

}

/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map1 = function map(collection, fn){
    var newCollection = [];
    _.each(collection, function(el, i, collection){
        newCollection.push(fn(el,i,collection));        
    });
    return newCollection;
}
//steve
_.map = (col, fn) =>{
    let values = [];
    _.each(col, (el, i, col) =>{
        values.push(fn(el, i, col));        
    });
    return values;
}
/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function pluck(arr, property){
    var values = [];
    _.map(arr, function(el, i, arr){
        values.push(el[property]);
        
    });
    return values;
}


/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function contains(collection, value){
    var tOrF = false;
    var valIs;
    _.each(collection, function(el, i, collection){
        tOrF = (el === value ? valIs = true : false);        
    });
    if (valIs !== undefined) return valIs;
    return tOrF;
}

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
/*
_.every = function every(collection, fn){
    var isTrue = false;
    var isFalse = true;
    if(_.typeOf(fn) !== 'function') fn = _.identity;//why this is?
    _.each(collection, function(el, i, collection){
        fn(el, i, collection) ? isTrue = true : isFalse = false;
    });
    if (isFalse === false) return false;
    return isTrue;
}
*/
_.every = (col, test) => {
    if (!test) test = _.identity;
    let passed = true;
    _.each(col, (item, i, col) =>{
        if(!test(item, i, col)) passed = false;
    });
    return passed
};
//every from class
_.every1 = (col, test) => {
    let filtered = _.filter(col, test);
        if (_.typeOf(col) === 'array')
        return filtered.length === col.length;
        
}
/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function some(collection, fn){
    var isTrue = false;
    var isFalse = true;
    if(_.typeOf(fn) !== 'function') fn = _.identity;//why this is?
    _.each(collection, function(el, i, collection){
        fn(el, i, collection) ? isTrue = true : isFalse = false;
    });
    if (isTrue === false) return false;
    return isTrue;
}

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(collection, fn, seed){
    var prevResult = seed;    
    if(seed === undefined) seed = collection[0], prevResult = 1;
    _.each(collection, function(el, i, collection){
        prevResult = fn(prevResult, el, i);
    });
    return prevResult;   
}
//steve


/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//working
/*
_.extend = function extend(obj1){
    var args = Array.from(arguments);
    _.each(args, function(el, i, args){    
        _.each(el, function(val, key, el){
            obj1[key] = val;
        });
    });
    return obj1;
    
    
}
*/
/*
_.extend1 = (...objects) =>{
    const target = objects[0];
    _.each(objects, (obj, i, objects) =>{
        if(i === 0)return;
        _.each(obj,( val, key, obj)=>{
                target[key] = val;
});
    });
    return target;
}
*/
_.extend = (...a) => {
  _.each(a, b => {
    _.each(b, (c, d) => {
      a[0][d] = c;
    })
  })
  return a[0];
}
//Add Comment
// This is the proper way to end a javascript library
}());
