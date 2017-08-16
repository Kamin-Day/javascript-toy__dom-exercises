# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

I created a variable which was set to include all of the elements in the document with the particular class name "hide_me", which were now contained as an array. Later, hiding them was done by looping through the indexes of the array.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

An event listener was set to look for the button being clicked. Once that event occured, the elements were hidding by looping through the indexes of an array containing the elements to be hid, and setting the display of each of them to 'none'