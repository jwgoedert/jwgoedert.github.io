//step I
var animal = {};
animal.species = "bear";
animal["name"] = "Bob";
animal.noises = [];
console.log(animal);

//step II
var noises = [];
noises[0] = "roar";
noises.push("wimper");
noises.unshift("growl");
noises[noises.length] = "scratchy";
console.log(noises.length);
console.log(noises.length-1);
console.log(noises);

//step III
// Using bracket syntax, assign the noises property on animal to our new noises array.
//  Using any syntax add another noise to the noises property on animal.
//  console.log animal.
//  Does it look right?
animal.noises = noises;
animal.noises.push("chomp");
console.log(animal);
// Step 6 - A Collection of Animals

// from now on i will say inspect instead of console.log

//  Create a variable named animals and assign it to an empty array.
//  push our animal that we created to animals.
//  inspect animals. What does it look like?
//  Create a variable called duck and assign it to the data:
// { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
//  push duck to animals
//  inspect animals. What does it look like?
//  Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
//  inspect animals.
//  inspect the length of animals
//  Is everything looking right?
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'],
    };
animals.push(duck);
console.log(animals);
var createAnimal =  function(species, name, noises){
    return {
        species: species,
        name: name,
        noises: noises,
    }
};
var dog = createAnimal("dog", "Fred", ["bark", "growl", "howl"]);
var cat = createAnimal("cat", "Sally", ["meow", "growl", "scratch"]);
animals.push(dog, cat);
console.log(animals);
//Step 7:
// Imagine that our website has a profile page for each animal. On this profile page we can see a list of each animal's friend on the website. Just like how people have a list of friends or followers on facebook or instagram. What would be a good data structure to hold this list of friends?

//  Choose a data structure for this list of friends.
//  Write a comment in your code that explains why you chose this data structure.
//  Create a variable called friends and assign it to the data structure that you chose.
//  Take a look at the documentation for Math.random here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//  Write a function that takes our animals array and returns a random element using Math.random
//  Using this function that you just created, get a random animal and add its name to friends.
//  inspect friends.
//  add friends as a property named friends on one of the animals in animals
//  inspect your work.

//  Use an array, because we want a collection of values(or friends if you will...even if you won't)
var friends = [];
var random = function(collection){
    return collection[Math.floor(Math.random() * collection.length)];
}
// friends.push(random(animals).name);
// console.log(friends);
// duck.friends = friends;
friends.push(random(animals).name);
console.log(friends);
duck["friends"] = friends;
console.log(friends);
console.log(duck);

//PART II: 
//Step 1: Search
//create a function search that takes the name of an animal as a parameter
//returns an animals object if the animal exists and returns null if not
function search(animalName){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === animalName) return animals[i];
    }return null;
    
}

//Step 2: Edit
/*
Write a function called edit that:
Takes 2 parameters, a name of an animal and an object
If an animal with that name exists, replace it's entire object with the new object
Otherwise do nothing
Test it on the website
*/
//writing function with parameters animal and object
function edit(animalName, animalObj){
    //if animal exists replace animal with animalObj else do nothing
    for (var i = 0; i < animals.length; i++){
        if(animalName === animals[i].name) return animals[i] = animalObj;
    }
    
}
//Step 3: Remove
/*
Write a function called remove that:
Takes 1 parameter, a name of an animal
If an animal with that name exists, remove it
Test that it works on the website
*/
function remove(animalName){
    for(var i = 0; i < animals.length; i++){
        if(animalName === animals[i].name){
        return animals.splice(i, 1);
        }
    }
}
// //STEP 4: Create
// Write a function called create that:
// Takes 1 parameter, an object
// Checks that the object has a name property with a length > 0
// Checks that the object has a species property with a length > 0
// Has a unique name, meaning no other animals have that name
// Adds this new object to the animals array, only if all the other conditions pass.
// Make sure it works
// This is called data validation and it's extremely important in web development!

// function create(obj){
//     if(obj.name.length <= 0 || obj.species.length <= 0)return;
//         for(var i = 0; i < animals.length; i++){
//             if(obj.name !== animals[i].name) animals.push(obj); 
//         }
//     return; 
// }
function create(obj){
    for (var i = 0; i < animals.length; i++){
     if(animals[i].name === obj.name) return;   
    }
    if(obj.name.length > 0 && obj.species.length > 0){
        animals.push(obj);
    }
    
}