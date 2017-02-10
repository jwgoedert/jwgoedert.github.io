


//  return movieLists.map(function(genre){
//     	return genre.videos.map(function(videos){
//         return video.map(function(video){
//           return {'id': video.id,
//                   'title': video.title,
//                   'boxart':video.boxarts.filter(function(boxart){
//                     	return (boxart.width === 150 && height === 200);
//                   }),
          		
//           }
//         });
 
//       });
  
//   }).concatAll(); // Complete this expression!

// }

//ConcatMap: iterates through and adds arrays?

  return movieLists.
    concatMap(function(movieList){
    return movieList.videos.
      concatMap(function(movie){
      return movie.boxarts.
        filter(function(boxart){
   				return boxart.width === 150;   
      }).
        concatMap(function(boxart){
          return {id: movie.id,
                  title: movie.title, 
                  boxart: boxart.url,
        });
      });
  
  }); // Complete this expression!

//Using reduce to pull out only the largest item and returning it's url

function() {
	var boxarts = [
			{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
		];

	// You should return an array containing only the URL of the largest box art. Remember that reduce always
	// returns an array with one item.
	let url;
  boxarts.
    reduce(function(xxl, item){
    if (xxl.width * xxl.height < item.width * item.height) xxl = item;
      url = xxl;
      return xxl;
    });  // Complete this expression
	return [url['url']];
}
		
