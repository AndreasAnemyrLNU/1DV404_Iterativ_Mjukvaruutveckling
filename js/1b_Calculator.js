"use strict";
  //******************************************************\\
 //Calculator Constructor**********************************\\
//                                                          \\
function Calculator(calcString){
 
 //calcString!
//     
    this.calcString = calcString;

 //this.zero******Nr of zeros in calcstring****************\\
//                                                          \\
    this.zero = 0;
    
 //this.even******Nr of even nrs in calcstring*************\\
//                                                          \\
    this.even = 0;
    
 //this.odd*******Nr of odd nrs in calcstring**************\\
//                                                          \\
    this.odd = 0;
}


 //!START**************************************************\\
//************************************* PROTOTYPE CALCULATOR\\

Calculator.prototype.dynGetProp = function(prop){
    return this[prop];
};

Calculator.prototype.dynSetProp = function(prop, value){
    this[prop] = value;
};

Calculator.prototype.dynIncrProp = function(prop, increment){
    this[prop] += increment;
};

 //PROTOTYPE CALCULATOR ************************************\\
//***************************************************** END!\\

