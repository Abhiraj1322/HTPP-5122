//######## LAB 2-3 EMAIL SIGNUP ########
alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var userChoice
var email=""
userChoice=confirm("if you like to join mailing list")
if(userChoice===true){
 email= prompt("enter your email","me@example.com")  

if (email===null ||email===""||email==="me@example.com"){
    alert("Thank you but your Email not Valid!")
}
else{
    alert("thank you , Our next newsletter will be sent to " +email);
}
}
else{
alert("thank you we will not bother you");
}

//==== LOGIC =============