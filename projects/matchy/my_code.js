//step 1 //
var animal = {};
animal.species = "dog";//dot notation to create key value pairs
animal["name"] = "Fluffy";//using array notation
animal.noises = [];
//console.log(animal);
var noises = [];
noises[0] = "oink";
noises.push("squeal");
noises.unshift("sizzle");
noises[noises.length] = "squeak";
//console.log(noises.length);
//console.log (noises[noises.length-1]);
//console.log(noises);
animal['noises']= noises;
animal.noises.push("oink2");
//console.log(animal);
var animals = [];
animals.push(animal);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
var alligator = { species: 'alligator', name: 'Slider', noises: ['sausage', 'grrrrrr', 'roar', 'hisssss'] };
var bird = { species: 'bird', name: 'Flyer', noises: ['chirps', 'tweet', 'whoosh', 'mock'] };
animals.push(duck, alligator, bird);
//console.log(animals);
var friends = [];
function getRandomInt(array){
    var random = Math.floor(Math.random() * array.length);
    return array[random];
}
friends.push(getRandomInt(animals));
animals.friends = friends;
//console.log(animals);
function search(nameOfAnimal){
    for (var i = 0; i < animals.length; i++){
        if(nameOfAnimal === animals[i].name){
           return animals[i];
        }
    }
}
search();

function edit(nameOfAnimal, animal){
     for (var i = 0; i < animals.length; i++){
        if(nameOfAnimal === animals[i].name){
           animals[i] = animal;
           return;
        }
    }
}

function remove (nameOfAnimal){
    for (var i = 0; i < animals.length; i++){
        if(nameOfAnimal === animals[i].name){
           animals.splice(i,1)[0];
            return;
        }
    }
}

function create(newObject){
    if (newObject.name.length && newObject.species.length){
        const names = animals.map(function(animal){
            return animal.name;
        });
        if(names.indexOf(animal.name)=== -1) return animals.push(animal);
    }        
}

for(var i = 0; i < animals.length; i++){
            if(newObject !== animals[i].name){
                return newObject
            }
        }
        
    }animals.push(newObject);