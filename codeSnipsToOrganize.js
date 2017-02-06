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