const products = [
    {name: cucumber, type: vegetable, quantity: 0, price: 1},
    {name: banana, type: fruit,quantity: 10, price: 15},
    {name: celery, type: vegetable,quantity: 30, price: 13},
    {name: orange, type: fruit,quantity: 3, price:5},

];


// For Loop example of filtering / sorting data

const filteredProducts = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].type === "fruit") {
        filteredProducts.push(products[i]);
    };   
};


// Introducing the filter method.

products.filter(function(product) {
    return product.type === "fruit";
});

// Here we're saying return an array with elements that have the type ===  "fruit"

products.filter(function (product) {
    return product.type === "vegatable" && product.quantity > 0 && product.price === 10;
});

// FIlter is a conditional method. Returns array according to the condition you provide


