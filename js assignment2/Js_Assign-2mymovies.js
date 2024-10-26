var MovieName1="Batman Dark Knight";
var MovieName2="The Godfather";
var MovieName3="The Shawshank Redemption";
var MovieName4="12 Angry Men";                 //First, declare and initialize 7 variables with 7 movie names
var MovieName5="Schindler's List";
var MovieName6="Fight club";
var MovieName7="The matrix";
var MoviesArray=[MovieName1,MovieName2,MovieName3,MovieName4,MovieName5,MovieName6,MovieName7]; //Next, create a JavaScript array to hold these variables and represent your top 7 movie list.
 

var condition=true;
while (condition==true){


var userinput= parseInt (prompt("Which top 7 movie you liked Pick number between 1 to 7"));
 // Stretch Goal:Use a loop to re-ask the user if they didn't input valid data.     /// The user is asked, "Which top 7 movie would you like?"
//The default text will read, "Pick a number: 1-7".

if(userinput>=1 && userinput<=7 ){                                 //Validate the user input
var selectedMovie=MoviesArray[userinput-1]
alert("your number is " + userinput +" slected movie is " + selectedMovie ) //The user will then see a pop-up that says, "Number num on the list is " with num being the movie’s position on the top 7, followed by the movie title.


for(i=0;i<MoviesArray.length;i++){
    console.log("Movies:" + ""+[i+1] +" " + MoviesArray[i] ) //Users that enter invalid text will see a pop-up message that says "Please enter a number between 1 and 7!"
}
condition=false;

}else{
    // Users that enter invalid text will see a pop-up message that says "Please enter a number between 1 and 7!"
    alert("Please enter a number between 1 and 7!");
}
}
