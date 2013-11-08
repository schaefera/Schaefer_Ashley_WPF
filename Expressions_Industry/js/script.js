/*Ashley Schaefer
	11/07/13
	Assignment: Expressions - Industry
	*/


/* This equation will allow a user to determine how many carrot seeds they will need.*/

//Ask's the user how many feet wide the area is that they will be using to plant seeds in.
	var width = prompt("In order to determine how many carrots you need I will need some information. \n What is the width (feet) of the area you will be planting?");
//Ask's the user how many feet long the area is that they will be using to plant seeds in.
	var length = prompt("What is the length (feet) of the area you will be planting with carrots?");
//Subtracts 1 from the width given by the user to determine the number of rows that can be planted.
	var row = width - 1;
//Multiplies the length given by the user to determine the number of seeds that can be planted in each row.
	var plants = length * 4;
//Multiplies the number of rows by the number of plants to give the total number of seeds that can be planted.
 	var carrots = row * plants;
 //Puts the row, plants, and carrots variables into an array called total
 	var total = [row, plants, carrots];
//This prints out the results from the array into a readable format for the user.
 	console.log("You will have " + total[0] + " rows with " + total[1] + " carrots in each row. That means you will need a total of " + total[2] + " carrot seeds.");
 	
 	




