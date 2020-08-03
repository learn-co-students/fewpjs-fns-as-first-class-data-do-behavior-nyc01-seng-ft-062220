/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let time_split = time.split(':')
  let hour = time_split[0]
  hour = Number(hour)
  if (hour < 12) {
    return ("Good Morning")
  }else if (hour >= 12 && hour < 17) {
    return("Good Afternoon")
  }else {
    return("Good Evening")
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let header = document.getElementById('greeting')
  header.innerText = message
}
