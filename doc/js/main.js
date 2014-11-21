"use strict";
window.onload = function(){

var i = 0;
var j = 0;
var node = document.querySelectorAll("reflection");
var length = node.length;
var counter = 0;
var countStr = "";
var countStrLength = 0;

    for(i; i < length; i++ ){

        countStr = node[i].childNodes[0].nodeValue;    
        countStrLength = countStr.length;
        
        //Stega genom aktuellt svar
        for(j; j < countStrLength; j++ )
        {
            counter += countStr[j] === " " ? 1 : 0;

        }
    node[i].childNodes[0].nodeValue += " Reflektionen innehåller "+(counter - 1)+" ord";
    counter = 0;
    j = 0;
    
    }
    
i = 0;
j = 0;
node = document.querySelectorAll("answer");
length = node.length;
counter = 0;
countStr = "";
countStrLength = 0;

    for(i; i < length; i++ ){

        countStr = node[i].childNodes[0].nodeValue;    
        countStrLength = countStr.length;
        
        //Stega genom aktuellt svar
        for(j; j < countStrLength; j++ )
        {
            counter += countStr[j] === " " ? 1 : 0;

        }
    node[i].childNodes[0].nodeValue += " Svaret innehåller ca "+(counter)+" ord";
    counter = 0;
    j = 0;
    
    }
};