// This script will run when the page loads
console.log("JavaScript is connected!");

// Find the button on the page
const button = document.querySelector("button");

// Add a "click" action
button.addEventListener("click", function() {
  alert("Hello! 🎉 You clicked the button.");
});


// Add a "click" action
button.addEventListener("click", function() {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  // Change the background color of the page
  document.body.style.backgroundColor = randomColor;

  // Also update the button text
  button.textContent = "Clicked! Background changed 🎨";
});
