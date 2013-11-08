/*Ashley Schaefer
	11/07/13
	Expressions: Personal*/

/*This calculation will help me to quickly determine how much I made total working at one of my jobs.*/

//Ask's the user how many hours they tended bar one night
	var bar = prompt("In order to determine how much you made tonight, I need some information. \n How many hours did you bartend tonight?");
//Ask's the user how many hours they waitressed.
	var wait = prompt("How many hours did you waitress tonight?");
//Ask's the user how much was made in tips that night.
	var tips = prompt("How much did you make in tips tonight?");
//This multiples the number of hours worked tending bar by 8, which is the hourly wage for tending bar at my work.
	var barPay = bar * 8;
//This multiples the number of hours worked waitressing by 4, which is the hourly wage for waitressing at my work.
	var waitPay = wait * 4;
//This finds the total amount made by adding the amount made tending bar, waitressing, and tips made.
	var total = (Number(barPay) + Number(waitPay) + Number(tips));
//This outputs the total made to the user
	console.log("Congratulations! You made $" + total + ".00 tonight.");





