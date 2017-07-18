var mashArray = ["Battlefield", "FinalDestination", "PokemonStadium", "PirateShip"];
var firstQuestions = [5,10];
var secondQuestion = ["Mario", "Luigi"];
var prompt = require('prompt-sync')();

function mash(){
     var firstAnswer = prompt("How many times will you strike?");
     var secondAnswer = prompt("Who will you choose to fight?");

    firstQuestions.push(firstAnswer);
    secondQuestions.push(secondAnswer);

}

function rand(upperbound) { 
    return Math.floor(math.random() * upperbound);
}

function displayAnswer() {
    var stage = mashArray[rand(mashArray.length)];
    var hits = firstQuestion[rand(firstQuestion.length)];
    var opponent = secondQuestion[rand(secondQuestion.length)];
    
    
    console.log("You fought" + opponent + "in the" + stage + "and hit them" + hits + "times too bad Mewtwo wins!");   

}
//runs function
mash();
displayAnswer();