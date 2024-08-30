var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks



//New Task List Item
var createNewTaskElement = function(taskString) {
	//Create List Item
	var listItem = document.createElement("li");

	//input (checkbox)
	var checkBox = document.createElement("input"); // checkbox
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement("input"); // text
	//button.edit
	var editButton = document.createElement("button");

	//button.delete
	var deleteButton = document.createElement("button");

	//Each element needs modifying

	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	//Each element needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

//Add a new task
var addTask = async function() {
    await addtodo()
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events");
	//select taskListItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var deleteButton = taskListItem.querySelector("button.delete");

	//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;

	//bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler;
}



//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
//addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
	//bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}


async function addtodo(){
    await fetch('http://localhost:3001/add/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
         },
        body: JSON.stringify({
            "todo": taskInput.value
        })
    })
    .then(async res => {
        const data = await res.json();
        console.log(data)
        if (!res.ok) {
            console.log(data.errorCode)
            alert(data.message);
        }else{
            alert('Todo added Successfully!');
        }
    })
    .catch(error => {
        alert(error);
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    async function todoprovider(){
        await fetch('http://localhost:3001/get/todos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(async res => {
            const data = await res.json();
            console.log(data)
            if (!res.ok) {
                console.log(data.errorCode)
                alert(data.message);
            }else{
                data.Data.forEach(element => {
                    console.log(element.todo)
                    createNewTaskElement(element.todo)
                    var listItem = createNewTaskElement(element.todo);
                    incompleteTasksHolder.appendChild(listItem);
                });
                // alert('Todo added Successfully!');
            }
        })
        .catch(error => {
            alert(error);
        });
    }
    todoprovider()
})



