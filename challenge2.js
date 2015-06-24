var colors = ["green", "yellow", "orange", "blue", "purple"] 
var i = 0;

function prevColor(){
	i--;

	if(i < 0){
		i = colors.length - 1;
	}

	var display = document.getElementById('display');
	console.log(colors[i]);
	display.style.backgroundColor = colors[i];
}

function nextColor(){
	i++;
	if(i >= colors.length){
		i = 0;
	}

	var display = document.getElementById('display');
	console.log(colors[i]);
	display.style.backgroundColor = colors[i];
}

$(document).ready(function(){

	$('#display').click(function() {
		$('.wrapper.small-wrapper').switchClass("small-wrapper", "large", 1000, "easeInOutQuad");
		$('.wrapper.large').switchClass("large", "small-wrapper", 1000, "easeInOutQuad");
		$('#display.small').switchClass("small", "large", 1000, "easeInOutQuad");
		$('#display.large').switchClass("large", "small", 1000, "easeInOutQuad");
	})

	$('#slideDown').click(function() {
		// $('.popup').removeClass("hide");
		$('.popup').animate({
			height: "toggle"
		},1000);
	})

	$('.popup').click(function() {
		$('.popup').animate({
			width: "toggle",
			fontSize: "toggle"
		},1000);
	})

})