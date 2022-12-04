"use strict";
// This file contains only the creation of the counter section of the doc. The links section has been written directly in HTML.

// creates an element and attaches it to another one.
// args tagName = "string", attributes = {prop:"string"}, attachTo = "css selector", position = "string" (as per insertAdjacentElement), content = "string".

function createAndAttachElement(
  tagName,
  attributes,
  attachTo,
  position,
  content = ""
) {
  let element = document.createElement(tagName);
  for (let property in attributes) {
    element.setAttribute(property, attributes[property]);
  }
  element.innerHTML = content;
  document.querySelector(attachTo).insertAdjacentElement(position, element);
  return element;
}

// Counter outer layout
createAndAttachElement(
  "div",
  { class: "counter-alignment" },
  "main",
  "beforeend"
);

// counter inner layout
createAndAttachElement(
  "section",
  { class: "counter" },
  ".counter-alignment",
  "afterbegin"
);

// heading
createAndAttachElement("h1", {}, ".counter", "beforeend", "COUNTER");

// display
createAndAttachElement(
  "div",
  { class: "display" },
  ".counter",
  "beforeend",
  "0"
);

// buttons
createAndAttachElement("div", { class: "buttons" }, ".counter", "beforeend");

createAndAttachElement(
  "button",
  { class: "plus", "data-action": "+", type: "button" },
  ".buttons",
  "beforeend",
  "+"
);

createAndAttachElement(
  "button",
  { class: "minus", "data-action": "-", type: "button" },
  ".buttons",
  "beforeend",
  "-"
);

createAndAttachElement(
  "button",
  { class: "reset", "data-action": "reset", type: "button" },
  ".buttons",
  "beforeend",
  "reset"
);
