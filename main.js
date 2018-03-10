$(document).ready(function(){
	$.ajax({
	  url: "https://api.magicthegathering.io/v1/cards?name=nissa's chosen"
	}).done(function(data) {
	  console.log(data);
	  $("body").append(data.cards[0].name);
	  $("body").append(" -- ");
	  $("body").append(data.cards[0].manaCost);
	  $("body").append(data.cards[0].type);
	  $("body").append(data.cards[0].text);
	  $("body").append(data.cards[0].power);
		$("body").append(" / ");  
	  $("body").append(data.cards[0].toughness);
		$("body").append("<br/>");  
	});
});
