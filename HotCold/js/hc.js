$(function(){
	var secretNum = init();																					// call function to initialize and store secret number
	var userHistory = null;																					// create place to store user history, make it empty

	$('#manualInput').slideToggle(0);																		// hide manaul input fieldset upon page load																				
	console.log("The secret number is: " + secretNum);
	
	$('td').click(function() {																				// when user clicks a number then...
		var userNum = $(this).text();																		// store the number and...
		//console.log("User choose: " + userNum);
		
		var feedback = compare(userNum, secretNum);															// compare the choosen number with the secret number, then...
		$('#message').text(feedback);																		// display a message to give the user some feedback, and...	
		$(this).css("background-color", "inherit");															// change the background of the TD cell so we can see the table bg
	});
	
	// listen for input clicks
	$('input :submit').click(function(e){																			// turn of reloading the page on form submits
		e.preventDefault();
	});
	$('input[name="reset_btn"]').click(function() {															// when the reset btn is clicked, restart program
		secretNum = init();
		userHistory = null;
		return secretNum;
	});
	$('input[name="show-bg_btn"]').click(function() {														// when the show backgrnd btn is clicked, change all the cells bg
		$('#hc_grid td').css("background-color", "inherit")
	});
	$('input[name="manual_ckbx"]').click(function() {														// if the ckbx is clicked, show manual input box and btn
		$('#manualInput').slideToggle(300);
	})
	$('input[name="userNum_btn"]').click(function(){														// if btn is clicked...
		var userNum = $('input[name="userNum_txt"]').val();													// get value of input box
		if (isNaN(userNum) == false && userNum < 101 && userNum > 0)  {										// make sure it's a number and it's between 1 and 100
			var feedback = compare(userNum, secretNum);														// compare user's guess with the secret number
			$('#message').text(feedback);																	// display feedback message
			changeTable(userNum);																			// change table to show user's guess, just as if they had clicked
		} else {
			$('#message').text("Sorry, that was not a number between 1 and 100.  Please try again.");		// if the input was not a number, or between 1 and 100, give an error
		}
	})
	// end listen for input clicks
	
	// setup game and return a secret number
	function init() {
		var secretNum = Math.floor((Math.random()*100)+1);  												// pick a random integer
		var radialX = secretNum.toString();																	// initialize x and y coordinates for raidal background
		var radialY = secretNum.toString();																	// also converting secretNum to a string so we can manipluate it

		$('body').css("background-color", "#fff");															// set the background of the entire page to white
		$('#hc_grid td').css("background-color", "#fff");													// set the background of the table (grid) to white
		$('input[name="show-bg_btn"]').attr("disabled", true);												// disable "show table background" btn until game is over

		radialX = radialX.substr(1,1);																		// x is going to be the current column the user number is * 50 (number of pixels each cell is)
		radialY = radialY.substr(0,1);																		// y is the current row.  Using the digits to figure which column/row to use
		//console.log("First digit is: "+radialY);
		//console.log("Second digit is: "+radialX);
		
		if (radialX == "0") {																				// if the second digit is a zero (the last column) then... 
			radialX = 10;																					// make it the 10th column
		} else
		if (radialX == "") {																				// if x is empty then that means it's a singe digit number, which...
			radialX = radialY;																				// means we need radialY contains the digit we actually want
			radialY = 0;																					// and we set radialY to 0 so that our math works out later
		}
		
		//console.log("x is: "+radialX, " | y is: "+radialY);
		radialX = radialX * 50 - 25;																		// now multiply by 50 (pixel width of each cell) and subtract half to...																			
		radialY = radialY * 50 + 25;																		// find the center of the cell.  With the y coordinate we have to add half.
		console.log(radialX, radialY);																				
		$('#hc_grid').css("background", "radial-gradient(circle at "+radialX+"px "+radialY+"px, red, orange, yellow, #F0F8FF, #6495ED, #00008B)"); // set background
		
		return secretNum;																					// return the secret number
	}

	// when in manual mode, show user number selection on the table
	function changeTable(userNum) {
		$('#hc_grid tr').each(function(){																	// traverse each table row
    $(this).find('td').each(function(){																		// traverse each cell in current row
        if ($(this).text() == userNum) {																	// ask if the current cell equals the user's number
        	$(this).css("background-color", "inherit");														// if so, change cell background to show the table's background
        }
    })
});
	}

	// compare the user's num and the secret and return a feedback message
	function compare(userNum, secretNum) {
		var difference = (userNum - secretNum);																// get the difference between the user's and the secret number
		console.log("THe user chose: " + userNum);
		console.log("The secret number is: " + secretNum);
		console.log("The difference is: " + difference);
		difference = absolute(difference);																	// make the difference a positive integer
		
		if (userHistory) {
			setBackgroundColor(difference);																	// if this isn't the user's first choice, change the background
		}																									
		userHistory = difference;																			// store the difference for future use (see above)
		
		// Find out how close the user's number is to the secret number and respond accordingly
		if (userNum == secretNum) {
			$('input[name="show-bg_btn"]').attr("disabled", false);											// allow the user to see the table background if they guess... 
			return "Ding ding ding!  You got it!";															// the secret number
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
			return "I can see my breath!  I should've brought mittens.";
		} else
		if (difference > 85 & difference <= 90) {
			return "It's so cold it's snowing.  Who wants to make snow angels!?";
		} else
		if (difference > 90 && difference <= 95) {
			return "I can't feel my toes, it's so cold.  I want to go home.";
		} else
		if (difference > 95) {
			return "Welome to the Ice Age.  Seriously, you can't get any colder than this.";
		} else
		return "There was an error.";
	};

	// set the background color based on if the user was warmer or cooler from the their last choice
	function setBackgroundColor(difference) {
		var warm = "#CC0000";																				// red-ish
		var cold = "#0066CC";																				// blue-ish
		if (difference > userHistory) {
			if ($('body').css("background-color") == "rgb(0, 102, 204)") { $('body').animate( {backgroundColor: "#fff"}, 10) };
			$('body').animate( { backgroundColor: cold }, 500 );
		} else 
		if (difference <= userHistory) {
			if ($('body').css("background-color") == "rgb(204, 0, 0)") { $('body').animate( {backgroundColor: "#fff"}, 10) };
			$('body').animate( { backgroundColor: warm}, 500 );
		} 
		
	};

	// return positive number
	function absolute(x) {
		if (x < 0) { 
			x = x * -1;
		}
		return x;
	};
	
});
