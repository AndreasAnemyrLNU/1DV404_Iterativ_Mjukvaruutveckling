"use strict";


var run = {
    
        init: function(){
        
            var calc = new Calculator("0 0 0 0 1 1 1 1 2 2 2 2 ");
            var length = calc.dynGetProp('calcString').length;
            var i = 0;
            var nr = "";
            
                for( i ; i < length ; i++)
                {
                    
                    for( i ; i < calc.dynGetProp('calcString').indexOf(" ", i) ; i++)
                    {
                        nr += calc.dynGetProp('calcString')[i];
                    }
                
                    if(+nr === 0)
                    {
                        calc.dynIncrProp('zero', 1); 
                    }
                    else if(nr % 2 === 0)  
                    {
                        calc.dynIncrProp('even', 1);
                    }
                    else
                    {
                        calc.dynIncrProp('odd', 1);
                    } 
                    
                nr = "";
                }
            
        //console.log(calc.dynGetProp('zero'));
        //console.log(calc.dynGetProp('even'));
        //console.log(calc.dynGetProp('odd'));  
        
        }
    
};


window.onload = run.init;