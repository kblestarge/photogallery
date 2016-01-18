var musicEnable = false;
var soundFXEnable = false;
var imageIds = [];
var myDataRef = new Firebase('https://photogallery.firebaseio.com/');

$(document).ready(function() {

	$('#image-container img').each(function(){
		imageIds.push($(this).attr('id'));
	})

	$('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
        	addImage();
        }
  	});

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

function addImage(){
	var name = $('#nameInput').val();
	var text = $('#messageInput').val();
	myDataRef.push({url: name, alt: text});
	$('#messageInput').val('');
	$('#nameInput').val('');
}

myDataRef.on('child_added', function(snapshot) {
	var pic = snapshot.val();
	var key = snapshot.key();
	AddImageToDOM(pic.url, pic.alt, key);
});	

function AddImageToDOM(url, alt, key) {
	$('#image-container').append('<img onclick="imageClicked(\''+key+'\')" id="'+key+'" src="'+url+'" alt="'+alt+'" class="image"/>');
	imageIds.push(key);
};

function setPopup(id) {

	var thumbnail = document.getElementById(id);
	var popupImg = document.getElementsByClassName("popup-img");

	var src = thumbnail.src;
	
	//set src
	popupImg[0].src = src;
	console.log("popupImg.src:",popupImg[0].src);

	//set caption from alt
	$('figcaption').text($('#'+id).attr('alt'));

	//find index here
	i = imageIds.indexOf(id);
	console.log("i:",i);
}

function prev(){

	if(soundFXEnable){
		var audio3 = document.getElementById("audio3");
   		audio3.play();
	}

	i--;

	if(i < 0){
		i = imageIds.length-1;
	}

	setPopup(imageIds[i]);
}

function next(){

	if(soundFXEnable){
		var audio4 = document.getElementById("audio4");
   		audio4.play();
	}

	i++;
	if(i >= imageIds.length){
		i = 0;
	}
	setPopup(imageIds[i]);
}

function imageClicked(key){

	if(soundFXEnable){
		var audio = document.getElementById("audio");
   		audio.play();
	}

	console.log("key:",key);
	setPopup(key);

	$('.popup').animate({
		height: "toggle",
		fontSize: "toggle"
	},500);
}

function removeImage(){
	//remove from DOM
	$('#'+imageIds[i]).remove();
	//remove from database
	myDataRef.child(imageIds[i]).remove();
	//remove from array
	imageIds.splice(i, 1);
	console.log('k:',imageIds);
}