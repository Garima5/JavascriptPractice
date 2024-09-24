console.log("loaded")
let counter = document.getElementById('counter')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')

let resetVal = 0

increase.addEventListener('click',()=>{
    resetVal = resetVal+1;
    counter.innerHTML = resetVal;
    counter.style.color = 'green'
})

decrease.addEventListener('click',()=>{
    resetVal = resetVal-1;
    counter.innerHTML = resetVal;

      counter.style.color = 'red'
})

reset.addEventListener('click',()=>{

    counter.innerHTML = 0;
      counter.style.color = 'grey'
})