//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG  
 
//################## CREATE YOUR checkTemp FUNCTION
//This function will check if we can take a dog for a walk
//It expects to receive number parameters
//It will return boolean true and false according to the input temperature


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

function checkTemp(currentTemp){
    if (currentTemp > 30 || currentTemp < -10){
      return false;
    }else{
        return true;
    }
}
 currentTemp = prompt("What is current temprature?");

 if(checkTemp(currentTemp) == true){
    alert("You're good, have a nice walk!");
 }else{
    alert("Yikes! This is no weather for dog walking!");
 }