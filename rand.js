function rand(upperBound){
return Math.floor(Math.random()*upperBound);} 

var lunches = ["chinese", "caribbean", "mexican", "italian", "pizza"];

var lunch_today = lunches[rand(lunches.length)];

console.log(lunch_today);

//rand(3);