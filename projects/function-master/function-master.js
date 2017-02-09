//ObjectValues
//13
// function objectValues(obj) {
//     return Object.values(obj);
// }

var objectValues = (obj) => Object.values(obj);
//14
function keysToString(obj){
    return Object.keys(obj).join(' ');
    
}
//15
function valuesToString(obj){
    var arrForWord = [];
    var newArr = Object.values(obj);
   for(var i = 0; i < newArr.length; i++){
       if(typeof newArr[i] === "string"){
        arrForWord.push(newArr[i]);
       }
   }
   return arrForWord.join(' ');
}


//16
function arrayOrObject(collection){
    if (Array.isArray(collection)) return 'array';
    else if (typeof collection === 'object') return 'object';
    
}
//17
function capitalizeWord(word){
    return word = word.charAt(0).toUpperCase() + word.slice(1);
}
//18
function capitalizeAllWords(words){
    words = words.split(' ');
    var arr = [];
    for(var i = 0; i < words.length; i++){
       arr.push(capitalizeWord(words[i]));
    }
    return arr.join(' ');
}
//19 
function welcomeMessage(obj){
    return "Welcome " + capitalizeWord(obj.name) + "!";
    
}

//20
function profileInfo(obj){
    return capitalizeWord(obj.name) + ' is a ' + capitalizeWord(obj.species);
}
//21
function maybeNoises(obj){
    if(obj.hasOwnProperty('noises') && obj.noises.length > 0) return obj.noises.join(' ');
    else return 'there are no noises';
    
}
//22
function hasWord(string, word){
    let newRay = string.split(" ");
    for (let i = 0; i < newRay.length; i++){
        if (newRay[i] === word) return true;
    }
    return false;
}
//23
function addFriend(name, obj){
    obj.friends.push(name);
    return obj;
}
//24
function isFriend(name, obj){
    if(obj.friends){
    for (var i = 0; i < obj.friends.length; i++){
        if(obj.friends[i] ===  name) return true;
    }
    }
    
    return false;
}
//25
function nonFriends(name, list){
    var newArr = [];
    
    for (var i = 0; i < list.length; i++ ){
        if(!isFriend(name, list[i]) && name !== list[i].name){
            newArr.push(list[i].name);
        }
    }
    return newArr;
}
//26
function updateObject(obj, key, value){
    if(Object.keys(obj).includes(key)) obj[key] = value;
    else obj[key] = value;
    return obj;
    
}
//27
function removeProperties(obj, strings){
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++){
        for (var j = 0; j < strings.length; j++){
            if(keys[i] === strings[j]) delete obj[keys[i]];
        }
    }
    return obj;
}
//28
function dedup(collection){
    var noDupesArray = [collection[collection.length]];
    for(var i = collection.length; i > 1; i--){
        if(collection[i] !== collection[i - 1]) {
            noDupesArray.push(collection[i - 1]); 
            
        }
    }
    return noDupesArray; 
    
}