const btnAdd = document.getElementById("add-button");
const btnDel = document.getElementById(".delete-button");
const taskContainer = document.querySelector(".tasks-wrapper");

let taskContentText = "Something different";
const imgDone = `<img src="./Img/akar-icons_check-box-filldone-btn.svg" alt="done icon">`;
const imgToDo = `<img src="./Img/akar-icons_check-box-filldone.svg" alt="done icon">`;

let createNewTask = () => {
  let task = document.createElement("div");
  taskContainer.appendChild(task);
  task.classList.add("task");

  task.innerHTML = `<div class="task-content">
    <p class="task-content__text">${taskContentText}</p></div>
<div class="check-mark button">${imgToDo}
</div>`;

  addTaskToList();
};

btnAdd.addEventListener("click", createNewTask);

let addTaskToList = () => {
  const taskList = document.querySelectorAll(".task");

  for (let n = 0; n < taskList.length; n++) {
    if (taskList.length > 0) {
      taskList[n].addEventListener("click", taskDone);
    }
  }
};

function taskDone() {
  let finishedTask = this;
  finishedTask.firstElementChild.classList.toggle("task-finished");

  if (finishedTask.firstElementChild.classList.contains("task-finished")) {
    finishedTask.lastElementChild.innerHTML = `${imgDone}`;
  } else {
    finishedTask.lastElementChild.innerHTML = `${imgToDo}`;
  }
}

// window.localStorage.setItem("task", JSON.stringify(`${taskContentText}`));
