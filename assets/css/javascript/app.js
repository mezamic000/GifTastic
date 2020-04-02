$("#find-emotion").on("click", function(event) {
	var queryURL =
		"http://api.giphy.com/v1/gifs/search?api_key=bncTca2KYj131Dgdey0Tr3tI051nbv14&q=emotions&limit=10";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		console.log(response);

		for (var i = 0; i < response.data.length; i++) {
			var emotionImage = $("<img>");
			var imageUrl = response.data[i].images.fixed_height.url;
			emotionImage.attr("src", imageUrl);
			emotionImage.attr("alt", "emotion image");

			$("#images").prepend(emotionImage);
		}
	});
});
