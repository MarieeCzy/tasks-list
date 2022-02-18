const btnAdd = document.getElementById("add-button");
const btnDel = document.getElementById("delete-button");
const taskToDoContainer = document.querySelector(".tasks-todo-wrapper");
const taskDoneContainer = document.querySelector(".tasks-done");

const imgDone = `<img src="./Img/akar-icons_check-box-filldone-btn.svg" alt="done icon">`;
const imgToDo = `<img src="./Img/akar-icons_check-box-filldone.svg" alt="done icon">`;

//create list of all tasks

const addTaskToList = () => {
  const taskList = document.querySelectorAll(".task");

  for (let n = 0; n < taskList.length; n++) {
    if (taskList.length > 0) {
      taskList[n].lastElementChild.addEventListener(
        "click",
        markTaskAsDoneOrToDo
      );
    }
  }
};

//add new task to document

const createNewTask = () => {
  const task = document.createElement("div");
  taskToDoContainer.appendChild(task);
  task.classList.add("task");

  task.innerHTML = `<div class="task-content">
  <input class="task-content__text" type="text" placeholder="Add new..."></div>
<div class="check-mark button">${imgToDo}
</div>`;

  focusMethod = getFocus;

  addTaskToList();
};

function getFocus() {
  const lastTask = taskToDoContainer.lastElementChild;
  const inputActive = lastTask.querySelector(".task-content__text");
  inputActive.focus();
}

document.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    createNewTask();
    getFocus();
  }
});

btnAdd.addEventListener("click", createNewTask);

//mark task

function markTaskAsDoneOrToDo() {
  const finishedTask = this.parentNode;

  finishedTask.firstElementChild.classList.toggle("task-finished");

  if (finishedTask.firstElementChild.classList.contains("task-finished")) {
    finishedTask.lastElementChild.innerHTML = `${imgDone}`;
    taskDoneContainer.appendChild(finishedTask);
  } else {
    finishedTask.lastElementChild.innerHTML = `${imgToDo}`;
    taskToDoContainer.appendChild(finishedTask);
  }

  btnDel.addEventListener("click", delAllFinished);
}

//delete all finished tasks

function delAllFinished() {
  const allToDel = document.querySelectorAll(".task-finished");
  for (const el of allToDel) {
    el.parentNode.remove();
  }
}
