/*global $*/
/*global _*/
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