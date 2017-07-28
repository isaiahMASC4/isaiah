var HP = 100;
var gold = 0;
var numDefeated = 0;

function updateStats() {
    $("#stats").text("HP: " + HP + " //gold: " + gold + "// Ogres Slain: " + numDefeated);
}

function attack() {
    if (HP > 0) {
        if(math.random() * 100 > gold) {
            $(#"ogres").prepend(
                "<p> You won + 10 gold.</p>"
            );
        }
    }
}

function setup() {
    //title
$("body").append("<h1>Welcome to ogre fighter v.5.0</h1>");
// stats section
$("body").append(
    "<div><h3>STATS</h3><p id='stats'></p></div>"
);
//attack button
$("body").append(
    "<button onclick='attack()'>Attack the ogre</button>"
);
// container for ogre images
$("body").append(
    "<div id='ogres'></div>"
    );
    updateStats();
}

$(document).ready(setup);