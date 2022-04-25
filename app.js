var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotatevalue = circle.style.transform;
var rotatesum;

upbtn.addEventListener("click",()=>{
    rotatesum = rotatevalue + "rotate(-90deg)";
    circle.style.transform= rotatesum;
    rotatevalue = rotatesum;
    
})

downbtn.addEventListener("click",()=>{
    rotatesum = rotatevalue + "rotate(-90deg)";
    circle.style.transform= rotatesum;
    rotatevalue = rotatesum;
    
})