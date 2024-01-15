document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  
  const container = document.querySelector("#gridContainer");
  const styles = getComputedStyle(container);
  const containerWidth = parseFloat(styles.getPropertyValue('width'));
  console.log("width is " + containerWidth);
  const gridMultiplier = 50;
  

  for(i = 0; i < gridMultiplier * gridMultiplier; i++){
    const singleSquare = document.createElement("div");
    singleSquare.setAttribute("class", "square");
    singleSquare.style.width = ((containerWidth/gridMultiplier).toString() + "px");
    singleSquare.style.height = ((containerWidth/gridMultiplier).toString() + "px");
    console.log((containerWidth/gridMultiplier).toString());
    //singleSquare.style.width = 
    container.appendChild(singleSquare);
  
  }


});