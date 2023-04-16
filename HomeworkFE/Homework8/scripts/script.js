// ---------------------------------------------- task 1
function createParagraph(){
    for (let index = 100; index > 40; index-=10) {
        const p = document.createElement("p")
        p.innerText = index
        divNumbers.append(p)
    }
}

const divElem = document.createElement("div")
divElem.classList.add("numbers")
document.body.append(divElem)
createParagraph()

// ------------------------------------------------ task 2

const divStr = document.createElement("div")
divStr.classList.add("strings_container")
document.body.append(divStr)
const arrayOfStrings = ["Lorem","ipsum","aqua"]
createStr()

function createStr(){
    for (let index = 0; index < arrayOfStrings.length; index++) {
        const p = document.createElement("p")
            p.innerText = arrayOfStrings[index]
            divStr.append(p)
    }
}

// ---------------------------------------------- task 3

const divUsers = document.createElement("div")
divUsers.classList.add("users_container")
document.body.append(divUsers)
const users =[
    {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 17,
    },
    {
    firstName: "Alex",
    lastName: "Mercer",
    age: 22,
    },
    {
    firstName: "Max",
    lastName: "Olley",
    age: 16,
    }
]

for (let index = 0; index < users.length; index++) {
    if(users[index].age>=18){
        const{firstName, lastName, age}= users[index]
        const div = document.createElement("div")   
        divUsers.append(div) 
        const pName = document.createElement("p")
        pName.innerText = `Name: ${firstName}`
        const pSecondName = document.createElement("p")
        pSecondName.innerText = `Last name: ${lastName}`
        const pAge = document.createElement("p")
        pAge.innerText = `Age: ${age}`
        div.append(pName,pSecondName,pAge)
    }
}