// Created by Ben Templin. For more of my projects check out http://www.bentemplin.me

/* To Do
team score
*/

//Initialize counting variables
var score_green = 0;
var score_red = 0;
var caution_green = 0;
var caution_red = 0;
var stalling_green = 0;
var stalling_red = 0;
var penalty_green = 0;
var penalty_red = 0;
var scoreDiff = 0;
//Initialize name variables
var green_wrestler = '';
var red_wrestler = '';
var bout_num = '';
//Initialize Output
var output = '';
var outputClick = 0
var clickCheck = 0
var outWindow = ''
//Other variables
var clickCorrect = 0;
var clickLock = 0;
var period = '';
var endType = '';

// Make the output function
document.getElementById("output").onclick = function(){
	if (clickCheck == 0){
		clickCheck += 1
		outWindow = window.open()
	};
	if (outputClick == 1){
		document.getElementById("output").setAttribute("style", "background-color:white")
		document.getElementById("output").innerHTML = "Output: Off"
		outputClick = 0
	}
	else if (outputClick == 0){
		document.getElementById("output").setAttribute("style", "background-color:red")
		document.getElementById("output").innerHTML = "Output: On"
		outputClick = 1
	};
};

function matchOutput(message){
	if (outputClick == 1){
		outWindow.document.writeln(message + "<br>")
		output = ''
	};
};

//Set time functions
document.getElementById("period1").onclick = function(){
	period = '1st Period'
	matchOutput("Period 1:")
	document.getElementById('period1').setAttribute("style", 'background-color:gray')
	document.getElementById('period2').setAttribute("style", 'background-color:white')
	document.getElementById('period3').setAttribute("style", 'background-color:white')
	document.getElementById('overtime').setAttribute("style", 'background-color:white')
};

document.getElementById("period2").onclick = function(){
	period = '2nd Period'
	matchOutput("Period 2:")
	document.getElementById('period1').setAttribute("style", 'background-color:white')
	document.getElementById('period2').setAttribute("style", 'background-color:gray')
	document.getElementById('period3').setAttribute("style", 'background-color:white')
	document.getElementById('overtime').setAttribute("style", 'background-color:white')
};

document.getElementById("period3").onclick = function(){
	period = '3rd Period'
	matchOutput("Period 3:")
	document.getElementById('period1').setAttribute("style", 'background-color:white')
	document.getElementById('period2').setAttribute("style", 'background-color:white')
	document.getElementById('period3').setAttribute("style", 'background-color:gray')
	document.getElementById('overtime').setAttribute("style", 'background-color:white')
};

document.getElementById("overtime").onclick = function(){
	period = 'Overtime'
	matchOutput("Overtime")
	document.getElementById('period1').setAttribute("style", 'background-color:white')
	document.getElementById('period2').setAttribute("style", 'background-color:white')
	document.getElementById('period3').setAttribute("style", 'background-color:white')
	document.getElementById('overtime').setAttribute("style", 'background-color:gray')
};

//Make button functions to update score and penalty variables
function updateScore(){
	//Scores
	scoreDiff = score_red - score_green
	if (score_green < 10){
		document.getElementById('greenScore').value = '0' + score_green	
	}
	else if (score_green >= 10){
		document.getElementById('greenScore').value = score_green
	};
	if (score_red < 10){
		document.getElementById('redScore').value = '0' + score_red	
	}
	else if (score_red >= 10){
		document.getElementById("redScore").value = score_red
	};

	//Penalties
	if (penalty_green < 10){
		document.getElementById('greenPenCount').value = '0' + penalty_green	
	}
	else if (penalty_green >= 10){
		document.getElementById('greenPenCount').value = penalty_green
	};
	if (penalty_red < 10){
		document.getElementById('redPenCount').value = '0' + penalty_red	
	}
	else if (penalty_red >= 10){
		document.getElementById("redPenCount").value = penalty_red
	};

	//Cautions
	if (caution_green < 10){
		document.getElementById('greenCautionCount').value = '0' + caution_green	
	}
	else if (caution_green >= 10){
		document.getElementById('greenCautionCount').value = caution_green
	};
	if (caution_red < 10){
		document.getElementById('redCautionCount').value = '0' + caution_red	
	}
	else if (caution_red >= 10){
		document.getElementById("redCautionCount").value = caution_red
	};

	//Stalling
	if (stalling_green < 10){
		document.getElementById('greenStallCount').value = '0' + stalling_green	
	}
	else if (stalling_green >= 10){
		document.getElementById('greenStallCount').value = stalling_green
	};

	if (stalling_red < 10){
		document.getElementById('redStallCount').value = '0' + stalling_red	
	}
	else if (stalling_red >= 10){
		document.getElementById("redStallCount").value = stalling_red
	};

	// Check for a Tech Fall
	if (score_red - score_green >= 15){
		endType = red_wrestler + "(Red Wrestler) wins by technical fall."
		endMatch2(endType)
	};

	if (score_green - score_red >= 15){
		endType = green_wrestler + "(Green Wrestler) wins by technical fall."
		endMatch2(endType)
	};
};

