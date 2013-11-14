/*Ashley Schaefer
	11/13/13
	Conditionals: Industry*/
	
	
//This Calculation will determine how much total treats will cost a user.
	
	
//This asks the user if they would like dog or cat treats.
	var type = prompt("In order to ship your order we need to know what kind of treats you'd like \n Would you like dog or cat treats?");
	
//This code validates if the user entered in a type of treat. If they didn't a new prompt asks again.
	if(type == ""){
		prompt("Please select dog or cat treats");
		}else{
			console.log(type);
			}
	
//This code asks how many treats the user wants of the specified treats the user selected in the first prompt
	var quantity = prompt("How many " + type + " treats would you like to order?");
	
//This code validates that the user entered in a number of treats. if the user didn't a new prompt asks again.
	if(quantity == ""){
		prompt("Please tell us how many" + type + " treats you would like to order.");
		}else{
			console.log(quantity);
			}

//This code decides the price the user will pay depending if the user selected a dog treat or cat treat. The result is assigned to the variable price.
	var price;
	
	(type == "dog") ? price = quantity * .99 : price = quantity * .49;
	 console.log(price);
	
//this code gives the user a discount if the price is 10 dollars or over or gives no discount if under 10. The result is assigned to the variable total.
	var total;
	
	if(price > 10){
		total = price - 3;
		}else{
			total = price;
			}
	console.log(total);
	
//This code displays to the console the how many of what treat the user is getting and the total price.
	console.log("Thank you! We will send out " + quantity + " " + type + " treats at $" + total + " total.");
	
	
