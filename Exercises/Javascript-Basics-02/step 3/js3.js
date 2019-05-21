var a = document.createElement('div');
var b= document.querySelector("div");
document.body.appendChild(a);

var c= document.querySelector("input");
c.addEventListener("keyup",lol);
function lol (){
a.innerHTML=c.value;}

