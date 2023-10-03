let numberDisplay = document.getElementById("number-display")
let saveEl = document.getElementById("save-el")
let count = 0
 
function increment (){
    count = count + 1
    numberDisplay.innerText = count 
}
function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    numberDisplay.textContent = 0
}