let taskInput = document.getElementById("taskInput");

let addBtn = document.getElementById("addBtn");

let taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function(){

    if(taskInput.value === ""){
        alert("Please enter a task");
        return;
    }

    // create li
    let li = document.createElement("li");

    li.textContent = taskInput.value;


    // complete task
    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });


    // delete button
    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");


    // delete task
    deleteBtn.addEventListener("click", function(event){

        event.stopPropagation();

        li.remove();
    });


    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});