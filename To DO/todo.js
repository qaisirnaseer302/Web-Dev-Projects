const addTaskButton=document.querySelector("button");
addTaskButton.addEventListener("click",()=>{
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskText;
  span.addEventListener("click",()=>{
    li.classList.toggle("completed");
  });

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  deleteBtn.title = "Delete Task";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  buttonsDiv.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(buttonsDiv);
  taskList.appendChild(li);

  input.value = ""; 
})