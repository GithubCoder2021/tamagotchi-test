//game
function cheerUpTama() {
  var correctDirection = Math.floor(Math.random() * 2) + 1;
  
 document.getElementById("tama").src="leftorright.gif";
 document.getElementById('left').style.visibility = 'visible';
 document.getElementById('right').style.visibility = 'visible';

 function leftTama() {
  var leftOrRight = 1
  if (correctDirection = 1) {
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
} 
  else {
   document.getElementById("tama").src="rightleft.gif";
   document.getElementById('left').style.visibility = 'hidden';
   document.getElementById('right').style.visibility = 'hidden';
   setTimeout(1000);
   document.getElementById("tama").src="AngryShiro.gif";
   setTimeout(2000);
   document.getElementById("tama").src="baby.gif";
   document.getElementById("happy").innerText= mood;
}

 
  function rightTama() {
   var leftOrRight = 2
   if (correctDirection = 2) {
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
