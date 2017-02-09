/*global $ _ */
$(document).ready(function() {
    $.getJSON('data/product.json', function(products) {
        //1. initView//
        initView(products);
        //2. show all the products//
        showProducts(products); //blows away dom and repaints it with requested products

        const res = search(products, 'pink');
        // console.log(res);
        //console.log("Summary" , summary);
    });
});
function initView(products) {
    // 1. Summarize type of products, use the summary array to generate dropdown 
    // items in the filterBy dropdown box.
    var summary = [];
    _.each(products, function(product, id) {
        const types = (products[id].type)
        summary.push(types);
        const sumUnique = _.unique(summary);
    });
    //phones and cases arrays
    var phones = _.filter(products, function(item, index) {
        return products[index].type === 'phone';
    });
    var cases = _.filter(products, function(item, index) {
        return products[index].type === 'case';
    });
    console.log('phones', phones);
    console.log('cases', cases);
    console.log("Unique", _.unique(products));

    // 2. Add event listeners for filterBy onChange: callback should find 
    // selected filterBy value, use value to filter products by type, pass result
    // to showProducts()
    $('#phones-list').on('click', function(event) {
        event.preventDefault();
        console.log("phonesies my balonesies!");
        showProducts(phones);
    });
    $('#cases-list').on('click', function(event) {
        event.preventDefault();
        console.log("cases in yo faces!");
        showProducts(cases);

    });
    $('#all-list').on('click', function(event) {
        event.preventDefault();
        console.log("all you called!");
        showProducts(products);
    });
    //products click
   // $("#lightbox").append($('.product'));
    $('#products').on('click', function(event) {
        event.preventDefault();
        console.log("product", $(event.currentTarget).data('desc'));
        // product = $(event.currentTarget);//.data('product');
       // showProducts(product);

    });
    // 3. Add event listener for search box, callback should pluck out search term,
    // execute recursive search (still needs to be written) and pass results to 
    // showProducts().
    $('#form-product-search').on('submit', function(event) {
        event.preventDefault(); //don't reload page!!!foo
        showProducts(search(products, $('#input-search').val()));

    });
    function lightBox(){
        var $lightBox = $('#lightbox');
        $lightBox.on('click', function(){
            $lightBox.fadeIn(400,function(){
                $('.product', $lightBox).remove();
            })
        });
    }
}

// $('#products').on('click', 'a',function(e){
//     console.log('tsbeenclicked');
//     var product = $(e.currentTarget).data('product');showProducts(product);
// });
function showProducts(products) {
    //1. Empty all current products
    //2. Generate all html to show new list of products
    //create a method that returns a <ul> that has all of the <li>, everything is 
    //styled correctly
    $('#products')
        .empty()
        .append(createProductList(products));
}

function createProductList(products) {
    //returns jQuery wrapped <ul>
    return $('<ul>')
        .attr('id', 'list-products')
        .addClass('list-products')
        .append(_.map(products, function(product) {
            return createProductListItem(product);
        }));
}

function createProductListItem(product) {
    //return jQuery wrapped <li>

    return $('<li>')
        .append(
        $('<a>')
        .addClass('product')
        .data('product', product)
        .append(createImageDiv(`img/product/thumbs/${product.image}`))
        .append(createProductDetailDiv(product.desc, product.price, product.stock))
        );
    
}

function createImageDiv(path) {
    return $('<div>')
        .append($('<img>').attr('src', path));
    //returns jQuery wrapped <div> that has an <img> tag inside
}

function createProductDetailDiv(desc, price, stock) {
    //returns a jQuery wrapped <div> which has three children divs with the desc, 
    //price, stock(use flexbox with <li> next to image to get horizontal orientation)
    return $('<div>')
        .append($('<div>').text(desc))
        .append($('<div>').text("$" + price))
        .append($('<div>').text('Only' + stock + ' units left in stock.'));

}

/**
 * collection: Any Array or Object
 * target: String representing search term 
 * recursion excursion
 */
function search(collection, target) {
    // 0. create something to hold the results//
    target = target.toLowerCase();
    var results = [];
    // 1. iterate collection(each?)//
    _.each(collection, function(value) {
        // 2. for each value in collection:
        // a. is this value a string? if yes, do your substring search for target
        //      >if matched, add a product to results, if not, ignore.
        if (typeof value === 'string') {
            // base case //
            if (value.toLowerCase().indexOf(target) > -1) {
                results.push(value);
                console.log(value);
            }
            // b. is this value a collection? 
            //      >if(search(value, target).length)(if it has anything in it)
            //          >results.push(value) 
            //return results
        }
        else if (isCollection(value)) {
            // recursive case //

            if (search(value, target).length) {
                results.push(value);
            }
        }
    });
    return results;
}

function isCollection(value) {
    if (value === null) return false;
    if (value instanceof Date === true) return false;
    if (typeof value !== "object") return false;
    return true;
}