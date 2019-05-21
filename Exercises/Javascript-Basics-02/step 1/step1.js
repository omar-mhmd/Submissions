

var pic =document.querySelector("img");
pic.addEventListener("mouseover",img);
function img (){
pic.src="images/image1_2.jpg";
}

pic.addEventListener("mouseout", img2);
function img2() {
    pic.src="images/image1.jpg";
}



