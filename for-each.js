
/* 
- Array Helper Methods - The Easiest Way to Write Better Code
- Array Helper Methods : forEach, map, filter, find, every, some, reduce
- They're a more effective and efficient way of using for loops and help us with data manipulation as it gets more complex
- The purpose of every helper is iteration over an array
*/

// The forEach helper

// Old way. Classic  for loop

var colors =  ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// New and more effective way , introducing the forEach() helper
/* 
- Down below we are applying the forEach method to our array. In other words , we're saying for each element of the array, do x.
- We pass in an anonymous function (iterator function) with the element as the argument. This function gets called ONE time for every item of an array 
- The iterator function runs on each element of the array

*/

colors.forEach (function (color) {
    console.log(color);
});

// forEach continued

// Create an array of numbers
// Create a variable to hold the sum
// Loop over the array, incrementing the sum variable
// Print the sum variable


const numbers = [1,2,3,4,5];

let sum = 0

numbers.forEach(function (number) {
    sum += number;
    console.log(sum);
});

console.log(sum);

// CODING EXERCISE 1: MOVING AWAY FROM FOR LOOPS

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach (function (post){
        savePost(post);
    });  
};

// CODING EXERCISE 2: PROCESSING VALUES

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];

var areas = [];

images.forEach(function (image) {
    return areas.push(image.height * image.width);
});



