$(document).ready(function(){
	
	$("#p1 .addBtn").on("click", function(){
		console.log("Add clicked");

		var card = $("#p1 input").val();

		$.ajax({
			url: "https://api.magicthegathering.io/v1/cards?name=" + card
		}).done(function(data) {
			console.log(data);

			$("#p1 .stack").append("<div class='card'><div class='header'>" + data.cards[0].name + " -- " + data.cards[0].manaCost + "</div><div class='type'>" + data.cards[0].type + "</div><br/><div class='text'>" + data.cards[0].text + "</div><br/><div class='power'>" + data.cards[0].power + " / " + data.cards[0].toughness + "</div><div class='delete' onClick='$(this).parent().remove();'>Delete</div></div>");

		});

	});

	/****** REST OF PLAYERS *******/

	$("#p2 .addBtn").on("click", function(){
		console.log("Add clicked");

		var card = $("#p2 input").val();

		$.ajax({
			url: "https://api.magicthegathering.io/v1/cards?name=" + card
		}).done(function(data) {
			console.log(data);

			$("#p2 .stack").append("<div class='card'><div class='header'>" + data.cards[0].name + " -- " + data.cards[0].manaCost + "</div><div class='type'>" + data.cards[0].type + "</div><div class='text'>" + data.cards[0].text + "</div><div class='power'>" + data.cards[0].power + " / " + data.cards[0].toughness + "</div><div class='delete' onClick='$(this).parent().remove();'>Delete</div></div>");
		});

	});

	$("#p3 .addBtn").on("click", function(){
		console.log("Add clicked");

		var card = $("#p3 input").val();

		$.ajax({
			url: "https://api.magicthegathering.io/v1/cards?name=" + card
		}).done(function(data) {
			console.log(data);

			$("#p3 .stack").append("<div class='card'><div class='header'>" + data.cards[0].name + " -- " + data.cards[0].manaCost + "</div><div class='type'>" + data.cards[0].type + "</div><div class='text'>" + data.cards[0].text + "</div><div class='power'>" + data.cards[0].power + " / " + data.cards[0].toughness + "</div><div class='delete' onClick='$(this).parent().remove();'>Delete</div></div>");
		});

	});

	$("#p4 .addBtn").on("click", function(){
		console.log("Add clicked");

		var card = $("#p3 input").val();

		$.ajax({
			url: "https://api.magicthegathering.io/v1/cards?name=" + card
		}).done(function(data) {
			console.log(data);

			$("#p4 .stack").append("<div class='card'><div class='header'>" + data.cards[0].name + " -- " + data.cards[0].manaCost + "</div><div class='type'>" + data.cards[0].type + "</div><div class='text'>" + data.cards[0].text + "</div><div class='power'>" + data.cards[0].power + " / " + data.cards[0].toughness + "</div><div class='delete' onClick='$(this).parent().remove();'>Delete</div></div>");
		});

	});

});
