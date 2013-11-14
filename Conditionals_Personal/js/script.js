/*Ashley Schaefer
	11/13/13
	Assignment: Conditionals - Personal
	*/
	
//This problem calculates the cost of a chinchilla depending on sex and color the customer wants.

//Asks the user which sex they want and assigns the input to the variable sex
	var sex = prompt("In order to determine your cost, please answer the following questions. \n Would you like a male or female chinchilla?");
//Checks to see if the user entered in information. If they did the result is printed to the console, if not the user is prompted again.		
	if (sex == ""){
		prompt("Please enter male or female.")
		}else{
			console.log(sex)
			};
//Asks the user which color they want and assigns the input to the variable color.	
	var color = prompt("What color would you like? Grey, beige, or black velvet?");
//Checks to see if the user entered in information. If they did, the result is printed to the console, if not the user is prompted again.		
	if (color == ""){
		prompt("Please enter grey, beige, or black velvet.")
		}else{
			console.log(color)
			};
//Creates a new variable called sexCost	 
	var sexCost;
//Creates a new variable called colorCost
	var colorCost;	
//This compares the variable stored in sex and if it matches male, 25 is stored in the variable sexCost, if it doesn't match male, 50 is stored in the variable.
	if (sex == "male"){
		sexCost = 25
		}else{
			sexCost = 50
		};
		
		
		
//This compares the variable stored in color. If it matches grey, 50 is stored in the variable colorCost, if it matches beige, 75 is stored in the variable, and if it doesn't match either of those, 100 is stored in the variable.	
	if (color == "grey"){
		colorCost = 50
		}else if(color == "beige"){
			colorCost = 75
		}else{colorCost = 100
		};
		
		
		
//This prints the result to the user in a readable format while adding the values in the variable of sexCost and colorCost, which will give the user a total cost for the desired chinchilla.		
	var total = (sexCost + colorCost);
	
		console.log("For a " + color + " " + sex + " chinchilla, your total will be $" + total + ".");
	
	
	
	
	
	
	
	
	
	


