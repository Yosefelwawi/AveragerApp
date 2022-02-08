"use strict";


/*

The console is quite powerful
You can for instance call a function that you have defined
in your JS-file from the console. Check the video.

*/

function testConsole (p1) {
  document.querySelector("body").style.backgroundColor = p1;
}


/*

Exercise
Code a function F25 that fills a 5x5 grid with random numbers.
F25 must take one parameter: container. This is the reference to the HTML-element
that is the grid to which all the random numbers will be appended.

We have already done something like this in a previous exercise (Lektion 3, 4a).
You need however to place it in a function and you need to use the parameter
when appending the numbers (the divs that contain the numbers) to the gridContainer.

Test the function by calling it from the console.

VIDEO:  Record a video where you explain how F25 works line by line. Max 3 minutes.
        This video must be called F25Explanation.
        The video must also show how you call F25 from the console.

*/



function F25 (container) { // Här skapar vi en funktion med namnet F25
  let grid = document.getElementById(container); // Här skapas en variabel som får tillgång ett existerande HTML-element med id i vårt HTML dokument.
  for (let i = 0; i < 25; i++) { // Här är en enkel loop som börjar från noll och fortsätter till 25
    let div = document.createElement("div"); // Här skapas ett div-element som vi sparar i vår div - variabel (som vi även skapat).
    div.innerHTML = i; // Sedan fyller vi i dem nyskapade div med värdet "i", och i kommer variera under forloop omgången,
    grid.appendChild(div); // Sedan appendas vår nyskapade div i vår förälder div som har id "gridContainer".
  }
}