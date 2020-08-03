
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) { let timeArray = timeString.split(2);
                             let timeInteger = parseInt(timeArray[0]);
if (timeInteger < 12) return "Good Morning"
else if ( timeInteger > 12 && timeInteger < 17) return "Good Afternoon"
else  return "Good Evening"
}

function displayMessage(string) { document.getElementById("greeting").innerText = string }


