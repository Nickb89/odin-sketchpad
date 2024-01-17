//ensure DOM is loaded
document.addEventListener("DOMContentLoaded", (event) => {
console.log("DOM fully loaded and parsed");

//get gridSizeText reference
const gridSizeText = document.querySelector('.gridSizeText');

//get Container Div reference
const container = document.querySelector("#gridContainer");

//get Container width
const styles = getComputedStyle(container);
const containerWidth = parseFloat(styles.getPropertyValue('width'));
let userSquareSize = 16;

const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
    container.style.width = "960px";
    container.style.height = "960px";
    resetGrid(userSquareSize);
  }
  else {
    container.style.width = "600px";
    container.style.height = "600px";
    resetGrid(userSquareSize);
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);




//get grid size change button reference
const btn = document.querySelector('#promptUser');
// add button event listener to create user input prompt
btn.addEventListener('click', function() {
let userSquareSizeNum = prompt("How big should each square be?", "16");
  userSquareSize = parseInt(userSquareSizeNum);
  resetGrid(userSquareSize);
})

//get reset grid button reference
const btnReset = document.querySelector('#resetGridBtn');
// add button event listener to redraw grid
btnReset.addEventListener('click', function() {
    resetGrid(userSquareSize);
  })

//remove all child elements of container
function resetGrid(userSquareSizeInput) {
  while (container.hasChildNodes()){
  container.removeChild(container.firstChild);
  }
  createGrid(userSquareSizeInput);
}


//create squares 
function createGrid(userInput){
  console.log("user said " + userInput);
for(i = 0; i < userInput * userInput; i++){
    const singleSquare = document.createElement("div");
    singleSquare.setAttribute("class", "square");
    singleSquare.style.width = (((parseFloat(container.style.width))/userInput).toString() + "px");
    singleSquare.style.height = (((parseFloat(container.style.width))/userInput).toString() + "px");
    singleSquare.style.filter = 'brightness(1.1)';
    //add event listener to detect when mouse enters - decrease brightness each time.
    singleSquare.addEventListener('mouseenter', (event) => {
    let styles = window.getComputedStyle(singleSquare);
    let brightnessAmt = parseFloat(styles.getPropertyValue('filter').slice(11,14));
    console.log("Brightess amount is " + brightnessAmt);
    let newbrightness = brightnessAmt - 0.1;
    console.log("new brightness amount is " + newbrightness);
    singleSquare.style.filter = `brightness(${newbrightness})`;
    
    })
    container.appendChild(singleSquare);
    gridSizeText.textContent = "Current Grid Size is " + userInput;
  
  }
}

})