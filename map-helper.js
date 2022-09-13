
// The Map Helper

// var numbers = [1,2,3];
// var doubledNumbers = [];

// // Classic for loop
// for (let i = 0; i < numbers.length; i++) {
//     doubledNumbers.push(numbers[i] * 2);    
// };

// console.log(doubledNumbers);


// In large, complex JavaScript applications, we want to avoid mutating arrays and changing date whenever, wherever possible.

/* Introducing the map helper

- It returns a new array */

// const doubled = numbers.map(function(number){
//     return number * 2;
// });



// Map Helper Continued

var cars = [
    { model: "Buick", price: "Cheap"},
    { model: "Camaro", price: "Expensive"}
];

const prices = cars.map(function (car){
    return car.price;
});

// Coding Exercise 3: Plucking Values

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];

const heights = images.map(function(image){
    return image.height;
});

// Coding Exercise 4: Calculating Values with Map

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];

const speeds = [];

trips.map(function (trip) {
    return speeds.push(trip.distance / trip.time);
});

// Coding Challenge 5: Implementing "Pluck"

/* Implement a 'pluck' function.  
Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. */


var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
    return array.map(function(item){
        return item[property];
    });
};

pluck(paints,"color");


/* Here we apply the map method to the array, within the array are objects. We call each individual object "item" and the function returns 
   an array containing the property. */










