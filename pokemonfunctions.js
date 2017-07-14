function rand(upperBound){
    return Math.floor(Math.random()*upperBound);
} 

function randLetter(){
    var ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alphabet = ABC[rand(ABC.length)];
     return alphabet;
    console.log(randLetter());
}

 

function randWord(){

    var string = ""
    for ( i = 4; i<rand(16) ; i++){
        string = string + randLetter()
    }
    return string
}
console.log(randWord())


var array1 = ["Pikachu",23,100];
var array2 = ["Charizard",50,200];


function pokeattack(array1,array2) {
    array2[2] -= array1[1];
    return array2;
}
console.log(pokeattack(array1,array2));


