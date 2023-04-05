// const divElem = document.createElement("div")
// divElem.style.width = "100px"
// divElem.style.height = "100px"
// divElem.style.backgroundColor = "green"
// divElem.style.cssText += "border: 1px solid black; box-shadow: 2px 2px 10px black"
// // divElem.setAttribute('style', "width: 100px; height: 100px; background-color: green; border: 1px solid black; box-shadow: black 2px 2px 10px;")
// divElem.addEventListener("mouseover", function(){
//     const r = Math.floor(Math.random()*255)
//     const g = Math.floor(Math.random()*255)
//     const b = Math.floor(Math.random()*255)
//     const rgb = `rgb(${r}, ${g}, ${b})`
//     console.log(rgb);
//     divElem.style.backgroundColor = rgb
//     // setInterval(function(){
//     //     const r = Math.floor(Math.random()*255)
//     // const g = Math.floor(Math.random()*255)
//     // const b = Math.floor(Math.random()*255)
//     // const rgb = `rgb(${r}, ${g}, ${b})`
//     // divElem.style.backgroundColor = rgb
//     // }, 100)
    
// })
// divElem.addEventListener("mouseout", function(){
//     const r = Math.floor(Math.random()*255)
//     const g = Math.floor(Math.random()*255)
//     const b = Math.floor(Math.random()*255)
//     const rgb = `rgb(${r}, ${g}, ${b})`
//     divElem.style.backgroundColor = rgb
// })

// const divMain = document.querySelector(".main")

// for (let index = 0; index < 5; index++) {
//     const div = document.createElement("div")
//     div.style.width = "150px"
//     div.style.height = "150px"
//     const b = Math.floor(Math.random()*255)
//     const rgb = `rgb(128, 128, ${b})`
//     div.style.backgroundColor = rgb
//     divMain.append(div)
// }


// console.log(Math.floor(Math.random()*255));

const form = document.querySelector("form")
const divCont = document.querySelector("#products")
const productNameInp = document.querySelector("#productName")
const productPriceInp = document.querySelector("#productPrice")
const productsDiv = document.querySelector(".products")

const products = []

function createProductCard(name,price) {
    const pName = document.createElement("p")
    pName.innerText = `Product name: ${name}`

    const pPrice = document.createElement("p")
    pPrice.innerText =`Product price:${price}`

    const divCard = document.createElement("div")
    divCard.classList.add("card")

    divCard.append(pName,pPrice)

    return divCard
}

function rerender(){
    productsDiv.innerText = ""
    for (let index = 0; index < products.length; index++) {
        const {name, price} = products[index]
        const card = createProductCard(name, price)
        productsDiv.append(card)
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault()

    const product = {
        name: productNameInp.value,
        price: productPriceInp.value
    }
    products.push(product)
    console.log(products);
    rerender()
    console.log(products);
    
    form.reset()
})

