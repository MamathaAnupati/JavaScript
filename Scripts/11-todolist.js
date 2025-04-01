const todoList=[{
  name:'mamatha',
  dueDate:'2025-02-19'
}];
renderTodoList();
function renderTodoList(){
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++)
    {console.log('abc');
      const todoObject=todoList[i];
      const {name,dueDate}=todoObject;
      //const name=todoObject.name;
      //const dueDate=todoObject.dueDate;
      console.log(`${name} ${dueDate}`);
      const html=`
        <p>${name}</p>
        <p>${dueDate}</p> 
        <button class="delete-todo-button" onclick="
        todoList.splice(${i},1);
        renderTodoList()"
        >Delete</button>`;
      todoListHTML+=html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;
    }
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

