// main variables
var hunger = 0;
var mood = 0;
var age =  0;
var correctDirection = 0;
var leftOrRight = 0;

// Button setup
document.getElementById('hungerBut').style.visibility = 'hidden';
document.getElementById('happyBut').style.visibility = 'hidden';
document.getElementById('left').style.visibility = 'hidden';
document.getElementById('right').style.visibility = 'hidden';

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



function cheerUpTama() {
  var correctDirection = Math.floor(Math.random() * 2) + 1;
  
 document.getElementById("tama").src="leftorright.gif";
 document.getElementById('left').style.visibility = 'visible';
 document.getElementById('right').style.visibility = 'visible';
}

function leftTama() {
  var leftOrRight = 1;
  if (correctDirection == leftOrRight) {
   document.getElementById("tama").src="leftleft.gif";
   document.getElementById('left').style.visibility = 'hidden';
   document.getElementById('right').style.visibility = 'hidden';
   setTimeout(1000);
   document.getElementById("tama").src="happy.gif";
   setTimeout(2000);
   document.getElementById("tama").src="baby.gif";
   if (mood < 4) {
    mood++;
    document.getElementById("happy").innerText= mood;
   }
 
} else {
   document.getElementById("tama").src="rightleft.gif";
   document.getElementById('left').style.visibility = 'hidden';
   document.getElementById('right').style.visibility = 'hidden';
   setTimeout(1000);
   document.getElementById("tama").src="AngryShiro.gif";
   setTimeout(2000);
   document.getElementById("tama").src="baby.gif";
   document.getElementById("happy").innerText= mood;
}
 }

 
function rightTama() {
  var leftOrRight = 2;
  if (correctDirection == leftOrRight) {
   document.getElementById("tama").src="rightright.gif";
   document.getElementById('left').style.visibility = 'hidden';
   document.getElementById('right').style.visibility = 'hidden';
   setTimeout(1000);
   document.getElementById("tama").src="happy.gif";
   setTimeout(2000);
   document.getElementById("tama").src="baby.gif";
    if (mood < 4) {
     mood++;
     document.getElementById("happy").innerText= mood;
    }
} else {
   document.getElementById("tama").src="leftright.gif";
   document.getElementById('left').style.visibility = 'hidden';
   document.getElementById('right').style.visibility = 'hidden';
   setTimeout(1000);
   document.getElementById("tama").src="AngryShiro.gif";
   setTimeout(2000);
   document.getElementById("tama").src="baby.gif";
   document.getElementById("happy").innerText= mood;
   }


 }
