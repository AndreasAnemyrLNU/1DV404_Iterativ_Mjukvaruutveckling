"use strict";
  //******************************************************\\
 //Calculator Constructor**********************************\\
//                                                          \\
function Calculator(calcString){
 
 //calcString!
//     
    this.calcString = calcString;

 //this.prevNr******Nr of zeros in calcstring**************\\
//                                                          \\
    this.firstNr = null;
    
 //this.currNr******Nr of zeros in calcstring**************\\
//                                                          \\
    this.secondNr = null;
    
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

Calculator.prototype.whiteSpaceCounter = function(string){
    var count = 0;
    var i = 0;
    var length = string.length;
    
    for(i; i < length; i++){
        if(string[i] === " ")
        {
            count++;
        }
    }
    return count;
};

 //PROTOTYPE CALCULATOR ************************************\\
//***************************************************** END!\\

