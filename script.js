// main variables
var hunger = 0;
var mood = 0;
var age =  0;

// Button setup
document.getElementById('hungerBut').style.visibility = 'hidden';
document.getElementById('happyBut').style.visibility = 'hidden';

// evolution sequence
var timeTillEvo = 65*60;
while (timeTillEvo > 0) {
 setTimeout(1000);
 timeTillEvo--;
 
  if (timeTillEvo = 0) {
  document.getElementById("tama").src="child.gif";
   }
}

function hatchTama() {
 document.getElementById("tama").src="baby.gif";
 document.getElementById("stomach").innerText= hunger;
 document.getElementById("happy").innerText= mood;
 document.getElementById("tamaAge").innerText= age;
 document.getElementById('hatch').style.visibility = 'hidden';
 document.getElementById('hungerBut').style.visibility = 'visible';
 document.getElementById('happyBut').style.visibility = 'visible';
  }

function feedTama() {
 if (hunger < 4) {
  hunger++;
}
 document.getElementById("stomach").innerText= hunger;
  }

function cheerupTama() {
 if (mood < 4) {
  mood++;
}
 document.getElementById("happy").innerText= mood;
  }


// game setup

var correctDirection = Math.floor(Math.random() * 2) + 1;


