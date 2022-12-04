"use strict";

const counter = document.querySelector(".counter");
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

// pop-up error message at pressing buttons
let errorMessage;

// starting value of counter
let num = 0;

// update counter when buttons are clicked
counter.addEventListener("click", function (event) {
  updateCounter(event);
});

// counter operations
function updateCounter(event) {
  if (!event.target.closest("BUTTON")) return;
  if (errorMessage) errorMessage.remove();

  switch (event.target.closest("BUTTON").dataset.action) {
    case "+":
      // check new num size > display size to display error.
      if (numBiggerThanDisplaySize()) {
        return errorMessageDisplay("Maximum value reached");
      }

      num += 1;
      display.style.color = "#29bf12";
      break;

    case "-":
      display.style.color = "red";
      if (num === 0) {
        errorMessageDisplay("Minimum value reached");
        break;
      }
      num -= 1;
      break;

    case "reset":
      if (num === 0) {
        errorMessageDisplay("Counter already reset");
      }

      num = 0;
      display.style.color = "red";
      break;
  }

  display.innerHTML = num;

  //sets num color back to normal
  setTimeout(() => (display.style.color = ""), "250");

  // INNER FUNCTIONS //

  //// Display error Message ////
  function errorMessageDisplay(msg) {
    // get central Y coords of space between display and buttons to position message.
    let messageCentralPosition =
      (buttons.getBoundingClientRect().top -
        display.getBoundingClientRect().bottom) /
        2 +
      display.getBoundingClientRect().bottom;

    // create and position message to display
    errorMessage = createAndAttachElement(
      "div",
      { class: "message", style: `top:${messageCentralPosition + "px"}` },
      "body",
      "afterbegin",
      msg
    );
  }

  //// Measure num length in pixs to stop counter if > display size ////
  function numBiggerThanDisplaySize() {
    // gets some display's handy computed properties
    let displayCssProp = window.getComputedStyle(display);

    //display's padding, font-weight & font-size
    let displayPadding =
      parseInt(displayCssProp.getPropertyValue("padding-left")) +
      parseInt(displayCssProp.getPropertyValue("padding-right"));
    let displayFontWeight = displayCssProp.getPropertyValue("font-weight");
    let displayFontSize = displayCssProp.getPropertyValue("font-size");

    // creates a temporary span to measure size of new num setting font properties same as display's
    let ruler = createAndAttachElement(
      "span",
      {
        style: `font-weight: ${displayFontWeight}; font-size: ${displayFontSize};`,
      },
      "body",
      "afterbegin",
      `${num + 1}`
    );

    let rulerWidth = ruler.getBoundingClientRect().width;
    ruler.remove();

    return rulerWidth > display.clientWidth - displayPadding;
  }
}
