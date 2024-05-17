document.addEventListener("DOMContentLoaded", function () {
    // SELECTING COLORBOX AND CHANGECOLOR ELEMENTS
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");
  
    // GENERATING RANDOMIZER FOR RGB COLOR CODE
    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
  
    // ADDING EVENT LISTENER FOR BUTTON
    changeColorBtn.addEventListener("click", function () {
      const newColor = getRandomColor();
      colorBox.style.backgroundColor = newColor;
      colorBox.style.boxShadow = `0 0 60px ${newColor}`;
    });
  });
  
