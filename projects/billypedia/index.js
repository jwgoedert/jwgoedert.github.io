'use strict'
/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function(data) {
            // YOUR CODE BELOW HERE //

            // uncomment this to inspect all available data; delete when done //
            // console.log(data);

            // EXAMPLE: Looping over top rated recordings; replace with your code //
            // let topRated = data.discography.topRated;
            // _.forEach(topRated, function(recording) {
            //     console.log(recording);
            // })

            //get data for recordings
            let recordings = data.discography.recordings;
            let topRated = data.discography.topRated;
            // console.log(topRated);
            // console.log(`Toprated: ${topRated}`);
            // let recordings = data.discography.recordings;
            // console.log(`Recordings: ${recordings}`);
            // //make a "make list" function
            
            function makeList(dataArray) {
                console.log();
                return _.map(dataArray, (disc) => {
                    let $li = $('<li>')
                        .addClass('recording')
                        .on('click', function(event) {
                                console.log(disc.art);
                            $(event.currentTarget).parent().siblings('img')
                            .attr('src', disc.art);
                            })
                        
                    _.each(disc, (discInfo, key) => {
                        let $div = $('<div>')
                            // .text (`${key[0].toUpperCase() + key.slice(1)}: ${discInfo}`)
                            .text(`${key}: ${discInfo}`)
                            .appendTo($li)
                            
                            //.data('recording', disc);         
                    });
                    console.log($li);
                    return $li;
                });

            }
            var topRatedList = makeList(topRated);
             var records = makeList(recordings);
            $('#list-top-rated').append(topRatedList);
            
          
            //console.log(topRated);

            // $('#list-top-rated').append(topList);

            //add new list of other recordings
            
            let $recordings = $('<section>').attr('id', 'section-recordings');
            let $ul = $('<ul>')
                .attr('id', 'list-recordings')
                .addClass('recordings-list');
            ($recordings).append($ul);
            $('#sidebar').append($recordings);
             $('#list-recordings').append(records);    

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
            $('#section-top-rated').prepend($imgDiv).prepend($topRatedImage);

            //prepend recordings image to div
            //prepend div to $($recordings)     
            $recordings.prepend($imgDiv).prepend($recordingsImage);

            //changing billy's images when clicked tests
            //get billly's list of images
            let billyImages = data.images.billy;
            console.log(billyImages);
            //make click function
            var count = 0;
            $('#image-billy').on('click', function(event) {

                //change attribute of image-billy to next image
                if (count === billyImages.length - 1) count = -1;
                count = count + 1;

                $('#image-billy')
                .fadeOut(750)
                .attr('src', billyImages[count])
                .fadeIn(850)
                return;

            })
            
            var createTable = function(rider){
    var createRow = function(item){
        var $row = $("<tr>");
        var $type = $("<td>").text(item.type);
        var $desc = $("<td>").text(item.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    }
    var $table = $("<table>");
    var $rows = rider.map(createRow);
    $table.append($rows);
    return $table;
};
let rider = data.rider;
createTable(rider).appendTo("body");

            $('#section-bio').css('background-color', 'darkseagreen').css('border-radius', '4px');
            $('#section-quotes').css('background-color', 'darkseagreen').css('border-radius', '4px');


            // YOUR CODE ABOVE HERE //
        })
        .fail(function() {
            console.log('getJSON on discography failed!');
        });
});