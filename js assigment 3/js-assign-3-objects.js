var Athlete={
Name:"Cristiano Ronaldo",
Team:"Manchester united",          /////The object will have 4 properties and 1 function (method). The properties should be meaningful to what they represent, and useful in a web application.//
JersyNo:23,
Update:function (New){
Athlete.Skill=New;

alert("Cristiano Ronaldo skill updated to " + " " + Athlete.Skill)  //////////The object will have 4 properties and 1 function (method). The properties should be meaningful to what they represent, and useful in a web application.///
}
};
Athlete.Update("Advanced")


var newTeam= prompt("Current team of ronaldo is  " + "" +  Athlete.Team +  " "+ "add new team")
Athlete.Team = newTeam  ///Send a popup to the user asking for input, then update one of the object properties with the new value from the user.

console.log(Athlete); 
var newNumber= parseInt ( prompt("Current jersy no. of ronaldo is " + " " + Athlete.JersyNo + " " + "add new jersey no." ))
Athlete.JersyNo= newNumber;///8. Send a second popup to the user, which updates a second (different) object property with the new value from the user.
console.log(Athlete);
Athlete.Update("goat") ///Next, call the method of your custom object to update a 3rd object property.
console.log(Athlete);
alert("Update value of Athelete Name: " +  "  "  + Athlete.Name + "   " + "Team :" + "  " + Athlete.Team + "   " + "Skill :"  + "  "+ Athlete.Skill + "  " + "Jersy no:" + "  " + Athlete.JersyNo);
////STRETCH GOAL (1%): For the prompts, output the current values from the object as the default text