/*Ashley Schaefer
	11/21/13
	Assignment: functions - Personal
	*/
	


//prompts the user for the number of loads of laundry that needs to be done and stores the answer to the variable load.
	var load = prompt("To determine the total cost to do laundry, please answer the following questions. \n How many loads of laundry do you need to do?");
//Checks to see that the user answered the prompt, if not the user is prompted again.	
	if (load == ""){
		prompt("Please enter the number of loads you need to do.");
		}else{
			console.log(load);
			}

//prompts the user for the cost for the washer stores the answer to the variable washer.
	var washer = prompt("How much does the washer cost?");
//Checks to see that the user answered the prompt, if not the user is prompted again.		
	if (washer == ""){
		prompt("Please enter the cost to run one load in the washer.");
		}else{
			console.log(washer);
			}

//prompts the user for the cost for the dryer and stores the answer to the variable dryer.
	var dryer = prompt("How much does the dryer cost?");
//Checks to see that the user answered the prompt, if not the user is prompted again.		
	if (dryer == ""){
		prompt("Please enter the cost to run one load in the dryer");
		}else{
			console.log(dryer);
			}
			
//prompts the user to say if they need to run the dryer twice in order to properly dry the clothes and stores the answer to the variable dryTwice.
	var dryTwice = prompt("Do you need to run the dryer twice for each load?");
//Checks to see that the user answered the prompt, if not the user is prompted again.	
	if (dryTwice == ""){
		prompt("Please enter if you need to run the dryer twice for each load.");
		}else{
			console.log(dryTwice);
			}
	
//Creates a variable called dryTime	
	var dryTime;
//Determines what number is stored in the variable dryTime based on if the user said yes or no for the variable dryTwice.
	if (dryTwice == "yes"){
			dryTime = 2;
		}else{
			dryTime = 1;
		}

//Calls the function totalCost
totalCost();

//Creates a function called totalCost which calculates the total cost for the washer and the total cost for the dryer and adds them together for a final cost that outputs to the console.
	function totalCost(){
		// total washer
		var washTotal = load * washer;
		//total dryer cost
		var dryTotal = dryer * dryTime * load;
		//Total cost
		var cost = Number(washTotal) + Number(dryTotal);
		console.log("Your total cost to wash and dry your laundry will be $" + cost);	
		}

