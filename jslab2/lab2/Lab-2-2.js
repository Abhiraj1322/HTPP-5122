//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
var UserName="Dart"
var password="Vader"
var  inputUsername=""
var inputPassword=""

//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
  inputUsername= prompt("Enter your name");
 //4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(inputUsername)
//5. CREATE POPUP BOX FOR PASSWORD
inputPassword=prompt("enter your password")
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(inputPassword)
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(inputUsername===UserName && inputPassword===password ){
alert("success")
console.log("login sucessful")
}
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
else{
	alert("username pasword dont match")
	console.log("login fail")
}


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
