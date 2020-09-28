var div= document.getElementById("day");
var popup=document.getElementById("popup");

div.addEventListener("click", function(){
    if(popup.style.display!=="block"){
        popup.style.display="block";
    }else{
        popup.style.display="none";
    }
})

var div= document.getElementById("other");
var autre_popup=document.getElementById("autre_popup");

div.addEventListener("click", function(){
    if(autre_popup.style.display!=="block"){
        autre_popup.style.display="block";
    }else{
        autre_popup.style.display="none";
    }
})