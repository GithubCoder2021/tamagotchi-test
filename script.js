// main variables
var hunger = 0;
var mood = 0;
var age =  0;
var correctDirection = 0;

// Button setup
document.getElementById('hungerBut').style.visibility = 'hidden';
document.getElementById('happyBut').style.visibility = 'hidden';
document.getElementById('left').style.visibility = 'hidden';
document.getElementById('right').style.visibility = 'hidden';

// evolution sequence
var timeTillEvo = 65*60;
 setInterval(function() {
  timeTillEvo--;
}, 1000);
  if (timeTillEvo == 0) {
  document.getElementById("tama").src="child.gif";
   }

function wrongChoice() {
    document.getElementById("tama").src="AngerShiro.gif";
    document.getElementById('left').style.visibility = 'hidden';
    document.getElementById('right').style.visibility = 'hidden';
    const backToBaby = setTimeout(normalBaby, 2000);
}

function rightChoice() {
 document.getElementById("tama").src="happyshiro.gif";
 document.getElementById('left').style.visibility = 'hidden';
 document.getElementById('right').style.visibility = 'hidden';
 const backToBaby = setTimeout(normalBaby, 2000);
 if (mood < 4) {
     mood++;
     document.getElementById("happy").innerText= mood;
    }
}
function normalBaby() {
 document.getElementById("tama").src="baby.gif";
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
 
  
 document.getElementById("tama").src="leftorright.gif";
 document.getElementById('left').style.visibility = 'visible';
 document.getElementById('right').style.visibility = 'visible';
  document.getElementById('hungerBut').style.visibility = 'hidden';
 document.getElementById('happyBut').style.visibility = 'hidden';
}

function leftTama() {
  var correctDirection = Math.round(Math.random());
  if (correctDirection == 0) {
   document.getElementById("tama").src="leftleft.png";
   document.getElementById('right').style.visibility = 'hidden';
   document.getElementById('left').style.visibility = 'hidden';
document.getElementById('hungerBut').style.visibility = 'visible';
   document.getElementById('happyBut').style.visibility = 'visible';
   const correct = setTimeout(rightChoice, 1000);
    }
  else {
  document.getElementById("tama").src="rightleft.gif";
  document.getElementById('right').style.visibility = 'hidden';
   document.getElementById('left').style.visibility = 'hidden';
   document.getElementById('hungerBut').style.visibility = 'visible';
   document.getElementById('happyBut').style.visibility = 'visible';
  const wrong = setTimeout(wrongChoice, 1000);
   }


 }

 
function rightTama() {
  var correctDirection = Math.round(Math.random());
  if (correctDirection == 1) {
   document.getElementById("tama").src="rightright.gif";
   document.getElementById('right').style.visibility = 'hidden';
   document.getElementById('left').style.visibility = 'hidden';
   document.getElementById('hungerBut').style.visibility = 'visible';
   document.getElementById('happyBut').style.visibility = 'visible';
   const correct = setTimeout(rightChoice, 1000);
    }
  else {
  document.getElementById("tama").src="leftright.gif";
  document.getElementById('right').style.visibility = 'hidden';
  document.getElementById('left').style.visibility = 'hidden';
  document.getElementById('hungerBut').style.visibility = 'visible';
   document.getElementById('happyBut').style.visibility = 'visible';
   const wrong = setTimeout(wrongChoice, 1000);
   }


 }
