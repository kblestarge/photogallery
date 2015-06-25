var musicEnable = false;
var soundFXEnable = false;

$(document).ready(function() {


	$('.image').click(function(){

		if(soundFXEnable){
			var audio = document.getElementById("audio");
       		audio.play();
		}

		var id = $(this).attr("id");
		console.log("id:",id);

		setPopup(id);

		$('.popup').animate({
			height: "toggle",
			fontSize: "toggle"
		},500);
	})

	$('.blank').click(function(){

		if(soundFXEnable){
			var audio2 = document.getElementById("audio2");
       		audio2.play();
		}

		$('.popup').animate({
			height: "toggle",
			fontSize: "toggle"
		},500);
	})

	$('#music').click(function(){

		var music = document.getElementById("musicTrack");

		musicEnable = !musicEnable;

		if(musicEnable){
			music.play();
		}else{
			music.pause();
		}

		$(this).toggleClass('btnClicked');

	})

	$('#soundFX').click(function(){

		soundFXEnable = !soundFXEnable;

		$(this).toggleClass('btnClicked');

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

	if(soundFXEnable){
		var audio3 = document.getElementById("audio3");
   		audio3.play();
	}

	i--;

	if(i < 0){
		i = 7;
	}

	setPopup(i);
}

function next(){

	if(soundFXEnable){
		var audio4 = document.getElementById("audio4");
   		audio4.play();
	}

	i++;
	
	if(i >= 8){
		i = 0;
	}

	setPopup(i);
}

// var outerArray = [{"src":"first src","alt":"first alt"}, {"src":"second src","alt":"second alt"}];

// console.log(outerArray);