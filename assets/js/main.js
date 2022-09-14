"use strict";

const counter = document.querySelector(".counter");
const displayContainer = document.querySelector(".display");
const displayValue = document.querySelector(".display span");
const buttons = document.querySelector(".buttons");

let message = document.createElement("div");

// starting value of counter
let Num = 999;

counter.addEventListener("click", function (event) {
  updateCounter(event);
  console.log("span", displayValue, displayValue.clientWidth);
  console.log("display", displayContainer.clientWidth);
});

function updateCounter(event) {
  message.remove();

  switch (event.target.closest("BUTTON").dataset.action) {
    case "+":
      if (displayContainer.clientWidth - displayValue.clientWidth > 21) {
        buttons.insertAdjacentElement("afterbegin", message);
        message.innerHTML = "Maximun value reached";
        message.classList.add("message");
        return;
      }
      Num += 10000;
      displayValue.style.color = "#29bf12";
      break;
    case "-":
      if (Num === 0) {
        buttons.insertAdjacentElement("afterbegin", message);
        message.innerHTML = "Minimum value reached";
        message.classList.add("message");
        return;
      }
      Num -= 1;
      displayValue.style.color = "red";
      break;
    case "reset":
      if (Num === 0) {
        buttons.insertAdjacentElement("afterbegin", message);
        message.innerHTML = "Counter already reset";
        message.classList.add("message");
        return;
      }
      Num = 0;
      displayValue.style.color = "red";
      break;
  }

  displayValue.innerHTML = Num;
  setTimeout(() => (displayValue.style.color = ""), "250");
}
