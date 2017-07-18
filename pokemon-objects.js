// var charizard = {
//     "attack":84,
//     "defense":78,
//     "speed":100,
//     "hp":78,
//     "legendary":false,
//     "types":["Fire","Flying"]
// };

// var giratina = {
//     "attack":120,
//     "defense":100,
//     "speed":90,
//     "hp":150,
//     "legendary":true,
//     "types":["Ghost","Dragon"]
// };

// var dialga = {
//     "attack":120,
//     "defense":120,
//     "speed":90,
//     "hp":100,
//     "legendary":true,
//     "types":["Steel","Dragon"]
// };

// var palkia = {
//     "attack":120,
//     "defense":100,
//     "speed":100,
//     "hp":90,
//     "legendary":true,
//     "types":["Water","Dragon"]
// };

// var torterra = {
//     "attack":109,
//     "defense":105,
//     "speed":56,
//     "hp":95,
//     "legendary":false,
//     "types":["Grass","Ground"]
// };

// var golem = {
//     "attack":80,
//     "defense":130,
//     "speed":45,
//     "hp":80,
//     "legendary":false,
//     "types":["Rock","Ground"]
// };

function Pokemon(name,attack,defense,speed,hp,legendary,types){
    this.name = name
    this.attack = attack
    this.defense = defense
    this.speed = speed
    this.hp = hp
    this.legendary = legendary
    this.types = types
}

var charizard = new Pokemon("charizard",84,78,100,78,false,"fire-flying");
var giratina = new Pokemon("giratina",120,100,90,150,true,"Ghost-Dragon");
var dialga = new Pokemon("dialga",120,120,90,100,true,"Steel-Dragon");
var palkia = new Pokemon("palkia",120,100,100,90,true,"Water-Dragon");
var tortera = new Pokemon("torterra",109,105,56,95,false,"Grass-Ground");
var golem = new Pokemon("golem",80,130,45,80,false,"Rock-Ground");

myPokemonRoster = ["charizard","giratina","dialga","palkia","torterra","golem"];



function myPokemonRoster(roster){
    console.log("Printing Roster!");
    for (var i=0;i < roster.length; i++){
        console.log(roster[i]);
    }

}



