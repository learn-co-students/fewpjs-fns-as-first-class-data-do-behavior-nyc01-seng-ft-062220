/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){

  let timePiece = time.split(":")
  let whatICareAbout = parseInt(timePiece[0],10)
  if (whatICareAbout < 12) { return "Good Morning"}   
  else if (whatICareAbout > 17){ return "Good Evening"}
  else {return "Good Afternoon"};

}

function displayMessage(string){

  document.getElementById("greeting").innerText = string;
}

