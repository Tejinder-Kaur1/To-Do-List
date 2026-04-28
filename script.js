// let button = document.getElementsByTagName("button");
// button.addEventListener("click", addTask);

function addTask() 
{
  const newTask = document.createElement("li");
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newTask);
  newTask.textContent = document.getElementById("inputTask").value;
  // jo v input field ch likhage o cheej store hoju

  document.getElementById("inputTask").value = ""; // input field empty v hoju
  deleteTask(newTask);
}

function deleteTask(newTask) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  newTask.appendChild(deleteBtn);
  deleteBtn.onclick = function () {
    newTask.remove();
  };
}
