/* var x = document.querySelector("p");
var y = document.querySelectorAll("a");

console.log(y)

y[0] = document.getElementById("show").addEventListener("click",function(){ myfunction(false) });
y[1] = document.getElementById("hide").addEventListener("click",function(){ myfunction(true) });

function myfunction(isHiden){
    console.log(isHiden);
    if (!isHiden){
        x.style.display = "block";
    }
    else if (isHiden) {
        x.style.display = "none";
    }
}*/

var p = document.querySelector("p");
var s = document.getElementById("show");
var h = document.getElementById("hide");

s.addEventListener("click", main);
h.addEventListener("click", main);

function main () {
    if (s.addEventListener) {
        return(p.style.display = "block") }
        
        else{
            return (p.style.display = "none") }
        }
