$(document).ready(function(){
	$.ajax({
	  url: "https://api.magicthegathering.io/v1/cards?name=nissa's chosen"
	}).done(function(data) {
	  console.log(data);
	  $("#header").append(data.cards[0].name);
	  $("#header").append(" -- ");
	  $("#header").append(data.cards[0].manaCost);
	  $("#type").append(data.cards[0].type);
	  $("#text").append(data.cards[0].text);
	  $("#power").append(data.cards[0].power);
		$("#power").append(" / ");  
	  $("#power").append(data.cards[0].toughness);
		$("#power").append("<br/>");  
	});
});
