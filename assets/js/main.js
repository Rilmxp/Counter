"use strict";

const counter = document.querySelector(".counter");
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

// pop-up error message at pressing buttons set to null
let errorMsg;

// starting value of counter
let num = 0;

counter.addEventListener("click", function (event) {
  updateCounter(event);
});

// counter operations
function updateCounter(event) {
  if (!event.target.closest("BUTTON")) return;
  if (errorMsg) errorMsg.remove();

  switch (event.target.closest("BUTTON").dataset.action) {
    case "+":
      // check new num size > display size to display error.
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

  // INNER FUNCTIONS //

  //// Display error Message ////
  function errorMsgDisplay(msg) {
    // get central Y coords of space between display and buttons to position msg.
    let msgSpaceCenter =
      (buttons.getBoundingClientRect().top -
        display.getBoundingClientRect().bottom) /
        2 +
      display.getBoundingClientRect().bottom;

    // create and position message to display
    errorMsg = document.createElement("div");
    document
      .querySelector("body")
      .insertAdjacentElement("afterbegin", errorMsg);
    errorMsg.innerHTML = msg;
    errorMsg.style.top = msgSpaceCenter + "px";
    errorMsg.classList.add("message");
  }

  //// Measure num length in pixs to stop counter if > display size ////
  function numBiggerThanDisplaySize() {
    // creates a temporary span to measure size of new num
    let ruler = document.createElement("span");
    document.querySelector("body").insertAdjacentElement("afterbegin", ruler);

    // gets some display's handy computed properties
    let displayCssProp = window.getComputedStyle(display);

    //display's padding
    let displayPadding =
      parseInt(displayCssProp.getPropertyValue("padding-left")) +
      parseInt(displayCssProp.getPropertyValue("padding-right"));

    // sets same font props to match display content
    ruler.style.fontWeight = displayCssProp.getPropertyValue("font-weight");
    ruler.style.fontSize = displayCssProp.getPropertyValue("font-size");

    ruler.innerHTML = num + 1;
    let rulerWidth = ruler.getBoundingClientRect().width;
    ruler.remove();

    return rulerWidth > display.clientWidth - displayPadding;
  }
}
