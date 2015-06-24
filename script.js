$(document).ready(function() {

	$('.image').click(function(){

		var id = $(this).attr("id");
		console.log("id:",id);

		setPopup(id);

		$('.popup').animate({
			height: "toggle",
			fontSize: "toggle"
		},500);
	})

	$('.blank').click(function(){

		$('.popup').animate({
			height: "toggle",
			fontSize: "toggle"
		},500);
	})
})

function setPopup(id) {

	var thumbnail = document.getElementById(id);
	var popupImg = document.getElementsByClassName("popup-img");

	var src = thumbnail.src;
	
	popupImg[0].src = src;
	console.log("popupImg.src:",popupImg[0].src);

	i = id;
	console.log("i:",i);
}

function prev(){
	i--;

	if(i < 0){
		i = 7;
	}

	setPopup(i);
}

function next(){
	i++;
	
	if(i >= 8){
		i = 0;
	}

	setPopup(i);
}

// var outerArray = [{"src":"first src","alt":"first alt"}, {"src":"second src","alt":"second alt"}];

// console.log(outerArray);