//Initialize scores
updateScore()

//Set name variables
document.getElementById("submitWrestler").onclick = function(){
	green_wrestler = document.getElementById('greenWrestler').value + ' '
	red_wrestler = document.getElementById('redWrestler').value + ' '
	bout_num = document.getElementById('boutNum').value
	if (red_wrestler != ''){
		document.getElementById('redTitle').innerHTML = red_wrestler
	};
	if (green_wrestler != ''){
		(document.getElementById('greenTitle').innerHTML) = green_wrestler
	};
	if (bout_num != ''){
		document.getElementById('title1').innerHTML = "Bout " + bout_num
	};
	output = "Bout Number " + bout_num + ". Match recap //"
	matchOutput(output)
	//document.getElementById('greenWrestler').value = green_wrestler + '*'
	//document.getElementById('redWrestler').value = red_wrestler + '*'
	// console.log("Red Wrestler = " + red_wrestler)
	// console.log("Green Wrestler = " + green_wrestler)
	// console.log(document.getElementById('title1').innerHTML)
};

//Reset the match
document.getElementById('resetMatch').onclick = function(){
	var check = confirm("Are you sure you want to reset the match score?")
	if (check == true){
		score_green = 0;
		score_red = 0;
		caution_green = 0;
		caution_red = 0;
		stalling_green = 0;
		stalling_red = 0;
		penalty_green = 0;
		penalty_red = 0;
		scoreDiff = 0
		//Initialize name variables
		green_wrestler = '';
		red_wrestler = '';
		bout_num = '';
		document.getElementById('redTitle').innerHTML = "Red Wrestler";
		document.getElementById('greenTitle').innerHTML = "Green Wrestler";
		document.getElementById('title1').innerHTML = "Wrestling Score App";
		document.getElementById('redWrestler').value = "";
		document.getElementById('greenWrestler').value = "";
		document.getElementById('boutNum').value = "";
		document.getElementById('period1').setAttribute("style", 'background-color:white')
		document.getElementById('period2').setAttribute("style", 'background-color:white')
		document.getElementById('period3').setAttribute("style", 'background-color:white')
		document.getElementById('overtime').setAttribute("style", 'background-color:white')
		period = '';
		output = '';
		endType = '';
		document.getElementById('redScore').disabled = true
		document.getElementById('greenScore').disabled = true
		document.getElementById('redPenCount').disabled = true
		document.getElementById('greenPenCount').disabled = true
		document.getElementById('redCautionCount').disabled = true
		document.getElementById('greenCautionCount').disabled = true
		document.getElementById('redStallCount').disabled = true
		document.getElementById('greenStallCount').disabled = true
		document.getElementById('correct').innerHTML = 'Correct Items'
		document.getElementById('correct').setAttribute("style", 'background-color:white')
		clickCorrect = 0
		clickLock = 0
		// document.getElementById('redScore').innerHTML = '00'
		// document.getElementById('greenScore').innerHTML = '00'
		updateScore()
	};
};

//Function to correct score items and lock control panel
document.getElementById('correct').onclick = function(){
	title2 = document.getElementById('title1').innerHTML
	if (clickCorrect == 0){
		clickCorrect += 1
		document.getElementById('redScore').disabled = false
		document.getElementById('greenScore').disabled = false
		document.getElementById('redPenCount').disabled = false
		document.getElementById('greenPenCount').disabled = false
		document.getElementById('redCautionCount').disabled = false
		document.getElementById('greenCautionCount').disabled = false
		document.getElementById('redStallCount').disabled = false
		document.getElementById('greenStallCount').disabled = false
		document.getElementById('correct').innerHTML = 'Stop Corrections'
		document.getElementById('correct').setAttribute("style", 'background-color:red')
	}
	else if (clickCorrect == 1){
		clickCorrect = 0
		document.getElementById('redScore').disabled = true
		document.getElementById('greenScore').disabled = true
		document.getElementById('redPenCount').disabled = true
		document.getElementById('greenPenCount').disabled = true
		document.getElementById('redCautionCount').disabled = true
		document.getElementById('greenCautionCount').disabled = true
		document.getElementById('redStallCount').disabled = true
		document.getElementById('greenStallCount').disabled = true
		document.getElementById('correct').innerHTML = 'Correct Items'
		document.getElementById('correct').setAttribute("style", 'background-color:white')
		score_red = parseInt(document.getElementById('redScore').value)
		score_green = parseInt(document.getElementById('greenScore').value)
		penalty_red = parseInt(document.getElementById('redPenCount').value) 
		penalty_green = parseInt(document.getElementById('greenPenCount').value) 
		caution_red = parseInt(document.getElementById('redCaution').value) 
		caution_green = parseInt(document.getElementById('greenCaution').value) 
		stalling_red = parseInt(document.getElementById('redStallCount').value) 
		stalling_green = parseInt(document.getElementById('greenStallCount').value) 
		updateScore()
	};
};

