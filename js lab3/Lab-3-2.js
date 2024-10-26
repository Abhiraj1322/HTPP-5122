//LAB 3 - ARRAYS & LOOPS - PART 2

//TEAM MEMBER ARRAY
var OurTeam=["Abhiraj", "Rohit","Dilkhush", "Sumit"]

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(OurTeam)
//REMOVE LAST MEMBER
OurTeam.pop();
console.log(OurTeam)
//ADD SEAN TO FRONT OF ARRAY
OurTeam.unshift("Sean")
console.log(OurTeam)

//REARRANGE THE ARRAY ALPHABETICALLY
OurTeam.sort()
console.log(OurTeam)

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
alert("we have " +  OurTeam.length +  " members in team")

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for(i=0; i<OurTeam.length;i++){
    console.log(OurTeam[i] + "is #" + (i+1));

}