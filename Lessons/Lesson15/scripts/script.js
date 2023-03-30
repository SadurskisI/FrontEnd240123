// function printHello(userName) {
//     console.log(`Hello ${userName}`);
// }

// function printBye(userName) {
//     console.log(`By ${userName}`);
// }

// function getNameOfUser(callback){
//     const name = prompt("White your name")
//     callback(name)
//     // helloCallback(name)
//     // byeCallback(name)
// }

// // getNameOfUser(printHello, printBye)

// getNameOfUser(printHello)

// // getNameOfUser(printBye)
// ----------------------------------------------------
function forEach(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index])
    }
}

// const arrayOfNumbers = [5,26,58,20,23,0,1,35]
// function print(value) {
//     console.log(value);
// }

// function pow(value) {
//     console.log(value**2)
// }

// forEach(arrayOfNumbers, print)
// forEach(arrayOfNumbers, pow)
// ----------------------------------------------------
// const pElem = document.querySelector("p")
// function clicked(){
//     console.log(`clicked`);
// }
// pElem.addEventListener("click", clicked)
//------------------------------------------------------
// const incrButton = document.querySelector("#incr")
// const decrButton = document.querySelector("#decr")
// const pElem = document.querySelector("p")
// let counter = 0
// pElem.innerText = counter
// function clickHandlerIncr() {
//     counter++ 
//     pElem.innerText = counter
// }

// function clickHandlerdecr() {
//     counter--
//     pElem.innerText = counter
// }
// incrButton.addEventListener("click", clickHandlerIncr)
// decrButton.addEventListener("click", clickHandlerdecr)
// --------------------------------------------------------
// const pElem = document.querySelector("p")

// document.addEventListener("keydown", function(event){
//     console.log(event.key);
//     pElem.innerText += event.key
// })
//---------------------------------------------------------
// const pElem = document.createElement("p")
// pElem.innerText = "Clicked"
// pElem.addEventListener("click", function(event){
//     console.log(`Clicked`);
// })
// document.body.append(pElem)

function createParagraph(text){
    const p = document.createElement("p")
    p.innerText = text 
    return p
}
// ---------------------------------first varian------------------------
// const strArr = ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4", "Paragraph 5"]

// const mainDiv = document.querySelector("#main")
// // 
// for (let index = 0; index < strArr.length; index++) {
//     const pElem = document.createElement("p")
//     pElem.innerText = strArr[index]
//     pElem.addEventListener("click", function(){
//         pElem.innerText = "*****"
//     })
//     mainDiv.append(pElem)
// }
// --------------------------------------second variant-----------
// forEach(strArr, function(arrElem) {
//     const pElem = createParagraph(arrElem)
//     pElem.addEventListener("click", function(){
//         pElem.innerText = "*****"
//     })
//     mainDiv.append(pElem)
// })
// ----------------------------------------------------------------

const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg', 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'];

const divThumb = document.querySelector("#thumbnails")
const divPreview = document.querySelector("#preview")
const emptyImgElem = document.createElement("img")
    divPreview.append(emptyImgElem)

for (let index = 0; index < images.length; index++) {
    const newImg = document.createElement("img")
    newImg.setAttribute("src", images[index])
    newImg.addEventListener("click", function(){
        emptyImgElem.setAttribute("src", images[index])
    })
    divThumb.append(newImg)
}
 





