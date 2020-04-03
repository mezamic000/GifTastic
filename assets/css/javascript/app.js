$(document).ready(function() {
	var topics = ["Happy", "Sad", "Angry", "Bored", "Hungry", "Tired"];

	function createButtons() {
		for (var i = 0; i < topics.length; i++) {
			var button = document.createElement("button");
			var text = document.createTextNode(topics[i]);
			button.appendChild(text);
			var myDiv = document.getElementById("buttons");
			myDiv.appendChild(button);
		}
	}
	createButtons();

	$("#find-emotion").on("click", function(event) {
		// event.preventDefualt();
		console.log("clicked");

		var queryURL =
			"https://api.giphy.com/v1/gifs/search?api_key=bncTca2KYj131Dgdey0Tr3tI051nbv14&q=emotions&limit=10";

		console.log(queryURL);

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
});
