var TeamNumber = prompt("Hi!! Which group number do you belong");//A popup box should ask the user which team number they belong to.
var FirstName = ""


var CorrectTeamNumber=4
if (TeamNumber="" || TeamNumber!=CorrectTeamNumber){   ///If a user does not provide the correct team number (numeral, not text), a popup message will let them know that they are denied access.
    alert("Aceess denied ! ") ;                   
 
}
else {
  FirstName=prompt("Can i get your first name");//Users that provide the correct team number (as set by you, pick one number 1 to 6) will be asked what their first name is


    switch (FirstName) {                                            
        case "Abhiraj":
            alert("Welcome to the group Abhiraj Abhiraj")  ///The code should check if the provided name belongs to a set list of the members of your team (
            
            break;
    
            case "Sumit":
            alert("Welcome to the group Sumit sharma")
            
            break;
            case "Nitish":
            alert("Welcome to the group Nitish sharma")
            
            break;
            case "Rahul":
            alert("Welcome to the group Rahul sharma")
            
            break;
        default:
            alert("Access denied !")
            break;   //Users that submit a value that is not a valid team member name will see a popup with an “Access denied!” message.
    }
}
