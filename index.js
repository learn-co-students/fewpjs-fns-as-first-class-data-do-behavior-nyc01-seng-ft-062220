/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const greetingElement = document.getElementById("greeting");
  greetingElement.innerText = message;
}

function greet(time) {
  const timeHour = time.split(':')[0];
  const timeMinute = time.split(':')[1]; 
  if (parseInt(timeHour) < 12) {
    return "Good Morning"
  } else if (parseInt(timeHour) >= 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

