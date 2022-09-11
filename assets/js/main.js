"use strict";

const counter = document.querySelector(".counter");
const display = document.querySelector(".display");

// starting value of counter
let displayValue = 0;

counter.addEventListener("click", function (event) {
  updateCounter(event);
});

function updateCounter(event) {
  switch (event.target.closest("BUTTON").dataset.action) {
    case "+":
      displayValue += 1;
      display.style.color = "#89fc00";
      break;
    case "-":
      if (displayValue === 0) return;
      displayValue -= 1;
      display.style.color = "red";
      break;
    case "reset":
      if (displayValue === 0) return;
      displayValue = 0;
      display.style.color = "red";
      break;
  }
  display.innerHTML = displayValue;
  setTimeout(() => (display.style.color = ""), "300");
}
