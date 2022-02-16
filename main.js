const btnAdd = document.getElementById("add-button");
const btnDel = document.getElementById(".delete-button");
const taskContainer = document.querySelector(".tasks-wrapper");


const imgDone = `<img src="./Img/akar-icons_check-box-filldone-btn.svg" alt="done icon">`;
const imgToDo = `<img src="./Img/akar-icons_check-box-filldone.svg" alt="done icon">`;

const addTaskToList = () => {
  const taskList = document.querySelectorAll(".task");

  for (let n = 0; n < taskList.length; n++) {
    if (taskList.length > 0) {
      taskList[n].lastElementChild.addEventListener("click", taskDone);
    }
  }
};


const createNewTask = () => {
  const task = document.createElement("div");
  taskContainer.appendChild(task);
  task.classList.add("task");

  task.innerHTML = `<div class="task-content">
  <input class="task-content__text" type="text" placeholder="Add new..."></div>
<div class="check-mark button">${imgToDo}
</div>`;

  addTaskToList();
};

btnAdd.addEventListener("click", createNewTask);



function taskDone() {
  const finishedTask = this.parentNode;

  finishedTask.firstElementChild.classList.toggle("task-finished");

  if (finishedTask.firstElementChild.classList.contains("task-finished")) {
    finishedTask.lastElementChild.innerHTML = `${imgDone}`;
  } else {
    finishedTask.lastElementChild.innerHTML = `${imgToDo}`;
  };

}





// window.localStorage.setItem("task", JSON.stringify(`${taskContentText}`));