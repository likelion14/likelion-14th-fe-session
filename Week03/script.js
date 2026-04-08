const input = document.getElementById("input-area");
const addBtn = document.getElementById("add");
const listContainer = document.querySelector(".todolist-container");
const toast = document.getElementById("toast");


function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
}


addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const item = document.createElement("div");
    item.classList.add("todolist");

    const label = document.createElement("label");
    label.classList.add("checkbox");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.classList.add("check-icon");
    span.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
    `;

    const textNode = document.createTextNode(text);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6l12 12" />
        </svg>
    `;

    label.appendChild(checkbox);
    label.appendChild(span);
    label.appendChild(textNode);

    item.appendChild(label);
    item.appendChild(deleteBtn);

    listContainer.appendChild(item);


    showToast("할 일이 추가되었습니다");

    checkbox.addEventListener("change", () => {
        label.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        item.remove();
        showToast("삭제되었습니다");
    });

    input.value = "";
});