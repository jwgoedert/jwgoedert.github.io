// takes an object and returns its values as an array
var objectValues = function(object){
    var array = [];
    for (var key in object) {
        array.push(object[key]);
        }return array;
    }
//takes an object and returns its keys in a string
var keysToString = function(object){
    var string = "";
    for (var keys in object){
        string += keys + " ";
    } return string.trim();
}

//takes an object and outputs its values to a string

var valuesToString = function(object){
    var string = "";
    for (var keys in object){
        if (typeof(object[keys]) === "string" ){
        string += object[keys]+ " ";
        }
    } return string.trim();
}
//test whether something is an array or an object
var arrayOrObject = function(collection){
    if (collection instanceof Date) return false;
    if (Array.isArray(collection)) return "array";
    if (typeof(collection) ===  "object") return "object";
    return false;
    }
//take a string and capitalize the first letter
var capitalizeWord = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//take a string and capitalize every word in the string
var capitalizeAllWords = function(string){
    var words = string.split(' ');
    for (var i = 0; i <words.length; i ++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }return words.join(' ');
}   
//takes an object with a name property and returns "Welcome <name>"
function welcomeMessage (object){
    return ("Welcome " + capitalizeWord(object.name) + "!");    
}
//takes an object with a name and species properties and returns "name is a species"
function profileInfo(object){
    return (capitalizeWord(object.name) + " is a " + capitalizeWord(object.species));
}
//takes an object and returns noises property separated by spaces or "there are no noises"
function maybeNoises(object){
    if(Object.keys(object).length === 0 ||object.noises.length === 0){
        return "there are no noises";
    }
    if(object.noises ){
        return object.noises.join(" ");
    } 
}
//takes a string of words and a word and returns true if the word is in words otherwise false
function hasWord(sentence, word){
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i ++){
        if (word === words[i]){
            return true;
        }
    }return false;    
}

//takes a name and an object and adds the name to the object's friends' array
//before returning the object
function addFriend(name, object){
    object.friends.push(name);
    return object;
}
//takes a name and an object and returns true if name is in friends and false
//otherwise
function isFriend(name, object){
    if (Object.keys(object).length === 0){
        return false;
    }
    for (var i = 0; i < object.friends.length; i ++ ){
        if(name === object.friends[i]){
            return true;
        }
    }return false;
}
//takes a list of people and returns a list of names that <name> is not friends with
 function nonFriends(name, list){
    var newList = [];
    for(var i = 0; i < list.length; i ++){
      if (name !== list[i].name && list[i].friends.indexOf(name) === -1 ){
          newList.push(list[i].name);
      }
        // if (name !== list[i].friends[i]){
        //     newList.push(list[i]);
        // }
    }return newList;
    
}

//takes object key and value and updates key and value or creates key if it 
//doesn't already exist
function updateObject(object, key, value){
    object[key]= value;
    return object;
}
//takes an object and an array of strings and removes any properties in the 
//object if they're in the array
function removeProperties(object, array){
  for(var j = 0; j < array.length; j++){
   for( var key in object){
    if(key === array[j]){
        delete object[key];
        }
    

  }  
}return object;
}
//takes an array and returns a new array with al duplicates removed
function dedup(array){
    var newArray = array.slice(0);
    var i = newArray.length;
    while(i--){  
      if(newArray.indexOf(newArray[i],i+1)>-1){  
        newArray.splice(i,1);  
        }
    }
    return newArray; 
}

