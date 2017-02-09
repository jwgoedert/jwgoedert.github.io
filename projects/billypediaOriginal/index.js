/* global $ _ opspark */
$(document).ready(function () {
    $.getJSON('data.json', function (data) {
            // YOUR CODE BELOW HERE //

            // SECTION TOP RATED //
            //data set
            let topRated = data.discography.topRated;
            //find image within data set
            const firstImageTop = _.first(topRated).art;
            //prepending or placing image then title at top of top-rated section
            $("#section-top-rated")
                .prepend($('<img>', {
                    id: "image-top-rated",
                    class: "image",
                    src: firstImageTop
                }))
                .prepend($("#header-top-rated"));
            //pulling out list items from data array and returning them wrapped in 
            //jquery li tags with class of recording by 'title'
            const topRatedListItems = _.map(topRated, function (recording) {
                return $('<li>')
                    .attr('recording-type', 'top-rated')
                    .data('recording', recording)
                    .addClass('recording')
                    .text(truncateString(recording.title, 25));
            });
            //creating a variable
            const $topRatedList = $('#list-top-rated');
            $topRatedList.append(topRatedListItems);


            // SECTION GENERAL RECORDINGS //
            //data set
            const generalRecordings = data.discography.recordings;
            //creating a new section in sidebar 
            const $sectionRecordings = $('<section>')
                .attr('id', 'section-recordings')
                .addClass('section-recordings')
                .appendTo('#sidebar');
            // header
            const $titleGeneral = $('<header>')
                .attr('id', 'header-recordings')
                .text('General Recordings')
                .addClass('header-recordings')
                .appendTo('#section-recordings');
            // img
            const firstImageUrl = _.first(generalRecordings).art;
            $sectionRecordings.append($('<img>', {
                id: 'image-general',
                class: 'image',
                src: firstImageUrl
            }));

            //list of recordings
            const $listRecordings = $('<ul>')
                .attr('id', 'list-recordings')
                .addClass('list-recordings');
            const listGeneralRecordings = _.map(generalRecordings, function (recording) {
                return $('<li>')
                    .attr('recording-type', 'general')
                    .data('recording', recording)
                    .addClass('recording')
                    .text(truncateString(recording.title, 25));
            });
            $listRecordings.append(listGeneralRecordings);
            $sectionRecordings.append($listRecordings);

            $('.recording').on('click', function(event) {
                const 
                    $li = $(event.currentTarget),
                    recording = $li.data('recording'),
                    type = $li.attr('recording-type');
                    
                $(`#image-${type}`).attr('src', recording.art);
            });

            //Changing Billy Image
            const billyImages = data.images.billy;
            var i = 0;
            $('#image-billy').on('click', function () {
                i++;
                if(i >= billyImages.length) i = 0;
                $("#image-billy").attr('src', billyImages[i]);
            });

            const $sectionTesting = $('<section>')
                .attr('id', 'section-testing')
                .addClass('section-testing')
                .appendTo('#sidebar');

            const $titleTesting = $('<header>')
                .attr('id', 'header-testing')
                .text('Testing 1-2')
                .addClass('header-recordings')
                .appendTo('#section-testing');
            // YOUR CODE ABOVE HERE //
        
        //Create rider table!!
            //rider data
            var createTable = function(items){
                var createRow = function(item){
                    var $row = $("<tr>");
                    var $type = $("<td>").text(item.type);
                    var $desc = $("<td>").text(item.desc);
                    $row.append($type);
                    $row.append($desc);
                    return $row;
                }
                var $table = $("<table>");
                var $rows = items.map(createRow);
                var $caption = $("<caption>").text("Billy's Rideroo!!");
                $table.append($caption);
                $table.append($rows).attr("id","rider-data");
                return $table;
            };
                       let items = data.rider;
            createTable(items).appendTo("#sections");
             
        
    })
        .fail(function () {
            console.log('getJSON on discography failed!');
        });
   
});

function truncateString(string, length) {
    return string.length > length ? string.substring(0, length) + '...' : string;
}
