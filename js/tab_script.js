// sub4_QnA_메뉴탭

$(function(){
	$(".h").hide();
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	  });
	}

});

function openBoard(evt, boardName) {
	  var i, x, tablinks;
	  x = document.getElementsByClassName("board");
	  for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	  }
	  tablinks = document.getElementsByClassName("tablink");
	  for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" opacity", "");
	  }
	  document.getElementById(boardName).style.display = "block";
	  evt.currentTarget.className += " opacity";
}
