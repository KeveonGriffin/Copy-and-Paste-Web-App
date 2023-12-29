function displayInput() {
  // Get the user input from the text box
  var userInput = document.getElementById("input").value;
  var numbOfCopies = document.getElementById("copies").value;
  // Display the user input in the output div
  let output = "";
  for (let i = 1; i <= numbOfCopies; i++) {
    output += userInput + "<br>";
  }
  document.getElementById("output").innerHTML = output;
}
function displayInputNoBR (){
  var userInput = document.getElementById("input").value;
  var numbOfCopies = document.getElementById("copies").value;
  let output = "";
  for (let i = 1; i <= numbOfCopies; i++) {
    output += userInput + " ";
  }
  document.getElementById("output").innerHTML = output;
}
function displayInputList (){
  var userInput = document.getElementById("input").value;
  var numbOfCopies = document.getElementById("copies").value;
  let output = "";
  for (let i = 1; i <= numbOfCopies; i++) {
    output += i +". " + userInput + "<br>";
  }
  document.getElementById("output").innerHTML = output;
}

var button = document.getElementsByClassName("submit")

function startAni(){
  const finalOuput = document.getElementById("output")
  finalOuput.classList.add("outputA")

}

function charCount() {
  let userInput = document.getElementById("input").value;
  let count = 0
  for (var i = 0; i < userInput.length; i++){
    count++
  }
  document.getElementById("charCount").innerHTML = "Character Count: " + count
}

