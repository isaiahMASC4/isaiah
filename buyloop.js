var prompt = require('prompt-sync')();
var money = 1000;
var items = [];

while (money > 99) {
    console.log("you have $" + money + "left. shirt = $100, computer = $400.");
    var answer = prompt("Which item do you wat to buy?");
    if (answer == "shirt") {
        money -= 100;
        items.push("shirt");
        console.log("you bought the shirt");
    }
    else if (answer == "computer") {
        money -= 400;
        items.push("computer");
        console.log("you bought a computer");
    }
    else  {
        console.log("ietm not available")

    }
}


// 
// get input from the user. 
// 
//var n = prompt('How many more times? ');







// var counter = 1;
// while(counter < 11) {
//     console.log(counter);
//     counter++;
// }

