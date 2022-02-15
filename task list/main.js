const btnAdd = document.querySelector(".add");
const taskList = document.querySelector(".tasks-wrapper");

btnAdd.addEventListener("click", createNewTask);

let taskContentText = "Something different";
let imgToDo = `<img src="./Img/akar-icons_check-box-filldone-btn.svg" alt="done icon">`;
let imgDone = `<img src="./Img/akar-icons_check-box-filldone.svg" alt="done icon">`;

function createNewTask() {
  let task = document.createElement("div");
  taskList.appendChild(task);
  task.classList.add("task");

  task.innerHTML = `<div class="task-content">
    <p class="task-content__text">${taskContentText}</p></div>
<div class="check-mark">${imgToDo}
</div>`;

  window.localStorage.setItem("task", JSON.stringify(`${taskContentText}`));

  // let taskContent = document.createElement("div");
  // task.appendChild(taskContent);
  // taskContent.classList.add("task-content");

  // let taskContentText = document.createElement("p");
  // taskContent.appendChild(taskContentText);
  // taskContentText.classList.add("task-content__text")

  // taskContentText.innerHTML = "New task added to list";

  // let checkMark = document.createElement("div");
  // task.insertAdjacentElement("beforeend", checkMark)

  // checkMark.classList.add("check-mark");
  // checkMark.innerHTML = "<img src='./Img/akar-icons_check-box-filldone-btn.svg'>";
}
