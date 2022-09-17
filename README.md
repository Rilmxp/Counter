# Counter

A plain Javascript counter

## Description

The website consists of a single page with a central counter. The counter displays a single number on the main display box as they are added or substracted by one by either pressing "+" or "-" buttons. Reset button sets value back to 0. 

## Behaviour

- Minimum value is 0. If you try to substract 1 to 0 a feedback message will pop-up.
- Maximum value is any number that fits on the display without overflowing it (see "javascript notes" on the section below). 
- You cannot reset counter when at 0. A feedback message will pop-up.

## Technologies / libraries / external resources
  - HTML
  
  - Javascript:

    - DOM Manipulation: addition/removal of classes, creation of pop-up messages and temporary elements ("ruler") to assist measurement of content in pixels. 
    - updateCounter() function takes care of all the operations whenever a button is pressed. This function consists of two additional internal functions that assist in completing the task: 
      - errorMsgDisplay() triggers whenever the above behavioural conditions are not met.
      - numBiggerThanDisplaySize() triggers whenever user presses the "+" button. It makes the standard addition but instead of updating the counter's display, it creates a "ruler" to measure the resulting number in pixels, it then compares it with the content width of the display, and if it does not fit in the latter, errorMsgDisplay() will trigger. Element sizes where taken using both elem.clientWidth and Elem.getBoundingRect() (this one a <span> as clientWidht() cannot be used on such elements
    - Notes on the above functions can be found directly on the code itself on main.js.
  
  - CSS/SASS:
  
  - Font-awesome
  -

- limit counter widh on large screens

For stetic reasons maximun number so it doesn't overflow.


