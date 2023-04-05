const taskInput = document.querySelector("#new-item-input")
const form = document.querySelector("form")
const list = document.querySelector("#todo-list")


const todoItems = []



form.addEventListener("submit", function(event){   
    event.preventDefault()
    let text = taskInput.value
    text = text.trim()
    if (text === ""){
        alert("Don't add empty task")
        form.reset() 
        return
    }

    const taskObj = {
        name: text,
        status: false
    }
    todoItems.unshift(taskObj)
    rerender()
    form.reset()   
})

function rerender(){
    list.innerText = ""
     for (let index = 0; index < todoItems.length; index++) {
        const {name, status} = todoItems[index]
        const newItem = createTaskNode(name, status, index)
        list.append(newItem)
    }
 }



function createTaskNode(name, status, index){
        const inputBox = document.createElement("input")
        inputBox.setAttribute("type", "checkbox")
        inputBox.setAttribute("id", `item_${index}`)
        inputBox.checked = status
        

        const labelElem = document.createElement("label")
        labelElem.setAttribute("for", `item_${index}`)
        labelElem.innerText = name
        
        if (status) labelElem.classList.toggle("checked")
        inputBox.addEventListener("change", function(){
            todoItems[index].status = !todoItems[index].status
            labelElem.classList.toggle("checked")
        })


        const remBut = document.createElement("button")
        remBut.setAttribute("class", "remove-item")
        remBut.innerText = "Remove"

        const liElem = document.createElement("li")
        liElem.append(inputBox, labelElem, remBut)
        
        return liElem
        }


