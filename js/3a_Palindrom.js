"use strict";
  //******************************************************\\
 //Calculator Palindrom**********************************\\
//                                                          \\
function Palindrom(inputStr){
 
 //this.inputStr!
//     
    this.inputStr = inputStr;

 //this.lowerCase******************************************\\
//                                                          \\
    this.boolLowerCase;

 //this.revInputStr****************************************\\
//                                                          \\
    this.revInputStr;
}

 //!START**************************************************\\
//************************************* PALINDROM CALCULATOR\\

Palindrom.prototype.reverseStr = function(){
    var i = 0;
    var length = this.inputStr.length;
    var j = length;
    var reversedArr = []; 
    var reversedStr;
        
        for(i; i < length; i++, j--){
         
            reversedArr[j] = this.inputStr[i]; 
            reversedStr = reversedArr.join("");
        }
    this.revInputStr = reversedStr;
};

Palindrom.prototype.setBoolValueIfInputLowerCase = function(){
    this.boolLowerCase = this.inputStr === this.inputStr.toLowerCase() ? true : false;
};

Palindrom.prototype.dynGetProp = function(prop){
    return this[prop];
};

Palindrom.prototype.dynSetProp = function(prop, value){
    this[prop] = value;
};

 //PROTOTYPE CALCULATOR ************************************\\
//***************************************************** END!\\