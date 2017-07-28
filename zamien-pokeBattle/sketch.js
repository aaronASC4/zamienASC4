// var window = ;

function setup(){
    createCanvas(1200, 1000)
    background(225, 225, 225)
    window.prompt("What pokemon do you want to use?");
}

var prompt = require('prompt-sync')();



function Pokemon(name, attacks, attacksTypes, hp, legendary, types){
    this.name = name;
    this.attacks = attacks;
    this.attacksTypes = attacksTypes;
    this.hp = hp;
    this.legendary = legendary;
    this.types = types;
}

var pikachu = new Pokemon ("Pikachu", ["Agility = -33Dmg", "Discharge= -37Dmg", "Thunder= -43Dmg", "Light Screen= -50Dmg"], ["Pyschic", "Electric", "Electric", "Pyschic"], 35, false, "electric");
var mewtwo = new  Pokemon ("Mewtwo", ["Amnesia", "Safeguard", "Aura Sphere", "Psystrike"], ["Pyschic", "Normal", "Fighting", "Pyschic"], 106 , true , "pyschic");


function draw(){

    rect(20, 60, 900, 500)
    rect(20, 560, 900, 200);

    textSize(32);
    
    text("ATTACKS:", 25, 600);

    textSize(16);
    text("Select one of the attack options from down below:", 25, 620);
 
    if(window.toLowerCase()=="pikachu"){
    rect(25, 650, 200, 50);
    text(pikachu.attacks[0], 60, 675);
    text(pikachu.attacksTypes[0], 60, 695);

    rect(250, 650, 200, 50);
    text(pikachu.attacks[1], 280, 675);
    text(pikachu.attacksTypes[1], 300, 695);

    rect(475, 650, 200, 50);
    text(pikachu.attacks[2], 510, 675);
    text(pikachu.attacksTypes[2], 530, 695);

    rect(700, 650, 200, 50);
    text(pikachu.attacks[3], 725, 675);
    text(pikachu.attacksTypes[3], 750, 695);
    
    }

    else if(window.toLowerCase()=="mewtwo"){
    rect(25, 650, 200, 50);
    text(mewtwo.attacks[0], 60, 675);
    text(mewtwo.attacksTypes[0], 60, 695);

    rect(250, 650, 200, 50);
    text(mewtwo.attacks[1], 280, 675);
    text(mewtwo.attacksTypes[1], 300, 695);

    rect(475, 650, 200, 50);
    text(mewtwo.attacks[2], 510, 675);
    text(mewtwo.attacksTypes[2], 530, 695);

    rect(700, 650, 200, 50);
    text(mewtwo.attacks[3], 725, 675);
    text(mewtwo.attacksTypes[3], 750, 695);

    }

}

/*function setup(){
    createCanvas(1200, 1000)
    background("orange")

    fill("white")
    rect(20, 560, 900, 200, 10);
    fill("white")
    rect(20, 60, 900, 500, 20)
    fill("green")
    stroke(0, 0, 0)
    rect(140, 280, 160, 20)
    rect(580, 120, 200, 20)

    fill(240, 240, 240)
    rect(20, 60, 100, 500, 20, 0, 0, 20)
    rect(820, 60, 100, 500, 0, 20, 20, 0)
    tint(100,700)

    var userInput = prompt("What's your User Name?")
    fill("black")
    textSize(25)
    text("CPU", 840, 200)
    text(userInput, 40, 480)
}

function draw(){


    fill("black")
    textSize(32);
   
    text("ATTACKS:", 25, 600);

    textSize(16);
    text("Select one of the attack options from down below:", 25, 620);

    stroke(0, 0, 0)
    fill("white")
    rect(25, 650, 200, 50);
   

    rect(250, 650, 200, 50);


    rect(475, 650, 200, 50);


    rect(700, 650, 200, 50);
    fill("black")
    textSize(18)
    text("Agility", 100, 670)
    text("Attack", 98, 690)
    text("Discharge", 310, 670)
    text("Attack", 323, 690)
    text("Thunder", 540, 670)
    text("Attack", 548, 690)
    text("Light Screen", 750, 670)
    text("Attack", 770, 690)
    
    fill("yellow")
    rect(180, 320, 100, 200, 20)
    fill("pink")
    rect(630, 150, 100, 200, 20)
    fill("green")
    var HPpik = 35
    var HPmew = 106
    fill("black")
    textSize(18)
    text("      Pikachu      HP: " + HPpik, 120, 270)
    text("Mewtwo           HP: " + HPmew, 580, 110)
    textSize(25)
    text("CPU", 840, 200)
    text(userInput, 40, 480)
    

    
}
function delay(ms) {
var cur_d = new Date();
var cur_ticks = cur_d.getTime();
var ms_passed = 0;
while(ms_passed < ms) {
var d = new Date(); // Possible memory leak?
var ticks = d.getTime();
ms_passed = ticks - cur_ticks;
// d = null; // Prevent memory leak?
}
}

function mouseClicked() {
    if (mouseX > 25 && mouseX < 225 && mouseY > 650 && mouseY < 700) {
        fill("red")
       // stroke(0, 0, 0)
        rect(690, 120, 90, 20)
        // return false;
        rect(220, 280, 80, 20)
        HPpik = HPpik - 10
        HPmew = HPmew - 30
    }if (mouseX > 250 && mouseX < 450 && mouseY > 650 && mouseY < 700) {
        fill("red")
       // stroke(0, 0, 0)
        rect(600, 120, 180, 20)
        // return false;
        rect(160, 280, 160, 20)
        HPpik = HPpik - 20
        HPmew = HPmew - 45
    }if (mouseX > 475 && mouseX < 675 && mouseY > 650 && mouseY < 700) {
        fill("red")
        rect(580, 120, 200, 20)
      
        window.alert("You win!!!")
    }
   
*/