function readValue(){
    
    var value = document.querySelector("#inputBox").value;

    var palindrom = new Palindrom(value);
    
    palindrom.setBoolValueIfInputLowerCase();

    if(palindrom.boolLowerCase)
    {
        palindrom.reverseStr();
        console.log(palindrom.inputStr);
        console.log(palindrom.revInputStr);
        value = palindrom.inputStr === palindrom.revInputStr ? "Ja" : "Nej";
    }
    else
    {
        value = "Gemener endast!"
    }
    
    
    
    //value = palindrom.boolLowerCase === true ? "Ja" : "Nej";
    
    document.querySelector("#answer").innerHTML = value;
    
}
    
var submitter = document.querySelector("#doCalc");
submitter.addEventListener("click", readValue, false);
    
    

    
    

    
    
    

