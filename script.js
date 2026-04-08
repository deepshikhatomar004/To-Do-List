function addTask(){
    const input = document.getElementById('inputTask');
    const taskValue = input.value.trim();

    if(taskValue === ""){
        return;
    }

    const newTask = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function(){
        newTask.remove();
    };

    newTask.appendChild(taskText);
    newTask.appendChild(deleteBtn);

    document.getElementById('tasklist').appendChild(newTask);
    input.value = '';
}
