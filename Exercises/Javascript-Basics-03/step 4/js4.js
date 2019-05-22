var a =  document.querySelector("#password");
var b = document.querySelector("#confirmation");

var c = document.querySelector("button");

c.addEventListener("click", timon);

function timon() {
    if (a.value != b.value) {
        a.style.borderColor ='red'
        b.style.borderColor = "red"
    }
}