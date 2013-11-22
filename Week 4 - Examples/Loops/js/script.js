/* Ashley Schaefer
	Week 3 Examples: Loops*/


//While Loop

	var b = 10; //sets up the index

	while (b > 0 ){  //checks the condition
		console.log(b + " kegs on the wall");
		b--;  //subtracts 1 from b for each loop can also use ++
		}


//Do While loop

	var c = 10;

	do{  //this code inside will run first before the while code so if the while code is false the first time, this code will still run but only once.
		console.log(c + " kegs on the wall");
		c--;
		}
	while(c > 0);


//For Loop  - this is the short hand version

	for (var i = 10; i > 0; i--){
		console.log(i + " Kegs on the wall");
		}
