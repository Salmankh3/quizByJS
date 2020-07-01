function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;


	if (question1 == "False") {
		correct++;
		document.getElementById("one").style.backgroundColor = "rgba(30, 130, 76, 1)";
}

	if (question1 != "False") {
	document.getElementById("ones").style.backgroundColor = "rgba(240, 52, 52, 1)";
}

	if (question2 == "1990") {
		correct++;
		document.getElementById("two").style.backgroundColor = "rgba(30, 130, 76, 1)";
}
	if (question2 != "1990") {
	document.getElementById("twos").style.backgroundColor = "rgba(240, 52, 52, 1)";
}
	if (question3 == "Cascading Style Sheets") {
		correct++;
		document.getElementById("three").style.backgroundColor = "rgba(30, 130, 76, 1)";
	}
	if (question3 != "Cascading Style Sheets") {
		document.getElementById("threes").style.backgroundColor = "rgba(240, 52, 52, 1)";
	}
	if (question4 == "var") {
		correct++;
		document.getElementById("four").style.backgroundColor = "rgba(30, 130, 76, 1)";
	}
	if (question4 != "var") {
		document.getElementById("fours").style.backgroundColor = "rgba(240, 52, 52, 1)";
	}

	var messages = ["Congrats! You've got 100%", "Good! You've got 75%", "Fair! You just cleared by 50%", "You're Fail! Try Again Next Time"];
	var score;

	if (correct == 0) {
		score = 3;
	}

	if (correct == 1) {
		score = 3;
	}

	if (correct == 2) {
		score = 2;
	}

	if (correct == 3) {
		score = 1;
	}

	if (correct == 4) {
		score = 0;
	}
	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}
