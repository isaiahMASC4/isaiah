var mashArray = ["Battlefield", "FinalDestination", "PokemonStadium", "PirateShip"];
var firstQuestions = [1,2];
var secondQuestion = ["Mario", "Luigi"];
var prompt = require('prompt-sync')();

function mash(){
     var firstAnswer = prompt("How many times will you strike?");
     var secondAnswer = prompt("Who will you choose to fight?");

    firstQuestions.push(firstAnswer);
    secondQuestions.push(secondAnswer);

}

function action(){
 console.log("You fought + secondQuestion + in the + mashArray + and hit them + firstQuestion + times too bad Mewtwo wins!")   
}
