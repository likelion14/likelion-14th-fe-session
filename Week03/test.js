const addBtn = document.querySelector('#addBtn'); // 추가 버튼 선택

function keyCodeCheck () {
    // console.log(window.event) // 연결 확인용

	if(window.event.keyCode === 13 && todoInput.value !== ''){ // 엔터 누르면 등록!
        createTodo();

        showAddMessage()
        .then((result) => {
            alert(result); // 성공 시 실행
        })
        .catch((error) => {
            alert(error); // 실패 시 실행
        });
    }
}

addBtn.addEventListener('click', () => { // 추가 버튼으로 추가하기
    if(todoInput.value !== ''){ // 빈 값 입력 방지!
        createTodo();

        // Promise 사용
        showAddMessage()
        .then((result) => {
            alert(result); // 성공 시 실행
        })
        .catch((error) => {
            alert(error); // 실패 시 실행
        });
    }
})

function createTodo () { // 할 일 추가 기능 함수
	const todoList = document.querySelector('#todoList');
	const newLi = document.createElement('li');
    const checkBox = document.createElement("input");
    const newDelBtn = document.createElement('button');
	const newSpan = document.createElement('span');
	const todoInput = document.querySelector('#todoInput');
      
    newLi.appendChild(checkBox); // li안에 체크박스 담기
	newLi.appendChild(newSpan); // li안에 글자 담을 span 담기
    newLi.appendChild(newDelBtn); // li안에 삭제 버튼 담기

    checkBox.type = "checkbox";
      
	newSpan.textContent = todoInput.value; // span 안에 입력한 value값 담기
      
	todoList.appendChild(newLi);
      
	todoInput.value = ''; // input창 value 값에 빈 문자열 담아서 초기화
    
    newDelBtn.classList.add('delete-btn');
    newDelBtn.innerText = "삭제";

    checkBox.addEventListener('click', () => { // 체크박스 클릭시 완료 표시
		newLi.classList.toggle('complete');
    });

    newDelBtn.addEventListener('click', () => { // 클릭 시 제거
		todoList.removeChild(event.currentTarget.parentNode);

        showDelMessage()
        .then((result) => {
        alert(result); // 성공 시 실행
        })
        .catch((error) => {
            alert(error); // 실패 시 실행
        });
    });
}

const showAddMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const success = true;

        if (success) {
            resolve("리스트가 추가되었습니다.");
        } else {
            reject("리스트 추가에 실패하였습니다.");
        }
        }, 2000); // 2초 후 실행
    });
};

const showDelMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const success = true; // 성공 여부 설정

        if (success) {
            resolve("리스트가 삭제되었습니다.");
        } else {
            reject("리스트 삭제에 실패하였습니다.");
        }
        }, 1000); // 1초 후 실행
    });
};