/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (timeString) => {
  const hourStr = timeString.split(':')[0]
  const hourInt = parseInt(hourStr)
  console.log(timeString, hourStr, hourInt)
  if (hourInt < 12) {
    return `Good Morning`
  } 
  else if (hourInt > 12 && hourInt < 17) {
    return `Good Afternoon`
  } else {
    return `Good Evening`
  }
}
/* Write your implementation of displayMessage() */
const displayMessage = message => {
  const greetingElement = document.querySelector('#greeting')
  //console.log(greetingElement)
  greetingElement.innerText = message
}

