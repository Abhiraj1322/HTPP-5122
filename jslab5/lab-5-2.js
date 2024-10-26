//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!


var BankCoustmer={
    LastName:[],
    Branchnumber:[],
    AccountBalance:500.25,
    InterestRate:1.03,
    multipleAcc:  true,

    Makedeposit:function(a){
        BankCoustmer.AccountBalance = BankCoustmer.AccountBalance + a ;
        return "your currrent balacne is "+  BankCoustmer.AccountBalance;
    },

    makeWithdrwal:function(a){
        BankCoustmer.AccountBalance = BankCoustmer.AccountBalance - a; 
        return "thank you ,your current balance is now " + BankCoustmer.AccountBalance;
    },

    addinterestRate:function(){

        if(this.multipleAcc==false){
            BankCoustmer.AccountBalance = BankCoustmer.AccountBalance * BankCoustmer.InterestRate;
        }
        else{

            BankCoustmer.AccountBalance = BankCoustmer.AccountBalance * (BankCoustmer.InterestRate +.005); 
        }
     
        return "thank you ,your current balance is now " + BankCoustmer.AccountBalance.toFixed(2);
    }
  

}



    console.log(BankCoustmer.Makedeposit(200));

    console.log(BankCoustmer.makeWithdrwal(75));

    console.log(BankCoustmer.addinterestRate());

