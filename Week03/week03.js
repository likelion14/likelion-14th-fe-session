const inputField = document.getElementById("user_input");
const addButton = document.querySelector(".add_btn");
const listContainer = document.querySelector(".list_container") || document.createElement("div"); 
if (!document.querySelector(".list_container")) {
  listContainer.classList.add("list_container");
  document.querySelector(".card").appendChild(listContainer);
}

const showAlert = (message) => {
    const alertBox = document.createElement("div");
    alertBox.classList.add("popup_alert");
    alertBox.innerHTML = `${message}`;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
};

// 로컬 스토리지에서 데이터 불러오기
  const loadItems = () => {
    const savedItems = JSON.parse(localStorage.getItem("todoList")) || [];
    savedItems.forEach(item => createItem(item.text, item.completed));
  };


  // 리스트 아이템 생성
  const createItem = (text, completed) => {
    const item = document.createElement("div");
    item.classList.add("list_item");

  // 체크박스 생성
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.checked = completed;

  // 텍스트 요소 생성
  const textElement = document.createElement("span");
  textElement.textContent = text;
  if(completed) textElement.classList.add("completed");

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.classList.add("delete_btn");

  // 수정 버튼 생성
  const editButton = document.createElement("button");
  editButton.textContent = "수정";
  editButton.classList.add("edit_btn");

  // 체크박스 클릭 시 텍스트에  취소선
  checkbox.addEventListener("change", () => {
    textElement.classList.toggle("completed", checkbox.checked);
    if (checkbox.checked) {
        listContainer.appendChild(item);  
    } else {
        listContainer.prepend(item);  
    }
    saveItems();
  });
  
  editButton.addEventListener("click", () => {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = textElement.textContent;
    editInput.classList.add("edit_input");
    item.replaceChild(editInput, textElement);
    editInput.focus();

    // 엔터키를 눌렀을때 수정 완료
    editInput.addEventListener("keypress", (event => {
        if (event.key == "Enter") {
            const newText = editInput.value.trim();
            if (newText) {
                textElement.textContent = newText;
                item.replaceChild(textElement, editInput);
            }
            saveItems();
        }
    }));

  });

  // 삭제 시 1초 후 삭제
  deleteButton.addEventListener("click", () => {
    setTimeout(() => {
        if (listContainer.contains(item)) {
            listContainer.removeChild(item);
            showAlert("삭제 완료!");
            saveItems();
        }
    });
  });

  // 요소 추가
  item.appendChild(checkbox);
  item.appendChild(textElement);
  item.appendChild(editButton);
  item.appendChild(deleteButton);
  if (completed) {
    listContainer.appendChild(item); // 체크된 항목은 맨 아래에 추가
} else {
    listContainer.prepend(item); // 체크되지 않은 항목은 맨 위에 추가
}


  saveItems();
};

// 추가 시 1.3초 후 알림
const addItem = () => {
    const userInput = inputField.value.trim();
    if (!userInput) return;

    createItem(userInput, false); // 즉시 추가
    inputField.value = "";
    inputField.focus();
    saveItems();

    setTimeout(() => {
        showAlert("추가 완료 !");
    }, 1300);
};

const saveItems = () => {
    const items = [];
    document.querySelectorAll(".list_item").forEach(item => {
        items.push({
            text: item.querySelector("span").textContent,
            completed: item.querySelector("input").checked
        });
    });
    localStorage.setItem("todoList", JSON.stringify(items));
};


addButton.addEventListener("click", addItem);
inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") addItem();
});

loadItems();