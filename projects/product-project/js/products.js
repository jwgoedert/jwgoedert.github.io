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
                let $image = val.image;
                let $price = val.price;
                let $color = val.color;
                let $li = $('<li>')
                    .append($desc)     
                        
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
