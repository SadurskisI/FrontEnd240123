const formElem = document.querySelector("form")
const cardsElem = document.querySelector(".cards")
const questionInput = document.querySelector("#question-input")
const answerInput = document.querySelector("#answer-input")
const addBut = document.querySelector("button")

const flashCards = []

formElem.addEventListener("submit", function(event){
    event.preventDefault()

    let question = questionInput.value.trim()
    let answer = answerInput.value.trim()

    if (question === "" || answer === ""){
        alert("Don't add empty cards")
        formElem.reset() 
        return
    }

    const cardObj = {
        question,
        answer
    }
    flashCards.unshift(cardObj)
    rerender()
    formElem.reset()
})

function rerender(){
    cardsElem.innerHTML = ""
     for (let index = 0; index < flashCards.length; index++) {
        const card = createCardElem(flashCards[index])
        cardsElem.append(card)
    }
 }

function createCardElem({question, answer}){
    const cardElem = document.createElement("div")
    cardElem.classList.add("card")

    const cardFront = document.createElement("div")
    cardFront.classList.add("card-front")
    const pElemFront = document.createElement("p")
    pElemFront.innerText = question

    const cardBack = document.createElement("div")
    cardBack.classList.add("card-back")
    const pElemBack = document.createElement("p")
    pElemBack.innerText = answer

    cardFront.append(pElemFront)
    cardBack.append(pElemBack)
    cardElem.append(cardFront,cardBack)
    return cardElem
}

