
$(document).ready(function(){


	var counter = 0;
	var secretNumber = randomNumber();
	console.log(secretNumber);


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Increment number of guesses by 1 ---*/
  	function counterUp() {
  		counter += 1;
  		$("#count").html(counter);
  	}

  	/*--- Clear the number of guesses counter ---*/
  	function clearCount() {
  		counter = 0;
  		$("#count").html('0');
  	}

  	/*--- Clear the guess input box ---*/
  	function clearGuess() {
  		$("#userGuess").val('');
  	}

  	/*--- Add current guess to the guess list if incorrect ---*/
  	function updateGuessList(thisGuess) {
  		$("#guessList").append("<li class='guessItem'>" + thisGuess + "</li>");
  	}

  	/*--- Clear the guess list for new game ---*/
  	function clearGuessList() {
  		$(".guessItem").remove();
  	}

  	/*--- Clear the feedback area for new game ---*/
  	function clearFeedback() {
  		$("#feedback").html("Make your Guess!");
  	}

  	/*--- Generate a random number between 1 and 100 ---*/
  	function randomNumber() {
  		return (Math.floor((Math.random() * 100) + 1));
  	}

  	/*--- Prepare for a new game ---*/
  	function newGame(){
  		clearGuess();
  		clearCount();
  		clearGuessList();
  		clearFeedback();
  		secretNumber = randomNumber();
  		console.log(secretNumber);
  	}

  	/*--- Check the user's guess after guess button is clicked ---*/
  	function checkGuess(userGuess){
  		var guessDistance = Math.abs(secretNumber - userGuess);
  		console.log(guessDistance);
  		if (userGuess == secretNumber) {
  			$("#feedback").html("Right! Great job.")
		} 
		else if (guessDistance < 10) {
  			$("#feedback").html("Super hot!")
  		} 
  		else if (guessDistance < 20) {
  			$("#feedback").html("Hot")
  		} 
  		else if (guessDistance < 30) {
  			$("#feedback").html("Really warm")
  		} 
  		else if (guessDistance < 40) {
  			$("#feedback").html("A little warm")
  		} 
  		else if (guessDistance < 50) {
  			$("#feedback").html("Tepid")
  		} 
  		else if (guessDistance < 60) {
  			$("#feedback").html("Cold")
  		} 
  		else if (guessDistance < 70) {
  			$("#feedback").html("Kinda freezing")
  		} 
  		else if (guessDistance < 80) {
  			$("#feedback").html("Pretty freezing")
  		} 
  		else if (guessDistance < 90) {
  			$("#feedback").html("So freezing")
  		} 
  	}

  	/*--- Create a new game through the New Game button on page ---*/
  	$(".new").click(function(){
  		newGame();
  	});

  	/*--- Functionality for what happens when a guess is attempted ---*/
  	$("#guessButton").click(function(event) {
  		event.preventDefault();
  		thisGuess = $("#userGuess").val();
  		checkGuess(thisGuess);
  		updateGuessList(thisGuess);
  		counterUp();
  		clearGuess();
  	});



});