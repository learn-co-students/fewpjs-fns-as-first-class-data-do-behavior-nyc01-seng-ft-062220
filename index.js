/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {

  let time_split = time.split(':')
  let hour = time_split[0]
  hour = parseInt(hour)

  if (hour < 12) {
   console.log("Good Morning")
  }else if (hour >= 12 && hour < 17) {
    console.log("Good afternoon")
  }else {
    console.log("Good evening")
  }
}

/* Write your implementation of displayMessage() */
let time_box = document.getElementById('time')