document.getElementById('lock').onclick = function(){
	if (clickLock == 0){
		clickLock += 1
		document.getElementById('lock').innerHTML = 'Unlock Controls'
		document.getElementById('lock').setAttribute('style', "background-color: red")
		document.getElementById('submitWrestler').disabled = true
		document.getElementById('resetMatch').disabled = true
		document.getElementById('correct').disabled = true
		document.getElementById("redTakedown").disabled = true
		document.getElementById("redEscape").disabled = true
		document.getElementById("redReversal").disabled = true
		document.getElementById("redPenalty").disabled = true
		document.getElementById("redNearFall2").disabled = true
		document.getElementById("redNearFall3").disabled = true
		document.getElementById("redStalling").disabled = true
		document.getElementById("redCaution").disabled = true
		document.getElementById("greenTakedown").disabled = true
		document.getElementById("greenEscape").disabled = true
		document.getElementById("greenReversal").disabled = true
		document.getElementById("greenPenalty").disabled = true
		document.getElementById("greenNearFall2").disabled = true
		document.getElementById("greenNearFall3").disabled = true
		document.getElementById("greenStalling").disabled = true
		document.getElementById("greenCaution").disabled = true
		document.getElementById("period1").disabled = true
		document.getElementById("period2").disabled = true
		document.getElementById("period3").disabled = true
		document.getElementById("overtime").disabled = true
	}
	else if (clickLock == 1){
		clickLock = 0
		document.getElementById('lock').innerHTML = 'Lock Controls'
		document.getElementById('lock').setAttribute('style', "background-color: white")
		document.getElementById('submitWrestler').disabled = false
		document.getElementById('resetMatch').disabled = false
		document.getElementById('correct').disabled = false
		document.getElementById("redTakedown").disabled = false
		document.getElementById("redEscape").disabled = false
		document.getElementById("redReversal").disabled = false
		document.getElementById("redPenalty").disabled = false
		document.getElementById("redNearFall2").disabled = false
		document.getElementById("redNearFall3").disabled = false
		document.getElementById("redStalling").disabled = false
		document.getElementById("redCaution").disabled = false
		document.getElementById("greenTakedown").disabled = false
		document.getElementById("greenEscape").disabled = false
		document.getElementById("greenReversal").disabled = false
		document.getElementById("greenPenalty").disabled = false
		document.getElementById("greenNearFall2").disabled = false
		document.getElementById("greenNearFall3").disabled = false
		document.getElementById("greenStalling").disabled = false
		document.getElementById("greenCaution").disabled = false
		document.getElementById("period1").disabled = false
		document.getElementById("period2").disabled = false
		document.getElementById("period3").disabled = false
		document.getElementById("overtime").disabled = false
	};
};

//Red wrestler controls
document.getElementById("redTakedown").onclick = function(){
	score_red += 2;
	output =(red_wrestler + "(Red Wrestler): takedown, Score = red: " + score_red + ", green: " + score_green + "\n");
	matchOutput(output)
	updateScore();
	//console.log(score_red)
};

document.getElementById("redEscape").onclick = function(){
	score_red += 1;
	output =(red_wrestler + "(Red Wrestler): escape, Score = red: " + score_red + ", green: " + score_green + "\n");
	matchOutput(output)
	updateScore();
	//console.log(score_red)
};

