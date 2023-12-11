let firstName =  'Raymond'
let surName = 'Gaius'
const imgs = [
    "croped.png",
    "croped.png",
    "croped.png"
]
const container = document.getElementById("container")
function renderImages(){
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++){
        imgsDOM += `<img alt="author of the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}
renderImages()
const fullName = firstName + " " + surName

console.log(fullName);

let data = [
    {
        player: "Ray",
        score: 60
    },
    {
        player: "Jae",
        score: 35
    }
]

