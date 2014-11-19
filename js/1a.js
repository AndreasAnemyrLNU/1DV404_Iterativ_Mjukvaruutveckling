        //Hardcoded value if no value in inout
    
    function readValue(){
    
    
    var value = document.querySelector("#inputBox").value;
    

    
    var i = 0;
    var counter_a = 0;
    var counter_A = 0;
    
    for(i = 0; i < value.length; i++){
    
        if(value[i] === "a")
        {
            counter_a++;
        }
        
        if(value[i] === "A")
        {
            counter_A++;
        }
    }
    
    document.querySelector("#a").innerHTML = counter_a;
    document.querySelector("#A").innerHTML = counter_A;  
    
    counter_a = 0;
    counter_A = 0;
        
    }
    
    
    
    var submitter = document.querySelector("#doCalc");
    
    submitter.addEventListener("click", readValue, false);
    
    

    
    

    
    
    

