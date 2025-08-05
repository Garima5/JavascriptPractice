const btn = document.getElementById("btn")
const colors = ['orange', 'blue', 'pink', 'yellow', 'green', 'red']
const textbox = document.getElementById('colortext')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexbtn = document.getElementById("hexbtn")
let num = 0;
console.log(btn)

btn.addEventListener('click', ()=>{
    console.log("clicked");
    num = num + 1;
    console.log(num)
    let randomNumber = getRandomNumber(colors)
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    console.log("Chosen color",colors[randomNumber])
    let textstring = "Background color: "+ colors[randomNumber]
    textbox.innerText=textstring
})

hexbtn.addEventListener('click', ()=>{
    let hexValue = "#"
    for (let i = 0; i<6; i++){
        hexValue = hexValue+ hex[getRandomNumber(hex)]
    }
    console.log("hex"+hex)
    document.body.style.backgroundColor = hexValue;
    console.log("Chosen color",hexValue)
    let textstring = "Background color: "+ hexValue
    textbox.innerText=textstring

})


function getRandomNumber(list){
    return Math.floor(Math.random() * list.length)
}