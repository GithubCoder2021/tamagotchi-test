// main variables
var hunger = 0;
var mood = 0;
var age =  0;

// hidden variables
var timeTillEvo = 65*60;


function hatchTama() {
 document.getElementById("tama").src="baby.gif";
 document.getElementById("stomach").innerText= hunger;
 document.getElementById("happy").innerText= mood;
 document.getElementById("tamaAge").innerText= age;
 document.getElementById('hatch').style.visibility = 'hidden';
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

