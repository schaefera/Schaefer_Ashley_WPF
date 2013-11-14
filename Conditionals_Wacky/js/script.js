/*Ashley Schaefer
	11/13/2013
	Conditionals: Wacky*/

	
//This problem gives the user a total based on how many t-shirts or sweatshirts they want as well as if they would like shipping.

//Asks the user the number of t-shirts they want to order and assigns the value to the variable tshirt	
	var tshirt = prompt("In order to give you a total please answer the following questions. \n How many t-shirts would you like?");
//Verifies that the user entered an answer to the prompt, if they did, the answer is printed to the console, if not, the user is prompted again.	
	if (tshirt == ""){
		prompt("Please enter the number of t-shirts you would like.");
		}else{
			console.log(tshirt);
			}
//Asks the user the number of sweatshirts they want to order and assigns the value to the variable sweatshirt.	
	var sweatshirt = prompt("How many sweatshirts would you like?");
//Verifies the user entered an answer to the prompt. If they did, the answer is printed to the console, if not, the user is prompted again.
	if (sweatshirt == ""){
		prompt("Please enter the number of sweatshirts you would like.");
		}else{
			console.log(sweatshirt);
			}
//Asks the user if they want shipping and assigns the value to the variable ship	
	var ship = prompt("Would you like shipping?");
//Verifies the user entered an answer to the prompt. If they did, the answer is printed to the console, if not, the user is prompted again.
	if (ship == ""){
		prompt("Please answer if you would like shipping.");
		}else{
			console.log(ship);
			}
	
//This calculates the total cost for tshirts by multiplying the value in tshirt by 12 and storing the value in tshirtCost.
	var tshirtCost = tshirt * 12;

//This calculates the total cost for sweatshirts by multiplying the value in sweatshirt by 30 and storing the value in sweatshirtCost.
	var sweatshirtCost = sweatshirt * 30;
	
//This calculates the total apparel cost by multiplying the values in tshirtCost and sweatshirtCost.	
	var total = tshirtCost + sweatshirtCost;
	
//Creates a new variable called shipCost	
	var shipCost;
	
//This compares the values in the variable ship. If the variable is no, the shipCost is 0. If the variable in total is greater than 100 and ship is yes, shipCost will also be 0. Otherwise shipCost will be 10	
	if(ship == "no") {
		shipCost = 0;
		}else if (total > 100 && ship == "yes") {
			shipCost = 0;
		}else{
			shipCost = 10;
			};
		
//This finds the total cost by adding the value in total and the value in shipCost
	var totalShip = total + shipCost;
		
//This prints out to the console the total cost with shipping in a readable format.		
	console.log("Your order total will be $" + totalShip);
		
	
