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
            products.map((productObject, i) => {
                let $li = $('<li>')
                    .attr('id', i)
                    .addClass('phones')
                _.each((val, key, col) => {
                    console.log(val);
                });
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
