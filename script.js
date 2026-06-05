function addTask(){
    var taskInput=document.getElementById("new-task")
    var taskList=document.getElementById("task-list")
    if(taskInput.value===""){
        alert("Please enter a task")
        return
    }
    var listItems=document.createElement("li")
    listItems.innerText=taskInput.value

    var buttonContainer=document.createElement("div")
    buttonContainer.className="button-container"

    var deleteButton=document.createElement("button")
    deleteButton.innerText="Delete"
    deleteButton.onclick=function(){
       taskList.removeChild(listItems)
    }

    var completeButton=document.createElement("button")
    completeButton.innerText="Complete"
    completeButton.onclick=function(){
        listItems.classList.toggle("completed")
    }

    buttonContainer.appendChild(completeButton)
    buttonContainer.appendChild(deleteButton)
    listItems.appendChild(buttonContainer)
    taskList.appendChild(listItems)
taskInput.value=""
}
