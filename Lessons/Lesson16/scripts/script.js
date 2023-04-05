// const mainDiv = document.createElement("div")
// mainDiv.classList.add("main")
// console.log(mainDiv.classList);
// document.body.append(mainDiv)
// console.log(mainDiv.classList.contains("test"));
// mainDiv.classList.replace("main", "test")
// console.log(mainDiv.classList);

// const div = document.querySelector("div")
// console.log(div.classList);
// div.classList.toggle("test")
// div.classList.remove("test2")
// console.log(div.classList);

// const div = document.querySelector(".main")
// const addColor = document.querySelector(".addColor")
// // const removeColor = document.querySelector(".removeColor")

// addColor.addEventListener("click", function(){
//     if(div.classList.contains("color")){
//         div.classList.remove("color")
//     }else{
//         div.classList.add("color")
//         }
// })

// removeColor.addEventListener("click", function(){
//     div.classList.remove("color")
// })


// const cards = document.querySelector(".cards")

// const cardsElem = []

// for (let index = 1; index < 11; index++) {
//     const card = document.createElement("div")
//     card.innerText = index
//     card.classList.add("card")
//     card.addEventListener("click", callback)
//     cards.append(card)
//     cardsElem.push(card)
// }

// function callback(event) {
//     for (let index = 0; index < cardsElem.length; index++) {
//         cardsElem[index].classList.remove("active")
//     }
//         event.target.classList.toggle("active")
// }


const words = [
    {
        en:"cat",
        ru:"кот"
    },
    {
        en:"dog",
        ru:"собака"
    },
    {
        en:"bird",
        ru:"птица"
    },
    {
        en:"fish",
        ru:"рыба"
    }
]



const cardsDiv = document.querySelector("div")

const ruButton = document.querySelector("#ruButton")
const enButton = document.querySelector("#enButton")




for (let index = 0; index < words.length; index++) {
    const div = document.createElement("div")
    div.classList.add("card")
    const {en, ru} = words[index]
    const pRu = document.createElement("p")
    pRu.classList.add("ru")
    pRu.innerText = ru

    const pEn = document.createElement("p")
    pEn.classList.add("en")
    pEn.innerText = en
    pEn.classList.add("hide")

    div.append(pRu, pEn)
    cardsDiv.append(div)
}

const ruPr = document.querySelectorAll(".ru")
const enPr = document.querySelectorAll(".en")


ruButton.addEventListener("click", function(){
    for (let index = 0; index < words.length; index++) {
        ruPr[index].classList.remove("hide")
        enPr[index].classList.add("hide")
    }
})


enButton.addEventListener("click", function(){
    for (let index = 0; index < words.length; index++) {
        ruPr[index].classList.add("hide")
        enPr[index].classList.remove("hide")
    }
})


