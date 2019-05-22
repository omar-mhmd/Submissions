var img1 =document.querySelector('#image1');
var img2 =document.querySelector('#image2');
var img3 =document.querySelector('#image3');
var img4 =document.querySelector('#image4');
var img5 =document.querySelector('#image5');

img1.addEventListener('mouseover', mlokhiye)
img2.addEventListener('mouseover', mlokhiye)
img3.addEventListener('mouseover', mlokhiye)
img4.addEventListener('mouseover', mlokhiye)
img5.addEventListener('mouseover', mlokhiye)

function mlokhiye(ev){
    if (ev.target.id == "image1")
    {    ev.target.src = "images/image1_2.jpg" 

}
else if(ev.target.id == "image2"){
ev.target.src = "images/image2_2.jpg"

}
else if (ev.target.id == "image3"){
    ev.target.src ="images/image3_2.jpg"
}
else if (ev.target.id == "image4"){
ev.target.src = "images/image4_2.jpg"
}

else if (ev.target.id== "image5")
{
    ev.target.src = "images/image5_2.jpg"
}
}


img1.addEventListener('mouseout', shawerma)
img2.addEventListener('mouseout', shawerma)
img3.addEventListener('mouseout', shawerma)
img4.addEventListener('mouseout', shawerma)
img5.addEventListener('mouseout', shawerma)

function shawerma(ev){
    if (ev.target.id == "image1")
    {    ev.target.src = "images/image1.jpg" 

}
else if(ev.target.id == "image2"){
ev.target.src = "images/image2.jpg"

}
else if (ev.target.id == "image3"){
    ev.target.src ="images/image3.jpg"
}
else if (ev.target.id == "image4"){
ev.target.src = "images/image4.jpg"
}

else if (ev.target.id== "image5")
{
    ev.target.src = "images/image5.jpg"
}
} 
