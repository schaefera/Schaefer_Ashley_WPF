/*Ashley Schaefer
	11/06/2013
	Expressions: Wacky*/
	
	
/* This calculation will help a customer determine the total cost of a buffet based on how many people are attending and there ages*/

//This collects and stores the number of adults that are attending	
	var adults = prompt("To determine your total cost, we need to know how many people are attending. \n How many adults, ages 17 and over, will be attending the buffet?");
//This collects and stores the number of teens that are attending
	var teens = prompt("How many teens, ages 13-16, will be attending the buffet?");
//this collects and stores the number of children that are attending
	var kids = prompt("How many children, ages 12 and under, will be attending the buffet?");
	
//This equation multiplies the variable stored in adults and the number 10 to get the total cost for the number of adults
	var adultCost = adults * 10;
		console.log(adultCost);
//This equation multiples the variable stored in teens and the number 7 to get the total cost for the number of teens
	var teenCost = teens * 7;
		console.log(teenCost);
//This equation multiples the variable stored in kids and the number 3 to get the total cost for the number of kids	
	var kidCost = kids * 3;
		console.log(kidCost);
//This equation finds the total number of people attending by multiplying all of the users inputs
	var peopleTotal = (Number(adults) + Number(teens) + Number(kids));
//This equation finds the total cost by multiplying adultCost, teenCost, and kidCost
	var totalCost = adultCost + teenCost + kidCost;

//This line tells the user the total people and total cost to expect for attending the buffet
	console.log("Based on the " + peopleTotal + " people attending the buffet, your total will be $" + totalCost + ".");
	
	
