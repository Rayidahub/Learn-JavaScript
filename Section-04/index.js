let fruit = ["🍊", "🍒", "🍊","🍊", "🍒"]
let grapeShelf = document.getElementById("grape-shelf")
let organgeShelf = document.getElementById("orange-shelf")

function sortfruit() {
    for ( let i = 0; i < fruit.length; i++){
        if (fruit[i] === "🍒") {
            grapeShelf.textContent += "🍒"
        } else if (fruit[i] === "🍊"){
            organgeShelf.textContent += "🍊"
        }
    }
}

sortfruit()



// let hands = ["rock", "paper", "scissor"]

// function getHand(){
//     let randomIndex = Math.floor( Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log( getHand() )