"use strict";
function run(){
    
        var fractions = [null, null, null];
    
        var submitter1 = document.querySelector("#doCalc1");
        submitter1.addEventListener("click", readValue1, false);
        
        var submitter2 = document.querySelector("#doCalc2");
        submitter2.addEventListener("click", readValue2, false);
        
        var submitter3 = document.querySelector("#multiply");
        submitter3.addEventListener("click", multiply, false);
        
        var submitter4 = document.querySelector("#add");
        submitter4.addEventListener("click", add, false);
        
        var submitter5 = document.querySelector("#sub");
        submitter5.addEventListener("click", sub, false);
        
        //readValue1();
        //readValue2();
    
        function readValue1(){
        
        var nrBoxes1_1 = document.querySelectorAll(".nrBox1_1");
        var nrBoxes1_2 = document.querySelectorAll(".nrBox1_2");
    
        for(var i = 0; i < nrBoxes1_1.length; i++)
        {
            nrBoxes1_1[i].addEventListener("click", createFrac1_1, false);
        }
        
        for(var i = 0; i < nrBoxes1_2.length; i++)
        {
            nrBoxes1_2[i].addEventListener("click", createFrac1_2, false);
        }
        
        function createFrac1_1(){
                document.querySelector("#frac1_1").value += this.childNodes[0].nodeValue;
        }
        function createFrac1_2(){
                document.querySelector("#frac1_2").value += this.childNodes[0].nodeValue;
        }
    
        var value1_1 = document.querySelector("#frac1_1").value;
        var value1_2 = document.querySelector("#frac1_2").value;
        
        var frac1 = new Fraction(value1_1,value1_2);
    
        document.querySelector("#fract1_toString").innerHTML = frac1.toString();
        
        fractions[0] = frac1;
    }
    
    function readValue2(){
        
        var nrBoxes2_1 = document.querySelectorAll(".nrBox2_1");
        var nrBoxes2_2 = document.querySelectorAll(".nrBox2_2");
    
        for(var i = 0; i < nrBoxes2_1.length; i++)
        {
            nrBoxes2_1[i].addEventListener("click", createFrac2_1, false);
        }
        for(var i = 0; i < nrBoxes2_2.length; i++)
        {
            nrBoxes2_2[i].addEventListener("click", createFrac2_2, false);
        }
    
        function createFrac2_1(){
                document.querySelector("#frac2_1").value += this.childNodes[0].nodeValue;
        }
        function createFrac2_2(){
                document.querySelector("#frac2_2").value += this.childNodes[0].nodeValue;
        }
        
        var value2_1 = document.querySelector("#frac2_1").value;
        var value2_2 = document.querySelector("#frac2_2").value;
        
        var frac2 = new Fraction(value2_1,value2_2);
        
        document.querySelector("#fract2_toString").innerHTML = frac2.toString();
        
        fractions[1] = frac2;
    }
    
    function add(){
        var frac3 = Fraction.prototype.add(fractions[0], fractions[1]);

        console.log(frac3.toString());
        
        document.querySelector("#fract3_add").innerHTML = frac3.toString();
        fractions[2] = frac3;
    }
    
    function multiply(){
        var frac3 = Fraction.prototype.multiply(fractions[0],fractions[1]);
        
        document.querySelector("#fract3_multiply").innerHTML = frac3.toString();
        fractions[2] = frac3;
        
        console.log("Lika bråk? "+fractions[0].isEqualTo(fractions[1]));
    }
    
    function sub(){
        var frac3 = Fraction.prototype.sub(fractions[0], fractions[1]);

        console.log(frac3.toString());
        
        document.querySelector("#fract3_sub").innerHTML = frac3.toString();
        fractions[2] = frac3;
    }

}

window.onload = run;





    

    
    

    
    
    

