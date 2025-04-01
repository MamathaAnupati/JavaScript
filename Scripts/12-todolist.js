const todoList=[{
  name:'mamatha',
  dueDate:'2025-02-19'
}];
renderTodoList();
function renderTodoList(){
    let todoListHTML='';
    todoList.forEach((todoObject,index)=>{
      
      const {name,dueDate}=todoObject;

      console.log(`${name} ${dueDate}`);
      const html=`
        <p>${name}</p>
        <p>${dueDate}</p> 
        <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
      todoListHTML+=html;
    })
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;
    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton,index)=>{deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList()
    })})
    }
    document.querySelector('.js-add-todo').addEventListener('click',()=>{addTodo();});
function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;
  const dateInputElement= document.querySelector('.js-due-date-input');
  const dueDate=dateInputElement.value;
  /*todoList.push(
    {name:name,
    dueDate:dueDate}
  );*/
  todoList.push({name,dueDate});
  console.log(todoList);
  inputElement.value='';
  renderTodoList();
}

