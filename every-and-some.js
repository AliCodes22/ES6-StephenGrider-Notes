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