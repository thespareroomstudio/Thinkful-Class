$(function(){
	var secretNum = init();
	$('td').click(fucntion() {
		var userNum = $(this).text();
		var feedback = compare(userNum, secretNum);
		$(#message).text() = feedback;
	})
	

	function init() {
		var secretNum = Math.floor((Math.random()*50)+1);  // pick a random integer
		return secretNum;
	}

	function compare(userNum, secretNum) {
		var difference = (userNum - secretNum) * 1;
		if (userNum == secretNum) {
			return "Holy cow, you got it on the first try.  Good job!";
		} else
		if (difference > 5 && difference < 10) {
			return "Fire! Fire! Someone call the fire department!";
		} else
		if (difference > 10 && difference < 15) {
			return "I'm pouring sweat, it's so hot in here.";
		} else
		if (difference > 15 && difference < 25) {
			return "Does anyone else feel hot?  I'm about to unbutton my shirt.";
		} else
		if (difference > 25 && difference < 35) {
			return "It's a little warm.  I should've wore shorts.";
		} else
		if (difference > 35 && difference < 50) {
			return "You're lukewarm, dude.";
		} else
		if (difference > 50 && difference < 65) {
			return "Do you feel a draft?  Burrr.";
		} else
		if (difference > 65 && difference < 75) {
			return "Somebody turn off the A//C, I'm freezing!";
		} else
		if (difference > 75 && difference < 85) {
			return "I can see my breath!  I should've brought mittens";
		} else
		if (difference > 85 & difference < 90) {
			return "It's so cold it's snowing.  Who wants to make snow angels!?";
		} else
		if (difference > 90 && difference < 95) {
			return "I can't feel my toes, it's so cold.  I want to go home";
		} else
		if (difference > 95) {
			return "Welome to the Ice Age.  Seriously, you can't get any colder than this";
		}
	}

});