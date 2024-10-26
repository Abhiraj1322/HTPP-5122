//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meobject={
    Myname:"Abhiraj",
    Profession:"Web devolper",
    age:23,
    myProfile:function(){
        alert("hi"+ "  " + meobject.Myname + " " + "My profession is" + " " + meobject.Profession)
    }
}

meobject.myProfile()