const products = [
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

// Coding Exercise 6: Filtering Values

const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
const filteredNumbers = numbers.filter(function(num) {
    return num > 50;
});

// Coding Exercise 7: Handling Permissions with Filter

const users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];

const filteredUsers = users.filter(function(user) {
    return user.admin === true;
});

console.log(filteredUsers);