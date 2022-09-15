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
      // check new num > than display size to stop counter
      if (numBiggerThanDisplaySize()) {
        return errorMsgDisplay("Maximum value reached");
      }

      num += 1;
      display.style.color = "#29bf12";
      break;

    case "-":
      if (num === 0) {
        errorMsgDisplay("Minimum value reached");
        return;
      }
      num -= 1;
      display.style.color = "red";
      break;

    case "reset":
      if (num === 0) {
        errorMsgDisplay("Counter already reset");
        return;
      }

      num = 0;
      display.style.color = "red";
      break;
  }

  display.innerHTML = num;
  setTimeout(() => (display.style.color = ""), "250");

  function errorMsgDisplay(msg) {
    errorMsg = document.createElement("div");
    buttons.insertAdjacentElement("afterbegin", errorMsg);
    errorMsg.innerHTML = msg;
    errorMsg.classList.add("message");
  }

  // measure number lenght in pixels to stop counter if > display container
  function numBiggerThanDisplaySize() {
    // create a span to measure size of new num
    let ruler = document.createElement("span");
    document.querySelector("body").insertAdjacentElement("afterbegin", ruler);

    // set same font css prop to match display content
    ruler.style.fontWeight = "700";
    ruler.style.fontSize = "1.2em";
    // ruler.style.display = "none";

    ruler.innerHTML = num + 1;
    let rulerWidth = ruler.getBoundingClientRect().width;
    // ruler.style.display = "none";
    ruler.remove();

    // get padding of display container
    let displayCssProp = window.getComputedStyle(display);
    let displayPadding =
      parseInt(displayCssProp.getPropertyValue("padding-left")) +
      parseInt(displayCssProp.getPropertyValue("padding-right"));
    // console.log("padding", displayPadding);

    return rulerWidth > display.clientWidth - displayPadding;
  }
}
