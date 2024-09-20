/*
function poke(){
alert("OUCH! Stop poking me");
}
document.querySelector('html').addEventListener('click',poke);
*/

//originalImage = document.querySelector("img")

// Fetch api
url = "https://cat-fact.herokuapp.com/facts"


buttonImg = document.querySelector("button")

let newbtn = document.querySelector(".newbtn");
console.log(newbtn)
newbtn.onclick=(evt)=>{
    //.log(evt);
    console.log(evt.type);
    console.log(evt.target);
}
let currentMode = 'light';
let togglebtn = document.querySelector(".togglebtn")
togglebtn.addEventListener('click',()=>{
console.log("You are trying to chaneg mode");
if (currentMode==='light'){
    currentMode='dark';
    document.querySelector('body').style.backgroundColor='black';
}
else{
    currentMode='light';
    document.querySelector('body').style.backgroundColor='white';
}
console.log(currentMode);

});