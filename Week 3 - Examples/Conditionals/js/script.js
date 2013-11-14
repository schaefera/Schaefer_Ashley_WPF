//Week 2 Examples - Conditionals


//Conditional Logic concepts
	/* if (condition){
		actions - this is performed if the condition is true
		}else{ 
		actions - these actions happen if condition is false
		}
	*/

//Logic Concepts
	/* temp = 82;
		if(temp > 70); {
		}
		
		> Greater than
		< Less than
		>= Greater than or equal to
		<= Less than or equal to
		!= Not equal to
		== Equal to   a=b changes the value of a but a == b will compare them
		=== strict equality  do they have the same value and type string to string or number to number
			use strict equality as best practice
	*/
	

//Nesting Conditionals
	/* if(sunny) {
		goToBeach();
		
			if(warmWater){    --This condition only happens if Sunny is true
			wearNewSuit();
			}
		}else{
			goToTheMovies();
			}
	*/
	

//Conditionals Example
	var oldEnough = true;
	
	//if the child is old enough, print to the console "you can ride!"
	
	if(oldEnough){
			console.log("You can ride the coaster!");  //code performed if condition is true
		}
	

//Relational Expressions

	var kidHeight = 50;
	var minHeight = 48;
	
	//if the child is tall enough, print to the console "you can ride!"
	//if the kid is over 48 inches in height
	if(kidHeight > minHeight){
			console.log("You can ride the coaster!");  //code performed if condition is true
		}
	
//Condition with Expression	
	
	var kidHeight = 47;
	var minHeight = 48;
	
	
	//if the child is tall enough, print to the console "you can ride!"
	//if the kid is over 48 inches in height
	if(kidHeight + 2 > minHeight){  //This would add 2 to kidHeight to include sneaker height
			console.log("You can ride the coaster!");  //code performed if condition is true
		}
	
	
//If and Else

	var kidHeight = 47;
	var minHeight = 48;
	
	
	//if the child is tall enough, print to the console "you can ride!"
	//if the kid is over 48 inches in height
	if(kidHeight > minHeight){  
			//this code if condition is true
			console.log("You can ride the coaster!");  //code performed if condition is true
		}else{
			//this code if condition is false
			console.log("Sorry kid, you've got some growing to do.");
		}
	
	
//Else If

	var kidHeight = 47;
	var minHeight = 48;
	var wParentHeight = 45; //Height to ride with parent
	
	
	//if the child is tall enough, print to the console "you can ride!"
	//if the kid is over 48 inches in height
	if(kidHeight > minHeight){  
			//you can ride
			console.log("You can ride the coaster!");  //code performed if condition is true
		}else if(kidHeight > wParentHeight){
			//you can ride with a parent present
			console.log("You can ride, but only with a parent present.");
		}else{
			//You've got some growing to do
			console.log("Sorry kid, you've got some growing to do.");
		}
	
	
	//This order matters. if the first statement is true ignore the next code. if false, check the second condition, if that's false do the third code.
	
	
//Logical Operators
	/*
		&&   and   - both comparisons must result in true
		||    or   - the result will be true as long as one of the comparisons is true
		^     exclusive - only one comparison can be true for the result to be true
		!    not  - not used to compare but used to flip the value. true becomes false, and false becomes true
		
		
		
	*/
	
	var budget = 300;
	var iPhonePrice = 199.99;
	var paycheck = 200;
	
	//if phone is less than budget and paycheck is over 300
	if(iPhonePrice < budget && paycheck > 300){
			console.log("We can buy the phone!");
		}else{
			console.log("No phone for you!!");
		}
	
	
	/*To compare three values (a,b,c) compare like this
		a===b && b==c
		compare pairs not individual items
	*/
	
	
//Ternary Operators
	//shortens if else statement to one line
	/*
		if(condition){
			do if true;
		}else{
			do if false;
			}
		
		(condition) ? do if true : do if false; **ternary statement
	*/
	
	var gpa = 48;
	
	if ( gpa > 2.0) {
			console.log("you can graduate!");
		}else{
			console.log("gpa is too low!");
		}
	
	//Same as above
	(gpa > 2.0) ? console.log("you can graduate!") : console.log("gpa is too low!");
	
	
	
	var age = 11;
	var book;
	
	//if child is under 10, child gets Green Eggs and Ham, otherwise they get The Time Machine
	if(age <10){
		book = "Green Eggs and Hame";
	}else{
		book = "The Time Machine";
		}
	console.log(book);
	
	//Ternary version
	book = (age < 10) ? "Green Eggs and Hame" : "The Time Machine";
	console.log(book);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	