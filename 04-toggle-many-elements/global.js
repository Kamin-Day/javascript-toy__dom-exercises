// Your JavaScript goes here.

window.addEventListener("load", function(){

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    var divs_to_toggle = document.getElementsByClassName('toggle_me');

    for (var i = 0; i < divs_to_toggle.length; i++) {
    	if (divs_to_toggle[i].style.display == "inline"){
     		divs_to_toggle[i].style.display = "none";
    	} else {
    		divs_to_toggle[i].style.display = "inline";
    	}
    }
  });

});