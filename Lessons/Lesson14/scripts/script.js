// const pElem = document.createElement('p')
// pElem.innerText = "Hello world"

const mainDiv = document.querySelector("#main")
// mainDiv.append(pElem)

// const paragraphsTexts = ["Day 1","Day 2","Day 3","Day 4","Day 5",]

// for (let index = 0; index < paragraphsTexts.length; index++) {
//     const p = document.createElement("p")
//     p.innerText = paragraphsTexts[index]
//     div.append(p)
// }

function createParagraph(text){
    const p = document.createElement("p")
    p.innerText = text 
    return p
}



// const imgAddress = prompt("Insert please image address")
// const postAddres = prompt("Insert please post address")

// const newImg = document.createElement("img") 
// newImg.setAttribute("src", imgAddress)

// const newPost = document.createElement("a")
// newPost.setAttribute("href", postAddres)
// newPost.innerText = "Link to post"

// const newDiv = document.createElement("div")
// newDiv.append(newImg, newPost)
// mainDiv.append(newDiv)


const products = [
    {
        name: "Macbook",
        image: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202302272007",
        count: 10,
        price: 3000
    },
    {
        name: "Acer",
        image: "https://www.dateks.lv/images/pic/2400/2400/109/1162.jpg",
        count: 15,
        price: 2500
    }
]

let totalPrice = 0
let totalCount = 0 

for (let index = 0; index < products.length; index++) {

    const newDiv = document.createElement("div") 

    const {name, price, count, image} = products[index]

    const productImg = document.createElement("img")
        productImg.setAttribute("src", image)
        productImg.setAttribute("alt", name)

        totalPrice += price
        totalCount += count

    const pName = createParagraph(`Product: ${name}`)
        const pPrice = createParagraph(`Price: ${price}`)
        const pCount = createParagraph(`Count: ${count}`)

    newDiv.append(productImg, pName, pPrice, pCount)
    mainDiv.append(newDiv)


}


document.body.append(
    createParagraph(`Total price: ${totalPrice}`),
    createParagraph(`Total count: ${totalCount}`)
    )