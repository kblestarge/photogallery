$(document).ready(function(){

	$(".image").click(function() {
		var alt = $(this).attr("alt");
		var src = $(this).attr("src");

		var h1 = $("h1")[0];
		var h2 = $("h2")[0];

		h1.innerHTML = alt;
		h2.innerHTML = src;
	})

})