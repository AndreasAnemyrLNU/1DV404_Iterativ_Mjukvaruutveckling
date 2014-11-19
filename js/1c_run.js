"use strict";


var run = {
    
        init: function(){
    
            var inputValue = document.querySelector("#inputBox").value +" ";
            
            var calc = new Calculator(inputValue);
            var firstNr;
            var i = 0;
            var length = calc.dynGetProp('calcString').length;
            var nr = "";
            var stringOfNrs = calc.dynGetProp('calcString');
            var secondNr;
            var whiteSpaces = calc.whiteSpaceCounter(inputValue);
            
                for( i ; i < length ; i++)
                {
                    for( i ; i < stringOfNrs.indexOf(" ", i) ; i++)
                    {
                        nr += stringOfNrs[i];
                    }
                    
                    //string to Int
                    nr = +nr;
            
                    //First value
                    if(calc.firstNr === null)
                    {
                        calc.firstNr = nr;
                        nr = "";

                        continue;
                    }
                    //Second value   
                    if(calc.secondNr === null)
                    {
                        calc.secondNr = nr;

                        if(calc.secondNr < calc.firstNr)
                        {
                            firstNr = calc.firstNr;
                            secondNr = calc.secondNr;
                            calc.firstNr = secondNr;
                            calc.secondNr = firstNr;
                            nr = "";
                            continue;
                        }
                    }
 
                    //Sort if nr of integers more than two. Otherwise it's already sorted!
                    if(whiteSpaces !== 2)
                    {
                        if(nr > calc.secondNr)
                        {
                            calc.firstNr = calc.secondNr;
                            calc.secondNr = nr;
                        }
                        else if(nr > calc.firstNr)
                        {
                            calc.firstNr = nr;
                        }
                    }

                    
                nr = "";
                }
        
        document.querySelector("#secondNr").innerHTML = calc.firstNr;

        }
};


window.onload = function()
{

    var submitter = document.querySelector("#doCalc");
    submitter.addEventListener("click", run.init, false);
};