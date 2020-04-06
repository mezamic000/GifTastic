$(document).ready(function () {
	//javascript code for buttons:

	// var topics = ["Happy", "Sad", "Angry", "Bored", "Hungry", "Tired"];

	// var storedData = $("#buttons").data("emotions").split(",");

	// function createButtons() {
	// 	for (var i = 0; i < topics.length; i++) {
	// 		var emotions = $(this).attr("data-emotions", storedData[i]);
	// 		button = document.createElement("button");
	// 		var text = document.createTextNode(topics[i]);
	// 		button.appendChild(text);
	// 		var myDiv = document.getElementById("buttons");
	// 		// var b = $("<button >");
	// 		// b.attr("data-emotions", storedData[i]);
	// 		myDiv.appendChild(button);
	// 	}
	// }
	// createButtons();

	$("button").on("click", function () {
		var emotion = $(this).attr("data-emotion");

		var queryURL =
			"https://api.giphy.com/v1/gifs/search?q=" +
			emotion +
			"&api_key=bncTca2KYj131Dgdey0Tr3tI051nbv14&limit=10";

		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			console.log(queryURL);

			console.log(response);

			var results = response.data;

			for (var i = 0; i < results.length; i++) {
				var emotionDiv = $("<div>");

				var p = $("<p>").text("Rating: " + results[i].rating);

				var emotionImage = $("<img>");

				emotionImage.attr("src", results[i].images.fixed_height.url);

				emotionDiv.append(p);
				emotionDiv.append(emotionImage);

				$("#gifs-here").prepend(emotionDiv);
			}
		});
	});
});
