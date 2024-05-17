document.addEventListener("DOMContentLoaded", function () {
    // SELECTING COLORBOX AND CHANGECOLOR ELEMENTS
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");
  
    // GENERATING RANDOMIZER
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // ADDING EVENT LISTENER FOR BUTTON
    changeColorBtn.addEventListener("click", function () {
      const newColor = getRandomColor();
      colorBox.style.backgroundColor = newColor;
      colorBox.style.boxShadow = `0 0 60px ${newColor}`;
    });
  });
  