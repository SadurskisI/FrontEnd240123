// DOM -> document object model
// .main {}
// #main {}
// div

// const paragraph = document.querySelector("p")
// // console.log(paragraph);

// const paragraphs = document.querySelectorAll("p")
// console.log(paragraphs);

// for (let index = 0; index < paragraphs.length; index++) {
//     console.log(paragraphs[index]);
// }

// const paragraph = document.querySelector(".second-box p")
// console.log(paragraph);

// const p = document.querySelector(".f-paragraph")
// console.log(p.innerText);
// p.innerText = "Hello world"

// const div = document.querySelector(".second-box")
// console.log(div.innerHTML);
// div.innerHTML = `<p class="f-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus, tenetur suscipit ducimus sint alias, repudiandae aut fuga recusandae natus rerum perspiciatis itaque? Voluptas fugiat eligendi doloribus nesciunt, fuga quos.</p>`

// const p = document.querySelectorAll("p.item")
// console.log(p);

// for (let index = 0; index < p.length; index++) {
//         p[index].innerText = "Hello"
// }

// const itemList = document.querySelectorAll("p.item")
// const arr = []
// for (let index = 0; index < itemList.length; index++) {
//     arr.push(itemList[index].innerText)
// }
// console.log(arr);

// const imgElem = document.querySelector("img")
// console.log(imgElem.src);
// console.log(imgElem.alt);

// imgElem.setAttribute("src", "`link")
// imgElem.setAttribute("alt", "image")
// imgElem.setAttribute("data-content", "new")

// const imgItem = document.querySelectorAll(".main img")

// for (let index = 0; index < 4; index++) {
//     imgItem[index].setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/ReggaeV4.0-48x48.svg/48px-ReggaeV4.0-48x48.svg.png?20160326192948")
// }

// const pElem = document.createElement("p")
// const pElem2 = document.createElement("p")
// const divElem = document.querySelector(".main")
// pElem.innerText = "Lorem ipsum"
// pElem2.innerText = "abcd"
// divElem.append(pElem,pElem2)
// // divElem.prepend(pElem)
// divElem.appendChild()

const paragraphsTexts = ["Day 1","Day 2","Day 3","Day 4","Day 5"]
const div =document.querySelector("#paragraphs")


for (let index = 0; index < paragraphsTexts.length; index++) {
        const p = document.createElement("p")
        p.innerText = paragraphsTexts[index]
        div.append(p)
}