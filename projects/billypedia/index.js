/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // })
        
        //get data for recordings
        let topRated = data.discography.topRated;
        console.log(`Toprated: ${topRated}`);
        let recordings = data.discography.recordings;
        console.log(`Recordings: ${recordings}`);
        //make a "make list" function
        function makeList(dataArray) { 
            return _.map(dataArray, (disc) =>{
            let $li = $('<li>')
            .addClass('recording')
            _.each (disc, (discInfo, key ) =>{
        	let $div = $('<div>')
				// .text (`${key[0].toUpperCase() + key.slice(1)}: ${discInfo}`)
                .text (`${key}: ${discInfo}`)
		        .appendTo ($li)
		        .on('click', function(event){
		            
		            console.log('just clicked it!')
		        })
                //.data('recording', disc);         
            });
		    console.log($li);
			return $li;
            });
            
        }
        let topRatedList = makeList(topRated);
        console.log("blah" + topRatedList);
        $('#list-top-rated').append(topRatedList);
        
        let recordingsList = makeList(recordings);
        //console.log(topRated);
        
       // $('#list-top-rated').append(topList);
        
        //add new list of other recordings
        let $recordings = $('<section>').attr('id','section-recordings');
        let $ul = $('<ul>')
            .attr( 'id', 'list-recordings')
            .addClass('list-recordings');
        ($recordings).append($ul);
        $('#sidebar').append($recordings);
        
        
        //get recording data and append to $recordings section list
        
        //fetch location of image
        var topRatedImageLocation = data.discography.topRated[0].art;
        var recordingImageLocation = data.discography.topRated[1].art;
        //create new div for images
        let $imgDiv = $('<div>')
            .addClass('image-container')
            .attr('id', 'image-container-recording');
        
        //create the new image element for topRated
        let $topRatedImage = $('<img>')
            .attr('src', topRatedImageLocation)    
            .attr('id', 'topRated-image')
            .addClass('image');
        
        //create the new image element for recordings
        let $recordingsImage = $('<img>')
            .attr('src', recordingImageLocation)    
            .attr('id', 'recording-image')
            .addClass('image');
            
            
        //append topRated image to div
        //append div to $('#list-top-rated')     
        $('#list-top-rated').prepend($imgDiv).prepend($topRatedImage); 
        
        //prepend recordings image to div
        //prepend div to $($recordings)     
        $recordings.prepend($imgDiv).prepend($recordingsImage); 
        
        //changing billy's images when clicked tests
        //get billly's list of images
        let billyImages = data.images.billy;
        console.log(billyImages);
        //make click function
             var count = 0;
        $('#image-billy').on('click', function(event){
           
            //change attribute of image-billy to next image
            if(count === billyImages.length - 1) count = -1;
                count = count + 1;
             
             $('#image-billy').
                attr('src', billyImages[count]);
            return;    
                     
        })
        
        $('#section-bio').css('background-color', 'darkseagreen').css('border-radius', '4px');
        $('#section-quotes').css('background-color', 'darkseagreen').css('border-radius', '4px');
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});