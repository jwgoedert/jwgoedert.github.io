/*global $*/
/*global _*/
//Swapping things from my mac to cloud 9 & git
$(document).ready(function() {
    //functions

    // const loadData = () => {

    // };
    let allProducts;
     
    const renderProducts = (products) => {
        var mappedList =
            products.map((val, key) => {
                let $desc = val.desc; 
                let $image =$('<img class="image">').attr( 'src', 'img/product/thumbs/' + val.image);
                let $price = $("div").text(val.price);
                let $color = val.color;
                let $li = $('<li>');
                $li.append($image)
                    .append($desc) 
                    .append($price)
                    .append($color)
                console.log("this is the val", val);
                //(productObject).appendTo($li);
                return $li;
            });
            
        $("#products").append(mappedList);
    };



    const init = () => {
        $.getJSON('data/product.json', (data) => {
            console.log(data);
            allProducts = data;

            renderProducts(allProducts);
        });


    };

    init();
});
