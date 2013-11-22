/*Ashley Schaefer
	11/21/2013
	Conditionals: Wacky*/
	
	
//This allows a gymnast to see their total score. If they total is 32 or over, the gymnast can mandate from level 6 to level 5.

//Prompts the user for the beam score and stores it to the variable beam
	var beam = prompt("What is your beam score?");
//Validates that the user entered a response in the prompt, if they didn't, the user is prompted again.	
	if (beam == ""){
		prompt("Please enter your beam score.");
		}else{
			console.log(beam);
			}
//Prompts the user for the vault score and stores it to the variable vault
	var vault = prompt("What is your vault score?");
//Validates that the user entered a response in the prompt, if they didn't, the user is prompted again.	
	if (vault == ""){
		prompt("Please enter your vault score.");
		}else{
			console.log(vault);
			}
//Prompts the user for the floor score and stores it to the variable floor
	var floor = prompt("What is your floor score?");
//Validates that the user entered a response in the prompt, if they didn't, the user is prompted again.	
	if (floor == ""){
		prompt("Please enter your floor score.");
		}else{
			console.log(floor);
			}
//Prompts the user for the bar score and stores it to the variable bars
	var bars = prompt("What is your bar score?");
//Validates that the user entered a response in the prompt, if they didn't, the user is prompted again.	
	if (bars == ""){
		prompt("Please enter your bar score.");
		}else{
			console.log(bars);
			}
			
						
//creates an anonymous function called allaround that adds the four scores together from the prompts
	var allaround = function(beam, vault, floor, bars) {
		var total = Number(beam) + Number(vault) + Number(floor) + Number(bars);
		return total;
		}
		
//Calls the function allaround
	allaround(beam, vault, floor, bars);
	
//displays the result to the console
	var totalScore = allaround(beam, vault, floor, bars);
	console.log(totalScore);

//Creates a function called mandate which determines if the gymnast mandates to level 6 based on the total score
	function mandate() {
		if (totalScore >= 32) {
			console.log("Congratulations with your score of " + totalScore + " you mandate to level 6!");
			}else{
				console.log("Your score is " + totalScore + ". It looks like you need a little more work before you can mandate to level 6.");
				}
		}
//Calls the function mandate
	mandate();

