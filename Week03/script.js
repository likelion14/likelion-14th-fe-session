document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const button = document.getElementById("addTask");
    const msg = document.getElementById("msg"); // 메시지 요소 추가

    // 메시지를 표시하고 자동으로 사라지게 하는 함수
    async function showMessage(text) {
        msg.textContent = text;
        msg.classList.add("show");    // 페이드인
        await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5초 유지
        msg.classList.remove("show"); // 페이드아웃
        await new Promise(resolve => setTimeout(resolve, 300));  // 페이드아웃 끝날 때까지 대기
        msg.textContent = "";
    }

    button.addEventListener("click", async () => { // async 추가
        if (inputBox.value === '') {
            alert("입력된 할 일이 없습니다.");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
        await showMessage("✅ 할 일이 추가되었습니다."); // 비동기 메시지
    });

    listContainer.addEventListener("click", async function (e) { // async 추가
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
            await showMessage("📝 상태가 변경되었습니다."); // 비동기 메시지
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
            await showMessage("🗑️ 할 일이 삭제되었습니다."); // 비동기 메시지
        }
    }, false);

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();
});