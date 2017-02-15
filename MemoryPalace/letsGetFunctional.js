//Let us get functional
//#!/usr/bin/env node

'use strict';

const customers = require("./data/customers.json");
const _ = require('lowdown-jwgoedert-2017');

/**
 * 1. Import your lodown module using the require() method, 
 *    using the string 'lodown-<my-username>', or whatever 
 *    name with which you published your npm lodown project.
 * 
 * 2. Solve all problems as outlined in the README.
 */
 
// 1. number of males.
    let numMales = _.reduce(customers, (numMales, c, i) =>{
        if(c.gender === "male") return numMales + 1;
        return numMales;
    }, 0);
    console.log("There are "  + numMales + " males in this world.");
// 2. number of females
    let numFemales = _.reduce(customers, (numFemales, c, i) =>{
        if(c.gender === "female") return numFemales + 1;
        return numFemales;
    }, 0);
    console.log("There are "  + numFemales + " females in this world.");
// 2.5. number of transgender

    let numTransgender = _.reduce(customers, (numTransgender, c, i) =>{
        if(c.gender === "transgender") return numTransgender + 1;
        return numTransgender;
    }, 0);
    console.log("There are "  + numTransgender + " trangsgenders in this world.");
// 3-4. oldest customer, youngest customer
    let oldYoung = 
    _.map(customers, (el) => el.age);
    let oldest = 
    _.reduce(oldYoung, (m,e)=>{
      if(m < e) m = e;
      return m;
    }, 0);
    console.log('oldYOUNG ' + oldYoung);
    console.log("oldest " + oldest);
    // let youngest = _.reduce(customers, (memo, el, i) =>{
    //     console.log(memo.age + "  " + el.age);
    //     //if(memo[0].age > el.age) memo[0] = el;
    //     if(memo.age > el.age) memo = el;
    //     return memo;
    // }, {age: Infinity });
    
    // let oldest = _.reduce(customers, (memo, el, i) =>{
    //     //console.log(memo.age + "  " + el.age);
    //     //if(memo[0].age > el.age) memo[0] = el;
    //     if(memo.age < el.age) memo = el;
    //     return memo;
    // }, {age: 0 });
    // console.log(youngest.name);
    // console.log(oldest.name);
    
    
    // let oldest1 = _.reduce(customers,(oldest, customer)=>{
    //     if(customer.age > oldest.age) oldest = customer;
    //     return oldest;
    // }, {age: 0});
    
    // let oldest = _.reduce(oldYoung, (o,c)=>(c.age > o.age) ? c:o, {age:0});
    // console.log(`The oldest customer is ${oldest.name} at ${oldest.age}years old`);
    
    
// 5. average balance
    let launder = (numStr) =>
//    +(numStr.replace('$','').replace(',',''));
  +(numStr.replace(/[^0-9\.]+/g, ''));
  function formatMoney (money){
    let cleanMoney = money
        .split('$')
        .join('')
        .split(',')
        .join('');
        
        return parseFloat(cleanMoney);
        
      //return money.split('$', ',').join()
  }
  
   //console.log(launder("$1,234.34"));
   //let avBal= (list) => {
    let avBal = _.reduce(customers, (sum, cus) =>{
        sum += launder(cus.balance);
        return sum;
    }, 0);
    console.log((avBal/customers.length).toFixed(2));
   //}
   
// 6: Find how many customers' names begin with an arbitrary letter. Write a function to answer this question, then log an answer.
    
    //steve's version
    function nameStartsWith(col, letter){
        let nameCount = _.reduce(col, (sum,customer) =>{
            if(customer.name[0].toLowerCase() === letter.toLowerCase()) sum += 1;
            return sum;
        },0);
        
        return nameCount;
    }
    let letter = 'A';
    console.log(`${nameStartsWith(customers,letter)} customers' names start with ${letter}.`);      
// 7: Find how many customers' friends' names begin with an arbitrary letter. Write a function to answer this question, then log an answer.
    function friendsNamesStartsWith(customers, letter){
        return _.reduce(customers, (sum, customer) =>{
            
            return _.reduce(customer.friends, (sum, friend) => {
                if (friend.name[0].toLowerCase() === letter.toLowerCase()) sum++;
                return sum;
            }, sum);
        }, 0);
    }
console.log(friendsNamesStartsWith(customers, 'B'));
// 8: Find how many customers are friends with a customer (by name).
function customersHaveFriends(customers, target){
    return _.reduce(customers, (count, customer, i) =>{
        
        // let occurs = _.reduce(customer.friends, (count ,friend, i ) =>{
        //         if(friend.name === target) return count.concat(friend.name);
        //         console.log(friend.name);
        //         console.log("count" + count);
        //         return count;
        // }, []);
        // console.log(occurs);
       // console.log(customer.friends);
        let personArray = _.filter(customer.friends, (el, i, arr) =>{
            console.log(el.name);
            // if(el.name === target) return el.name;
            return el.name === target;
            // return el.name === target;            
        });
        console.log(personArray);
        return count += personArray.length;
    }, 0);

    
}// 9: Find the top 3 most common tags among the customers.
    function findTags(customers, numResult){
        let hist = _.reduce(customers, (hist, customer) =>{
            return _.reduce(customer.tags, (hist, tag) =>{
                if(hist[tag] === undefined) hist[tag] = 1;
                hist[tag]++;
                return hist;
            }, hist);
        }, {});

    let tagCounts = _.map(Object.keys(hist), (k) =>{
        return {name: k, count: hist[k]};
    })
     
//    let tagCounts = _.map(Object.keys(hist), (k) => ({name: k, count: hist[k]})); 
    let sortedTags = tagCounts.sort((a,b) => b.count - a.count);
    
    return _.first(sortedTags, numResult);
        // return _.reduce(customer.tags, (tags, customer) =>{
            
        //     return _.reduce(tags, (tags, tag)=>{
                
        //     });            
        // });
        
    }
    console.log(findTags(customers, 3));

// 10: Create a summary of genders, the output should be:

var _.reduce = function(collection, fn, seed){
    var prevResult = seed;    
    if(seed === undefined) seed = collection[0], prevResult = 1;
    _.each(collection, function(el, i, collection){
        prevResult = fn(prevResult, el, i);
    });
    return prevResult;   
}