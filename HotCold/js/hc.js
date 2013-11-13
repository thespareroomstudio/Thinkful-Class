$(function(){
	var secretNum = init();
	console.log("The secret number is: " + secretNum);
	$('td').click(function() {
		var userNum = $(this).text();
		console.log("User choose: " + userNum);
		var feedback = compare(userNum, secretNum);
		$('#message').text(feedback);
		$(this).css("background-color", "inherit");
	});
	

	function init() {
		var secretNum = Math.floor((Math.random()*50)+1);  // pick a random integer
		var radialX = secretNum.toString();
		var radialY = secretNum.toString();

		radialX = radialX.substr(1,1);
		console.log(radialX);
		
		radialY = radialY.substr(0,1);
		console.log(radialY);
		
		if (radialX == "0") {
			radialX = 10;
		} else
		if (radialX == "") {
			radialX = radialY;
			radialY == 1;
		}
		console.log(radialX, radialY);
		radialX = radialX * 50 + 25;																				
		radialY = radialY * 50 + 25;
		console.log(radialX, radialY);																				
		
		$('table').css("background", "radial-gradient(circle at "+radialX+"px "+radialY+"px, red, orange, yellow, #F0F8FF, #6495ED, #00008B)");
		
		return secretNum;
	}

	function compare(userNum, secretNum) {
		var difference = (userNum - secretNum);
		if (difference < 0) {
			difference = difference * -1;
		}
		console.log("The difference between them is: " + difference);
		if (userNum == secretNum) {
			return "Ding ding ding!  You got it!";
		} else
		if (difference > 0 && difference <= 5) {
			return "Fire! Fire! Someone call the fire department!";
		}
		if (difference > 5 && difference <= 10) {
			return "My skin is burning.  I feel like I'm about to combust!";
		} else
		if (difference > 10 && difference <= 15) {
			return "I'm pouring sweat, it's so hot in here.";
		} else
		if (difference > 15 && difference <= 25) {
			return "Does anyone else feel hot?  I'm about to unbutton my shirt.";
		} else
		if (difference > 25 && difference <= 35) {
			return "It's a little warm.  I should've wore shorts.";
		} else
		if (difference > 35 && difference <= 50) {
			return "You're lukewarm, dude.";
		} else
		if (difference > 50 && difference <= 65) {
			return "Do you feel a draft?  Burrr.";
		} else
		if (difference > 65 && difference <= 75) {
			return "Somebody turn off the A//C, I'm freezing!";
		} else
		if (difference > 75 && difference <= 85) {
			return "I can see my breath!  I should've brought mittens";
		} else
		if (difference > 85 & difference <= 90) {
			return "It's so cold it's snowing.  Who wants to make snow angels!?";
		} else
		if (difference > 90 && difference <= 95) {
			return "I can't feel my toes, it's so cold.  I want to go home";
		} else
		if (difference > 95) {
			return "Welome to the Ice Age.  Seriously, you can't get any colder than this";
		} else
		return "There was an error.";
	}

});