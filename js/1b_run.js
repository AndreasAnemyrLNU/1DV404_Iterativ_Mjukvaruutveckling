"use strict";


var run = {
    
        init: function(){
        
            var inputValue = document.querySelector("#inputBox").value;
            
            var calc = new Calculator(inputValue);
            var length = calc.dynGetProp('calcString').length;
            var stringOfNrs = calc.dynGetProp('calcString');
            var i = 0;
            //var nr = "";  Använd denna för 1C!
            
                for( i ; i < length ; i++)
                {
                    if(+stringOfNrs[i] === 0)
                    {
                        calc.dynIncrProp('zero', 1); 
                    }
                    else if(+stringOfNrs[i] % 2 === 0)  
                    {
                        calc.dynIncrProp('even', 1);
                    }
                    else
                    {
                        calc.dynIncrProp('odd', 1);
                    } 
                }
                
        document.querySelector("#zero").innerHTML = calc.dynGetProp('zero');
        document.querySelector("#even").innerHTML = calc.dynGetProp('even');
        document.querySelector("#odd").innerHTML =  calc.dynGetProp('odd');

        }
};


window.onload = function()
{
    var submitter = document.querySelector("#doCalc");
    submitter.addEventListener("click", run.init, false);
};