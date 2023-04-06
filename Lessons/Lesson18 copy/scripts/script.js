const taskInput = document.querySelector("#new-item-input")
const form = document.querySelector("form")
const list = document.querySelector("#todo-list")
const dateInput = document.querySelector("#new-item-date")


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

    let date = dateInput.value

    const taskObj = {
        name: text,
        status: false,
        date: dateInput.value
    }
    todoItems.unshift(taskObj)
    rerender()
    form.reset()   
})

function rerender(){
    list.innerText = ""
     for (let index = 0; index < todoItems.length; index++) {
        const newItem = createTaskNode(todoItems[index], index)
        list.append(newItem)
    }
 }



function createTaskNode({name, status, date}, index){
        const inputStatus = document.createElement("input")
        inputStatus.setAttribute("type", "checkbox")
        inputStatus.setAttribute("id", `item_${index}`)
        inputStatus.checked = status
        
        const labelElem = document.createElement("label")
        labelElem.setAttribute("for", `item_${index}`)
        labelElem.innerText = name
        
        if (status) labelElem.classList.toggle("checked")
        inputStatus.addEventListener("change", function(){
            todoItems[index].status = !todoItems[index].status
            labelElem.classList.toggle("checked")
        })
        const editInp = document.createElement("input")
        editInp.setAttribute("type", "text")
        editInp.classList.add("hidden")
        editInp.setAttribute("value", name)

        const btnDiv = document.createElement("div")

        const editBut = document.createElement("button")
        editBut.classList.add("edit-item")
        editBut.innerText = "Edit"

        editBut.addEventListener("click", function(){
            labelElem.classList.toggle("hidden")
            editInp.classList.toggle("hidden")
            
            let newText = editInp.value
            newText = newText.trim()
            
            if (newText === "" && editInp.classList.contains("hidden")) {
                alert("Can't save empty task")
                editInp.value = name
                return}
            labelElem.innerText = newText
            todoItems[index].name = newText
        })
        const remBut = document.createElement("button")
        remBut.setAttribute("class", "remove-item")
        remBut.innerText = "Remove"
        remBut.addEventListener("click", function(){
            todoItems.splice(index, 1)
            rerender()
        })
        const liElem = document.createElement("li")
        liElem.setAttribute("data-date", date)
        btnDiv.append(editBut,remBut)
        liElem.append(inputStatus, labelElem,editInp, btnDiv)
        
        return liElem
        }


