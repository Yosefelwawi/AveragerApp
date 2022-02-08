"use strict";


/*

We will continue with our work from 4b.
We need to fix these two things:

First:
gridMaker must be called each time the user clicks on the button (See index.html).



Second:
We now need to make sure that when we call (anropar) gridMaker we must use
the values in #inputRows and #inputColumns as arguments.

*/



document.querySelector("button").addEventListener("click", function h (){
    let R = document.getElementById("inputRows").value;
    let C = document.getElementById("inputCols").value;
    let grid = document.getElementById("grid");
    gridMaker(grid, R, C)
    console.log(R, C, grid)

})
function gridMaker (gridContainer, R, C) {
    gridContainer.style.gridTemplateRows = R;
    gridContainer.style.gridTemplateColumns = C;
}