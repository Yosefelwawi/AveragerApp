"use strict";

// GLOBAL VARIABLES
// None allowed

// länk till git repo: https://github.com/Yosefelwawi/AveragerApp



// FUNCTION DECLARATIONS (in alphabetical order)
function adder (_array) {
  let sum = 0;
  for (let i = 0; i < _array.length; i++) {
    sum += _array[i];
  }
  return sum;
}
function averg (_array) {
  return adder(_array) / _array.length;
}
function createNumberDiv () {

  // Create each numberDiv
  let numberDiv = document.createElement("div");
  numberDiv.innerHTML = randomNumber(100);

  // The eventListener so that it reacts on click
  numberDiv.addEventListener("click", function() {

    // Toggle the selected class
    numberDiv.classList.toggle("selected");

    // Update the results
    updateResults("selected");

  });

  return numberDiv;

}
function getArrayOfSelectedNumbers (className) {

  let arrayElements = Array.from(document.querySelectorAll("." + className));

  let arrayNumbers = [];
  
  for (let i = 0; i < arrayElements.length; i++) {
    let numberAsString = arrayElements[i].innerHTML;
    let number = parseInt(numberAsString);
    arrayNumbers.push(number);
  }

  return arrayNumbers;

}
function gridMaker (gridContainer, R, C) {

  // Update the CSS properties to give the grid the correct dimensions
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

  // Empty the previous divs in the container
  gridContainer.innerHTML = "";

  // Reset the Results
  document.querySelector("#selected span").innerHTML = "";
  document.querySelector("#amount span").innerHTML = 0;
  document.querySelector("#sum span").innerHTML = 0;
  document.querySelector("#average span").innerHTML = "";


  // Fill the container with divs
  // Nested loops:
  // A loop for the columns
  for (let c = 0; c < C; c++) {

    // For each columns we need to create R rows
    for (let r = 0; r < R; r++) {
      gridContainer.appendChild(createNumberDiv("selected"));
    }

  }

}
function randomNumber (max) {
  return Math.floor(max * Math.random());
}
function roundString(input, digits){
  // https://stackoverflow.com/a/12698296/2027283
  var rounded = Math.pow(10, digits);
  return (Math.round(input * rounded) / rounded).toFixed(digits);
}
function updateResults (className) {

  // First get the array of selected numbers
  let array = getArrayOfSelectedNumbers(className);

  // Create a string from an array:
  let selected = array.join(",");

  // Calculate stuff
  let amount = array.length;
  let sum = adder(array);
  let average = roundString(averg(array), 1);

  // Update the results
  document.querySelector("#selected span").innerHTML = selected;
  document.querySelector("#amount span").innerHTML = amount;
  document.querySelector("#sum span").innerHTML = sum;
  document.querySelector("#average span").innerHTML = average;

}




// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS
document.querySelector("button").addEventListener("click", function () {

  gridMaker(
    document.querySelector("#grid"),
    document.querySelector("#inputRows").value,
    document.querySelector("#inputCols").value
);

});




// DIRECT CODE
// Initialise the page directly, no need to wait for user to click first time.
document.querySelector("button").click();
