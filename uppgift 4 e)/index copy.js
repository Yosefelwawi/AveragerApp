"use strict";


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
  // A loop for the columns
  for (let c = 0; c < C; c++) {

    // Nested lopps:
    // For each columns we need to create R rows
    for (let r = 0; r < R; r++) {
      gridContainer.appendChild( createNumberDiv("selected") );
    }

  }

}

document.querySelector("button").addEventListener("click", function () {

  gridMaker(
    document.querySelector("#grid"),
    document.querySelector("#inputRows").value,
    document.querySelector("#inputCols").value
 );

});


