/*global $*/
/*global _*/
//Swapping things from my mac to cloud 9 & git
$(document).ready(function(){
    
    // const loadData = () => {
        
    // };
    
    let allProducts;
    
    const renderProducts = (products) => {
        
    }
    
    const init = () => {
        $.getJSON('data/product.json', (data) =>{
            console.log(data);
            allProducts = data;        
            
            renderProducts(allProducts);
        });
        
    };
    
    init();
    
});