# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

When the page is refreshed, the text will be hidden again. This is because when the page is refreshed, it requests the file file again, which was not changed when the javascript ran to change the display properties of the text to be visible.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Removing the 'window.addEventListener' function makes it so the 'more text link' no longer displays the hidden text. It allows other functions to be invoked after the main 'window' element of the page has been fully loaded.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

The addEventListener method specifies which type of events a page element may react to and in what they may react
