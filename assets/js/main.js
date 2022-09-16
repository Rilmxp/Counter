"use strict";

const counter = document.querySelector(".counter");
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

let errorMsg;

// starting value of counter
let num = 0;

counter.addEventListener("click", function (event) {
  updateCounter(event);
});

function updateCounter(event) {
  if (!event.target.closest("BUTTON")) return;
  if (errorMsg) errorMsg.remove();

  switch (event.target.closest("BUTTON").dataset.action) {
    case "+":
      // check new num size > than display's to stop counter
      if (numBiggerThanDisplaySize()) {
        return errorMsgDisplay("Maximum value reached");
      }

      num += 1;
      display.style.color = "#29bf12";
      break;

    case "-":
      if (num === 0) {
        errorMsgDisplay("Minimum value reached");
        display.style.color = "red";
        break;
      }
      num -= 1;
      display.style.color = "red";
      break;

    case "reset":
      if (num === 0) {
        errorMsgDisplay("Counter already reset");
      }

      num = 0;
      display.style.color = "red";
      break;
  }

  display.innerHTML = num;
  setTimeout(() => (display.style.color = ""), "250");

  // FUNCTIONS //

  // Display error Message
  function errorMsgDisplay(msg) {
    errorMsg = document.createElement("div");
    buttons.insertAdjacentElement("afterbegin", errorMsg);
    errorMsg.innerHTML = msg;
    errorMsg.classList.add("message");
  }

  // Measure num length in pixs to stop counter if > display size
  function numBiggerThanDisplaySize() {
    // create a span to measure size of new num
    let ruler = document.createElement("span");
    document.querySelector("body").insertAdjacentElement("afterbegin", ruler);

    // get some display's handy computed properties
    let displayCssProp = window.getComputedStyle(display);

    //display's padding
    let displayPadding =
      parseInt(displayCssProp.getPropertyValue("padding-left")) +
      parseInt(displayCssProp.getPropertyValue("padding-right"));

    // set same font css prop to match display content
    ruler.style.fontWeight = displayCssProp.getPropertyValue("font-weight");
    ruler.style.fontSize = displayCssProp.getPropertyValue("font-size");

    ruler.innerHTML = num + 1;
    let rulerWidth = ruler.getBoundingClientRect().width;
    ruler.remove();

    return rulerWidth > display.clientWidth - displayPadding;
  }
}
