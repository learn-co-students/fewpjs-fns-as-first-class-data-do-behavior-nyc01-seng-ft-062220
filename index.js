/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function greet(time){
  const formatTime = parseInt(time);
  return (formatTime < 12) ? "Good Morning" : (formatTime < 17) ? "Good Afternoon" : "Good Evening";
}

function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}

