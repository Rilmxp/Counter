# Counter

A counter implemented with plain Javascript

## Description

The website consists of a single page with a central counter. The counter displays numbers on the main display box as they are added or substracted by one by either pressing "+" or "-" buttons. Reset button sets value back to 0. 

## Behaviour

- Minimum value is 0. If you try to substract 1 to 0 a feedback message will pop up.
- Maximum value is any number that fits on the display without overflowing it (see "javascript" notes on the next section). 
- You cannot reset counter when at 0. A feedback message will pop up.

## Technologies / libraries / external resources

  - HTML
  
  - Javascript:

    - DOM Manipulation: addition/removal of classes, creation of pop-up messages and temporary elements ("ruler") to assist measurement of content in pixels. 
    - updateCounter() function takes care of all the operations whenever a button is pressed. This function consists of two additional internal functions that assist in completing such tasks:
    
      - errorMsgDisplay() triggers whenever the above behavioural conditions are not met.
      - numBiggerThanDisplaySize() triggers whenever user presses the "+" button. It makes the standard addition operation but instead of updating the counter's display, it creates a "ruler" to measure the resulting number in pixels, it then compares it with the content width of the display, and if it does not fit in this one, errorMsgDisplay() will trigger. Element sizes where taken using both elem.clientWidth and Elem.getBoundingRect() (this one on a <span> as clientWidht() cannot be used on such element)
    - a setTimeOut() function was also implemented to assist in color change of numbers (from green or red back to normal), whenever the display is updated.
    - Additional notes on the above functions can be found directly on the code itself on main.js.
  
  - CSS/SASS:
    - SASS partials are organized both by group of elements (_links, _counter-elements) or scope (_config, _media queries).
    - CSS mgs-fade-in animation for feedback messages made with @keyframes
  
  - Font-Awesome:
    - Github and Briefcase (<a> to Portfolio).
  
  - Responsiveness:
    - Only one breakpoint at 700px. It updates Buttons' layout and their order on the page as well as it upscales elements and font sizes.
    - .counter has a set width of 1200px so it does not grow indefinitely on large screens.






