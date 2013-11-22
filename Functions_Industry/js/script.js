/*Ashley Schaefer
	11/21/13
	Conditionals: Industry*/
	
//At work we use deer age to determine what to do with the hides that come in.

	
//prompts the user for the inside spread of the antlers and assigns the result to the variable spread
	var spread = prompt("Do determine the approximate age of your buck, Please answer the following questions. \n What is the inside spread of the antlers?");
//Validates that the user entered an answer to the prompt, if not the user is prompted again.
	if (spread == ""){
		prompt("Please enter the inside spread of the antlers.");
		}else{
			console.log(spread);
			}
			
//prompts the user for the total mass of the antlers and assigns the result to the variable mass		
	var mass = prompt("What is the total mass of the antlers?");
//Validates that the user entered an answer to the prompt, if not the user is prompted again.
	if (mass == ""){
		prompt("Please enter the total mass of the antlers.");
		}else{
			console.log(mass);
			}
//prompts the user for the total length of all the tines on the antlers and assigns the result to the variable tine		
	var tine = prompt("What is the total length of all tines on the antlers?");
//Validates that the user entered an answer to the prompt, if not the user is prompted again.
	if (tine == ""){
		prompt("Please enter the total length of all the tines on the antlers.");
		}else{
			console.log(tine);
			}

//Adds the inputs from all the prompts and stores the result in the variable total	
	var total = Number(spread) + Number(mass) + Number(tine);
	console.log(total);

//Creates a function that compares the number stored in the variable total and determines the age of the buck based on that number. The age is then outputted to the console.
	function age(){
		if (total < 130){
			console.log("You've got a buck that is approximately 2 and a half years or younger.");
			}else if (total >= 130 && total < 145){
				console.log("You've got a buck that is approximately between 2 and a half and 4 and a half years old.");
			}else if(total >= 145 && total < 155){
				console.log("You've got a buck that is approximately between 4 and a half and 5 and a half years old.");
			}else{
				console.log("You've got a buck that is approximately 5 and half years or older.");
			}
		}
//Calls the function age to actually run.	
	age();
	

	
	
