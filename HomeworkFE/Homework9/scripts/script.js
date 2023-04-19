const form = document.querySelector("form")
const nameInput = document.querySelector("#name")
const surnameInput = document.querySelector("#surname")
const ageInput = document.querySelector("#age")
const div = document.querySelector(".cards-of-users")
div.style.display = "flex"
const users = []

form.addEventListener("submit", function(event){

    event.preventDefault()
    let name = nameInput.value.trim()
    if(name===""){
        alert("ERROR:empty values")
        form.reset()
        return
    }
    let surname = surnameInput.value.trim()
    if(surname===""){
        alert("ERROR:empty values")
        form.reset()
        return
    }
    let age = ageInput.value.trim()
    if(age===""){
        alert("ERROR:empty values")
        form.reset()
        return
    }
    const user={
        name: name,
        surname: surname,
        age: age
    }
    users.push(user)
    console.log(users);
    rerender();
    form.reset()
})

function rerender(){
    div.innerHTML=""
    for (let index = 0; index < users.length; index++) {
        const userCard =createUserCard(users[index], index)
        div.append(userCard) 
        userCard.addEventListener("dblclick", function(){
            users.splice(index,1)
            rerender()
        })     
    }
}

function createUserCard({name, surname, age}, index){

    const div = document.createElement("div")
    div.style.width = "20%"
    div.style.padding="10px"
    div.style.margin = "10px"
    div.style.border = "1px solid black"
    div.style.backgroundColor = "lightgrey"
    div.style.borderRadius = "8px"
    const pId = document.createElement("p")
    pId.innerText = `id: ${index+1}`
    const pName = document.createElement("p")
    pName.innerText = `Name: ${name}`
    const pSecondName = document.createElement("p")
    pSecondName.innerText = `Last name: ${surname}`
    const pAge = document.createElement("p")
    pAge.innerText = `Age: ${age}`
    div.append(pId,pName,pSecondName,pAge)
    return div
}

