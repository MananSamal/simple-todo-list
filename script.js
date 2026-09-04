function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const list = document.getElementById("taskList");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.onclick = function () {
        span.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = "";
}
