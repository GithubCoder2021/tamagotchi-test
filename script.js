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
while (timeTillEvo > 0) {
 setInterval(function() {
  timeTillEvo--;
}, 1000)
  if (timeTillEvo = 0) {
  document.getElementById("tama").src="child.gif";
   }
}
function wrongChoice() {
    document.getElementById("tama").src="AngryShiro.gif";
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
  var correctDirection = Math.floor(Math.random() * 2) + 1;
  
 document.getElementById("tama").src="leftorright.gif";
 document.getElementById('left').style.visibility = 'visible';
 document.getElementById('right').style.visibility = 'visible';
}

function leftTama() {
  if (correctDirection == 1) {
   document.getElementById("tama").src="leftleft.gif";
   const correct = setTimeout(correctAnswer, 2000);
    }
} else {
  document.getElementById("tama").src="rightleft.gif";
   const wrong = setTimeout(wrongAnswer, 2000);
   }


 }

 
function rightTama() {
  if (correctDirection == 2) {
   document.getElementById("tama").src="rightright.gif";
   const correct = setTimeout(correctAnswer, 2000);
    }
} else {
  document.getElementById("tama").src="leftright.gif";
   const wrong = setTimeout(wrongAnswer, 2000);
   }


 }


