var div= document.getElementById("day");
var popup=document.getElementById("popup");

div.addEventListener("mouseover", function(){
        popup.style.display="block";
})

div.addEventListener("mouseout", function(){
    popup.style.display="none";
})

var div= document.getElementById("other");
var autre_popup=document.getElementById("autre_popup");

div.addEventListener("mouseover", function(){
    
        autre_popup.style.display="block";
})
div.addEventListener("mouseout", function(){
    autre_popup.style.display="none";
})