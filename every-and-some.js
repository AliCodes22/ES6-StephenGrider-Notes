// A Little Every and a lot of Some

var computers = [
    { name: "Apple", ram: 24 },
    { name: "Compaq", ram: 4 },
    { name: "Acer", ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputerCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
    if (computers[i].ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputerCanRunProgram = true;
    }
};

// Introducing Every Helper
/* The iterator function returns a boolean value */ 


computers.every(function(computer){
    return computer.ram > 16;

});

// The code above returns false because not EVERY element in the array has a ram of above 16

// More on Every and Some

/* If every element in the iterator function returns true, then the every helper will return true.
 But if ONE element returns false, the whole expression will return false */

 // With the some helper, we ask does any element in this array satisfy this criteria ? 

 // Every and Some Syntax

 const names = [
    "Alexandria",
    "Matthew",
    "Joe"
 ];

names.every(function(name){
    return name.length > 4;
});

// returns false as not EVERY name in the array has a length of greater than 4 characters

names.some(function(name){
    return name.length > 4;
});

// returns false as I have atleast one element with greater than 4 characters

// Coding Exercise 12: Finding Submitted Users

const users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];

const hasSubmitted = users.every(function (user){
    return user.hasSubmitted;
});

// Coding Exercise 13: In Progress Network Requests


const requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
const inProgress = requests.some(function (request) {
    return request.status === "pending";
});
