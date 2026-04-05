const TodoAdd = document.getElementById('todo-add');
const AddButton = document.getElementById('add-button');
const TodoTem = document.getElementById('todo-tem');
const TodoList = document.getElementById('todo-list');

AddButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (TodoAdd.value === '') {
    alert("할 일을 작성하세요");
    return;
  }
  setTimeout(() => {
    alert("할 일 추가 완료!");
    
    const TemClone = TodoTem.content.cloneNode(true);
    const TodoText = TemClone.querySelector('.todo-text');
    TodoText.textContent = TodoAdd.value;
  
    const DelButton = TemClone.querySelector('#del-button');
    const TodoCard = TemClone.querySelector('.todo-card');
    DelButton.addEventListener('click', () => {
      setTimeout(() => {
        TodoCard.remove();
        alert("삭제되었습니다");
      }, 1000);
    })

    const TodoCheck = TemClone.querySelector('#todo-check');
    TodoCard.addEventListener('click', (e) => {
      if (e.target.id === 'del-button') return;
      if (e.target.id !== 'todo-check')
        TodoCheck.checked = !TodoCheck.checked;
      if (TodoCheck.checked) 
        TodoText.style.cssText = 'color: gray; text-decoration: line-through;';
      else
        TodoText.style.cssText = 'text-decoration: none;';
    });

    TodoList.appendChild(TemClone);
    TodoAdd.value = '';
  }, 2000);
});