document.getElementById("redReversal").onclick = function(){
	score_red += 2;
	output = (red_wrestler + " (Red Wrestler): reversal, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();
	//console.log(score_red)
};

document.getElementById("redPenalty").onclick = function(){
	penalty_green += 1;
	score_red += 1;
	output = (red_wrestler + " (Red Wrestler): penalty, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();
	//console.log(penalty_green)
};

document.getElementById("redNearFall2").onclick = function(){
	score_red += 2;
	output = (red_wrestler + " (Red Wrestler): 2 near fall, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore()
};

document.getElementById("redNearFall3").onclick = function(){
	score_red += 3;
	output = (red_wrestler + " (Red Wrestler): 2 near fall, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore()
};

document.getElementById("redStalling").onclick = function(){
	stalling_red += 1;
	if (stalling_red > 3){
		score_green += 2
	}
	else if(stalling_red > 1){
		score_green += 1
	};
	output = (red_wrestler + " (Red Wrestler): stalling " + stalling_red + ", Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();	
};

document.getElementById("redCaution").onclick = function(){
	caution_red += 1;
	if (caution_red > 4){
		score_green += 2
	}
	else if (caution_red > 2){
		score_green += 1
	};
	output = (red_wrestler + " (Red Wrestler): caution " + caution_red + ", Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();
};

//Green wrestler controls
document.getElementById("greenTakedown").onclick = function(){
	score_green += 2;
	output = (green_wrestler + " (Green Wrestler): takedown, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();
	//console.log(score_green)
};

document.getElementById("greenEscape").onclick = function(){
	score_green += 1;
	output = (green_wrestler + " (Green Wrestler): escape, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();
	//console.log(score_red)
};

document.getElementById("greenReversal").onclick = function(){
	score_green += 2;
	output = (green_wrestler + " (Green Wrestler): reversal, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();
	//console.log(score_red)
};

document.getElementById("greenPenalty").onclick = function(){
	penalty_red += 1;
	score_green += 1;
	output = (green_wrestler + " (Green Wrestler): penalty, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();
	//console.log(penalty_red)
};

document.getElementById("greenNearFall2").onclick = function(){
	score_green += 2;
	output = (green_wrestler + " (Green Wrestler): 2 near fall, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore()
};

document.getElementById("greenNearFall3").onclick = function(){
	score_green += 3;
	output = (green_wrestler + " (Green Wrestler): 3 near fall, Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore()
};

document.getElementById("greenStalling").onclick = function(){
	stalling_green += 1
	if (stalling_green > 3){
		score_red += 2
	}
	else if(stalling_green > 1){
		score_red += 1
	};
	output = (green_wrestler + " (Green Wrestler): stalling " + stalling_green + ", Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();
	//console.log(stalling_green)
	//console.log(score_red)	
};

document.getElementById("greenCaution").onclick = function(){
	caution_green += 1
	if (caution_green > 4){
		score_red += 2
	}
	else if (caution_green > 2){
		score_red += 1
	};
	output = (green_wrestler + " (Green Wrestler): caution " + caution_green + ", Score = red: " + score_red + ", green: " + score_green + "; ");
	matchOutput(output)
	updateScore();
};

//Match Ending Scenarios
function endMatch(type){
	var check2 = confirm("Do you want to end the match?")
	if (check2 == true){
		output =( "Match has ended. " + type)
		alert("Bout " + bout_num + " has ended. " + type)
		matchOutput(output + "<br>////////////////////<br>")
	}
	else {
		endType = ''
	}
	return check2
};

function endMatch2(type){
	output =( "Match has ended. " + type)
	alert("Bout " + bout_num + " has ended. " + type)
	matchOutput(output + "<br>////////////////////<br>")
};

document.getElementById('endPoints').onclick = function(){
	updateScore()
	if (scoreDiff >= 1 && scoreDiff < 8){
		endType = (red_wrestler + ' (Red Wrestler) wins by decision.')
	}
	else if (scoreDiff >= 8 && scoreDiff <= 14){
		endType = (red_wrestler + ' (Red Wrestler) wins by major decision.')
	}
	else if (scoreDiff > -8 && scoreDiff <= -1){
		endType = (green_wrestler + ' (Green Wrestler) wins by decision.')
	}
	else if (scoreDiff >= -14 && scoreDiff <= -8){
		endType = (green_wrestler + ' (Green Wrestler) wins by major decision.')
	}
	else if (scoreDiff == 0){
		alert("Match cannot be ended on points in a tie.")
		return null
	};
	endMatch(endType)
};

document.getElementById('redUTB').onclick = function(){
	endType = (red_wrestler + ' (Red Wrestler) wins by ultimate tie breaker.')
	endMatch(endType)
};

document.getElementById('greenUTB').onclick = function(){
	endType = (green_wrestler + ' (Green Wrestler) wins by ultimate tie breaker.')
	endMatch(endType)
};

document.getElementById('redWBF').onclick = function(){
	endType = (red_wrestler + ' (Red Wrestler) wins by fall.')
	endMatch(endType)
};

document.getElementById('greenWBF').onclick = function(){
	endType = (green_wrestler + ' (Green Wrestler) wins by fall.')
	endMatch(endType)
};

document.getElementById('redInj').onclick = function(){
	endType = (red_wrestler + ' (Red Wrestler) wins by injury default.')
	endMatch(endType)
};

document.getElementById('greenInj').onclick = function(){
	endType = (green_wrestler + ' (Green Wrestler) wins by injury default.')
	endMatch(endType)
};

document.getElementById('redDQ').onclick = function(){
	endType = (red_wrestler + ' (Red Wrestler) wins by disqualification.')
	endMatch(endType)
};

document.getElementById('greenDQ').onclick = function(){
	endType = (green_wrestler + ' (Red Wrestler) wins by disqualification.')
	endMatch(endType)
};
