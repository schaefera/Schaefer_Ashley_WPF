//javascript file - Expressions



//Basic Expressions
var a = 2;
console.log(a);

a = a + 3; //this adds 3 to a and stores the result
console.log(a);

var b;
b = a + 3;
console.log(b);



//Example Expressions
var yearBorn = 1989;
var age = 2013 - yearBorn; //can use multiple operators in the expression. example - can add - 1 if your bd hasnt happened yet.
console.log(age);



//Arithmetic Operators

//area of a triangle is half the width times the height
var width = 4;
var height = 5;

var area = width * height/2;     //  * is multiplication
console.log(area);




//Using Modulo
 // % is used to find the remainder of a division operation
 
var remainder = 32 / 10;
console.log(remainder);

var remainder = 32 % 10;
console.log(remainder); //this gives the output of 2 which is what is left over in the division problem
	//good to use if you need to determine if a number is even or odd
	
	
	
	
	
//Order of Operations - parenthesis, exponents, multiplication, division, addition, subtraction
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//the average is the sum of all items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average);


var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2; //dont need parenthesis
console.log(perimeter);






//Using arrays in expressions
var orangeBins = [234, 567, 883];
var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);


//Concatenating Strings
var firstName = "Ashley";
var lastName = "Schaefer";
var fullName = firstName + " " + lastName;
console.log(fullName);

var a = "6"; //this is the string 6 not the number
var b = "7";
var result = a + b; // this adds the character 6 and 7 instead of 6 + 7
console.log(result);




//Casting
var stringVar = "6";
var result = 7 + stringVar;
console.log(result);

var result = 7 + Number(stringVar); // this just tells the computer to treat stringVar like a number instead of a number
console.log(result);

var areaCode = 920;
var firstPart = 604;
var secPart = 4444;
var phoneNo = "(" + String(areaCode) +")" + String(firstPart) + "-" + String(secPart); //This treats the numbers as strings so they dont add together
console.log(phoneNo);




//Assignment Operators
var a = 3;
a = a + 4;
console.log(a);


var a = 3;
a += 4; //this is the same as a = a + 4;
a *= 4; //Same as a = a * 4;
a /= 4; //same as a = a / 4;
a -= 4; //same as a = a - 4;


var a = 3;
a ++ ; // this is the same as a = a + 1.  Can also do a -- which is a = a - 1
console.log(a);








	