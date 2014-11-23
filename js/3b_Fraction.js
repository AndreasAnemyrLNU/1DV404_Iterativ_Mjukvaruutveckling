"use strict";
  //******************************************************\\
 //Cronstructor Fraction***********************************\\
//                                                          \\
function Fraction(numerator, denominator){


//  numerator
//  ---------
//  denominator
 
    this.denominator = denominator;
    this.numerator = numerator;
}

 //!START**************************************************\\
//*************************************** PROTOTYPE FRACTION\\

Fraction.prototype.getDenominator = function(){
    return this.denominator;
};

Fraction.prototype.getNumerator = function(){
    return this.numerator;
};

Fraction.prototype.add = function(frac1, frac2){
    
    var newDenominator = (frac1.getDenominator() !== frac2.getDenominator()) ? 
                         (frac1.getDenominator() * frac2.getDenominator()) : 
                         (frac1.getDenominator());
    
    var newNumerator   = (frac1.getDenominator() !== frac2.getDenominator()) ? 
                         (frac1.getNumerator() * frac2.getDenominator()) + (frac2.getNumerator() * frac1.getDenominator()) : 
                         (+frac1.getNumerator()) + (+frac2.getNumerator());
   
    return new Fraction(newNumerator, newDenominator);
  
};

Fraction.prototype.multiply = function(frac1, frac2){
    
    return new Fraction( (frac1.getNumerator() * frac2.getNumerator()) , (frac1.getDenominator() * frac2.getDenominator()));
};

Fraction.prototype.sub = function(frac1, frac2){
    
    var newDenominator = (frac1.getDenominator() !== frac2.getDenominator()) ? 
                         (frac1.getDenominator() - frac2.getDenominator()) : 
                         (frac1.getDenominator());
    
    var newNumerator   = (frac1.getDenominator() !== frac2.getDenominator()) ? 
                         (frac1.getNumerator() * frac2.getDenominator()) - (frac2.getNumerator() * frac1.getDenominator()) : 
                         (+frac1.getNumerator()) - (+frac2.getNumerator());
   
    return new Fraction(newNumerator, newDenominator);
  
};



Fraction.prototype.isEqualTo = function (fracobject){
    return this.toString() === fracobject.toString() ? true : false;
};

Fraction.prototype.toString = function(){
    return this.getNumerator() + "/" + this.getDenominator();
};

 //PROTOTYPE CALCULATOR ************************************\\
//***************************************************** END!\\