const button = document.querySelector("#add-button");
//input 변수로 지정해서 todo-input에 있는 값 가져오기
const input = document.querySelector("#todo-input");
//ul 변수로 지정해서 ul 태그 가져오기
const ul = document.querySelector("ul");
// 버튼 클릭하면 ~ 함수
button.addEventListener("click", () => {

  //li 변수를 만들고 html에서 li 태그 역할하도록 설정
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const doneBtn = document.createElement("button");

  //li 안에 input.value 값을 넣어주기
  li.textContent = input.value;
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click",( )=>{
    li.remove();
  })
  doneBtn.textContent = "완료";
  doneBtn.addEventListener("click",()=>{
    li.classList.toggle("done");

    //할 일이 완료되면 1초 후에 alert 창 띄우기
    setTimeout(() => {
     alert(`'${input.value}' 마무리 되었습니다.`);
    },1000)
  })

  li.appendChild(deleteBtn);
  li.appendChild(doneBtn);
  //li 태그를 ul 태그 안에 넣어주기
  ul.appendChild(li);
});


