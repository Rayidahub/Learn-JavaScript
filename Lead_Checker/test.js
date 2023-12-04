let openBox = document.getElementById("box")

openBox.addEventListener("click", function() {
    console.log("I want to open the box!");
})


const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy(){
    container.innerHTML += "<p>Thank you for buying</p>"
}
const recipient = "James"

const sender = "Rayida"
const email = `Hey ${recipient}! How is it going cheers ${sender}`

console.log(email)