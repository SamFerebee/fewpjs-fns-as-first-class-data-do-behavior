/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(str){
  let toTime = parseInt(str);
  let toRt ="";
  if (toTime < 12){
    toRt = "Good Morning";
  }else if (toTime > 12 && toTime < 17){
    toRt = "Good Afternoon";
  }else{
    toRt = "Good Evening";
  }
  return toRt;
}

function displayMessage(str){
  document.getElementById("greeting").innerText = str;
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
