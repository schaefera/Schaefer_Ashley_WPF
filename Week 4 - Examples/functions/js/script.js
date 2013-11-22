/*Ashley Schaefer
	Week 3 Examples - Functions */
	
	
	
/* Functions:
	Allow us to write one piece of code and be able to use
	over and over.
	Used for storing and reusing pieces of code.
	Help organize code.
	*/

/*Types of functions
	functions(Normal functions)
	Procedures
	Anonymous functions
*/

/*Basic Function structure
		function functionName () {
			code the function runs
			}
			
*/
	function outptMsg(){
		console.log("Hello World");
		}
		
	function calcArea(){
		var width = 20;
		var height = 30;
		var area = width * height;
		console.log(area);
		}
		
//Function Invocation - functions need to actually be called to run
	calcArea(); // This is the actual call of the function
	

//Variable Scope
	var width = 5;

	function calcArea(){
		var width = 20;
		var height = 30;
		var area = width * height; //The code will use the width in the functions instead of the width that is outside the function.
		console.log(area);
		}
		
	calcArea(); 
	console.log(width); //this code displays the width = 5 because it is outside the function.
		
		
//Arguments and Parameters
	//parameters allow you change parts of a function without making a complete new function.
	
	/* funcName (argument 1, argument2);
	
		function funcName(parameter1, parameter2){
			code the function runs
			} 
	*/
	
	calcArea(30, 20); // arguments that are stored in the parameters are 30 and 20
	
	function calcArea(w, h){ //Order matters so 30 goes with w and 20 goes with h
		var area = w * h;
		console.log(area);
		}
		
		
	function dogYears(age){
		var dogYears = age * 7;
		console.log("Sparky is " + dogYears + " years old.");
		}
	dogYears(4); //Calls the function at age 4 in human years
	dogYears(5); //Calls the function at age 5 in human years
	

//Returning Values - Getting a value out of the function
	var total = calcArea(30, 20); //This is assigning the value returned to calcArea to the variable total
	
	function calcArea(w, h){ 
		var area = w * h;
		return area; //the value of area is getting put into calcArea
		}
	
	console.log(total);
	
	
//Functions vs. Procedures
	//Both are functions
	/*functions return values, procedures do not.
		so functions use return and a procedure could use console.log
	*/
	
	
//Anonymous Functions

	var calcArea = function(width, height) {
		var area = width * height;
		return area;
		}
		
	calcArea(20, 30); // this one calls the function
	
	var a = calcArea(20, 30);
	console.log(a); // this one calls the variable assigned to a
	
	//with anonymous functions, you cant call the function until after the function is read.
	//Regular functions allow you to call the function before the function is written in the code.
	
	
	
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		